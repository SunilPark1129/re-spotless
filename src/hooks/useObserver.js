/*
Created by Sunil Park

Purpose:
each time you move a page (when updated param), the window scrolls to the top of the page.
*/

import React, { useState, useMemo, useEffect } from "react";

const useObserver = (options, targetRef, observing) => {
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if (currentTarget && !isVisible) {
            observer.observe(currentTarget);
        }
        if (observing) {
            observer.observe(currentTarget);
        }
        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [targetRef, optionsMemo]);
    return isVisible;
};

export default useObserver;