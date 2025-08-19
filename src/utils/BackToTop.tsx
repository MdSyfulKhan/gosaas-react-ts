import { useEffect, useState } from "react";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollThreshold = 300;
			setIsVisible(window.scrollY > scrollThreshold);
		};

		// Add event listener immediately
		window.addEventListener("scroll", handleScroll);

		// Check initial scroll position
		handleScroll();

		// Cleanup
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			type="button"
			aria-label="Scroll to top"
			className={`cs_scrollup cs_purple_bg cs_white_color cs_radius_100 ${
				isVisible ? "cs_scrollup_show" : ""
			}`}
			onClick={scrollToTop}
			style={{
				position: "fixed",
				bottom: "20px",
				right: "20px",
				width: "50px",
				height: "50px",
				borderRadius: "50%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
				border: "none",
				opacity: isVisible ? 1 : 0,
				visibility: isVisible ? "visible" : "hidden",
				transition: "opacity 0.3s, visibility 0.3s",
				zIndex: 999,
			}}
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z"
					fill="currentColor"
				/>
			</svg>
		</button>
	);
};

export default BackToTop;
