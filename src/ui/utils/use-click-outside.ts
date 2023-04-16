import {useEffect} from "react";

export const useClickOutside = (dom: any, callback: any) => {
    const handleClick = (e: any) => {
        if (dom && !dom.contains(e.target)) {
            callback();
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};