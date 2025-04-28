import { useState, useEffect } from "react";


export default function useWindowWidth() {
    const [width, setWith] = useState(window.innerWidth);


    useEffect(() => {
        const handleWindowWidth = () => {
            setWith(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowWidth);

        handleWindowWidth();

        return () => {
            window.removeEventListener('resize', handleWindowWidth);
        }
    }, [width]);


    return width;
}