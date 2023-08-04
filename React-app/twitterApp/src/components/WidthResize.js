import { useEffect, useLayoutEffect, useRef, useState } from "react";


const WidthHighlighter = () => {
    const divRef = useRef();

    useLayoutEffect(() => {
        const handleResize = () => {
            divRef.current.textContent = window.innerWidth;
        }
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
        <div>1. The width is: <span ref={divRef}></span></div>
    )
}

export default WidthHighlighter;