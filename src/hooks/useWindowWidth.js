import { useState, useEffect } from "react";


export default function useWindowWidth() {
   const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleWindowWidth = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowWidth);

        handleWindowWidth();

        return () => {
            window.removeEventListener('resize', handleWindowWidth);
        }
    }, []);


    return width;
}