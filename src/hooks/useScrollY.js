import { useState, useEffect } from "react";



export default function useScrollY() {
    const [windowScrollY, setWindowScrollY] = useState(0);
    useEffect(() => {
        const handleScrollY = () => setWindowScrollY(window.scrollY);
        handleScrollY();
        window.addEventListener('scroll', handleScrollY);
        return () => window.removeEventListener('scroll', handleScrollY);
    }, []);
    return windowScrollY; 
}
