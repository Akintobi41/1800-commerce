import { useEffect, useState } from "react";

const useScroll = () => {

    const [backToTopButton, setBackToTopButton] = useState<boolean>(false);

    const controlDirection = () => {
        if (window.scrollY > 300) {
            setBackToTopButton(true);
        } else {
            setBackToTopButton(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };
    }, []);

    function Scroll() {
        window.scrollTo(0, 0);
    }
    return { Scroll, backToTopButton }
}

export default useScroll