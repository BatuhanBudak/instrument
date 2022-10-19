import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function useScrollPos() {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollMove, setScrollMove] = useState("");
    const [scrollClass, setScrollClass] = useState("");
    const headerHeight = 120;


    useEffect(() => {


        const checkScrollClass = () => {
            if (scrollMove === "") {
                setScrollClass("");
            } else if (scrollMove === "up") {
                setScrollClass('scrollUp');
            } else if (scrollMove === "down") {
                setScrollClass('scrollDown');
            }
        };

        function handleScroll() {
            let currentScroll = window.scrollY;
            if (currentScroll <= headerHeight) {
                setScrollMove("up");
                checkScrollClass();
                return;
            }
            //Scroll Down
            if (currentScroll > lastScrollY) {
                setScrollMove("down");
                checkScrollClass();
            }
            //Scroll Up
            else if (currentScroll < lastScrollY) {
                setScrollMove("up");
                checkScrollClass();
            }
            setLastScrollY(currentScroll);
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, scrollMove]);

    return scrollClass;
}
