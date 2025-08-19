import { useEffect, useRef, useState } from "react";

export function useStickyHeader(): string {
	const [isSticky, setIsSticky] = useState("");
	const prevScrollPos = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (currentScrollPos > prevScrollPos.current) {
				// Scrolling down
				setIsSticky("cs_gescout_sticky");
			} else if (currentScrollPos > 0) {
				// Scrolling up
				setIsSticky("cs_gescout_sticky cs_gescout_show");
			} else {
				// Top of page
				setIsSticky("");
			}

			prevScrollPos.current = currentScrollPos;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return isSticky;
}
