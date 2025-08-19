import { useState } from "react";
import { Link } from "react-router-dom";
import { useStickyHeader } from "../../utils/hooks/useStickyHeader";
import NavList from "./NavList";

interface HeaderStyle4Props {
	logo: string;
	logoUrl: string;
}

const HeaderStyle4: React.FC<HeaderStyle4Props> = ({ logo, logoUrl }) => {
	const [mobileToggle, setMobileToggle] = useState<boolean>(false);
	const isSticky = useStickyHeader();

	return (
		<header
			className={`cs_site_header cs_style_1 cs_type_2 cs_sticky_header ${isSticky}`}
			role="banner"
		>
			<div className="cs_main_header cs_fs_18 cs_white_color">
				<div className="container">
					<div className="cs_main_header_in">
						<div className="cs_main_header_left">
							<Link
								className="cs_site_branding"
								to={logoUrl}
								aria-label="Go to homepage"
							>
								<img
									src={logo}
									alt="Company logo"
									width={160}
									height={40}
									loading="lazy"
								/>
							</Link>
						</div>
						<div className="cs_main_header_center">
							<div className="cs_nav">
								<NavList
									setMobileToggle={setMobileToggle}
									mobileToggle={mobileToggle}
								/>
							</div>
							<div className="cs_main_header_right cs_hide_before_after">
								<Link
									to="/register"
									className="cs_btn cs_style_1 cs_white_bg cs_purple_color"
									aria-label="Get started"
								>
									<span>Get Started Today</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<hr className="cs_header_divider" />
			</div>
		</header>
	);
};

export default HeaderStyle4;
