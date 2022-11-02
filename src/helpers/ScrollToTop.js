/*
Created by Sunil Park

Purpose:
each time you move a page, the window scrolls to the top of the page.
*/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}