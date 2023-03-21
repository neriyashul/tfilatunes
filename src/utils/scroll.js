export function onCreepScroll(handler) {
    let scrollTimerId = null;
    let prevPosition = window.pageYOffset;
    const smallDistance = 12;
    const measuredTime = 100; // in Milliseconds

    function updateFirstVisible() {
        const currentPosition = window.pageYOffset;
        const distanceScrolled = Math.abs(currentPosition - prevPosition);

        if (distanceScrolled < smallDistance) {
            handler();
            clearTimer();
            scrollTimerId = null;
        }

        prevPosition = currentPosition;
    }

    function setTimer() {
        if (scrollTimerId === null) {
            scrollTimerId = window.setInterval(
                updateFirstVisible,
                measuredTime
            );
        }
    }

    function clearTimer() {
        clearInterval(scrollTimerId);
    }

    window.addEventListener("scroll", setTimer);

    return {
        clean: () => {
            clearTimer();
            window.removeEventListener("scroll", setTimer);
        },
    };
}

export function scrollToElement(elements, index, root = null, behavior="smooth") {
    if (!elements) return;
    const containerTop = root?.getBoundingClientRect().top ?? 0;

    if (index >= 0 && index < elements.length) {
        const el = elements[index];
        const top = el.getBoundingClientRect().top;
        const y = top + window.scrollY - containerTop;
        window.scrollTo({ top: y, behavior });
    }
}

export function onFirstVisibleChanged(
    func,
    elements,
    root = null,
    rootMarginTop = 0
) {
    const containerTop = root?.getBoundingClientRect().top ?? 0;

    function rediscoverFirstVisible() {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const bounding = element.getBoundingClientRect();
            const top = containerTop - rootMarginTop;
            if (bounding.bottom > top) {
                func(i);
                break;
            }
        }
    }

    const listener = onCreepScroll(rediscoverFirstVisible);
    return listener;
}
