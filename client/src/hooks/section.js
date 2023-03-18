import { useEffect, useRef, useState } from "react";
import {
    NavigationType,
    useLocation,
    useNavigationType,
} from "react-router-dom";
import { onFirstVisibleChanged, scrollToElement } from "../utils/scroll";

const POP = NavigationType.Pop;

function useFirstIndex(name) {
    const navigationType = useNavigationType();
    const isFirstTime = useRef(true);

    let firstIndex = 0;
    if (isFirstTime.current) {
        const prevIndex = sessionStorage.getItem(name);
        if (navigationType === POP && prevIndex !== null) {
            firstIndex = parseInt(prevIndex);
        } else {
            sessionStorage.removeItem(name);
        }
    }

    useEffect(() => {
        isFirstTime.current = false;
    }, []);

    useEffect(() => {
        const removeStorage = () => sessionStorage.removeItem(name);
        window.addEventListener("beforeunload", removeStorage); // on reload
        return () => window.removeEventListener("beforeunload", removeStorage);
    }, []);

    const updateFirstIndex = (index) => {
        sessionStorage.setItem(name, index);
    };

    return [firstIndex, updateFirstIndex];
}

function updateSectionIndex(oldIndex, newIndex) {
    if (oldIndex.secFirstIndex !== newIndex) {
        return {
            secFirstIndex: newIndex,
            subsecFirstIndex: 0,
        };
    } else {
        return oldIndex;
    }
}

function updateSubsectionIndex(oldIndex, newIndex) {
    return {
        secFirstIndex: oldIndex.secFirstIndex,
        subsecFirstIndex: newIndex,
    };
}

function useSectionFirstIndexes() {
    const { pathname } = useLocation();
    const [secFirstIndex, updateSecFirstIndex] = useFirstIndex(
        `${pathname}-sectionIndex`
    );
    const [subsecFirstIndex, updateSubsecFirstIndex] = useFirstIndex(
        `${pathname}-subsectionIndex`
    );

    const [indexes, setIndexes] = useState({ secFirstIndex, subsecFirstIndex });

    useEffect(() => {
        updateSecFirstIndex(indexes.secFirstIndex);
        updateSubsecFirstIndex(indexes.subsecFirstIndex);
    }, [indexes]);

    return [indexes, setIndexes];
}

export function useSection(sectionRefs, sectionsArea, rootMarginTop) {
    const [indexes, setIndexes] = useSectionFirstIndexes();

    const setSectionIndex = (newIndex) =>
        setIndexes((oldIndex) => updateSectionIndex(oldIndex, newIndex));

    useEffect(() => {
        const listener = onFirstVisibleChanged(
            (i) => setSectionIndex(i),
            sectionRefs.current,
            sectionsArea?.current,
            rootMarginTop
        );
        return () => listener.clean();
    }, []);

    const scrollToSection = (index) => {
        scrollToElement(sectionRefs.current, index, sectionsArea.current);
        if (index < sectionRefs.current.length && index > 0)
            setSectionIndex(index);
    };

    const setSubsecFirstIndex = (newIndex) =>
        setIndexes((oldIndex) => updateSubsectionIndex(oldIndex, newIndex));

    return [
        indexes.secFirstIndex,
        scrollToSection,
        indexes.subsecFirstIndex,
        setSubsecFirstIndex,
    ];
}
