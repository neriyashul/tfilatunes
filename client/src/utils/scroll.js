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
