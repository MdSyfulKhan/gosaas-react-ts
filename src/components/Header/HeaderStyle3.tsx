import { useState } from "react";
import { Link } from "react-router-dom";
import { useStickyHeader } from "../../utils/hooks/useStickyHeader";
import NavList from "./NavList";

interface HeaderStyle3Props {
	logo: string;
	logoUrl: string;
}

const HeaderStyle3: React.FC<HeaderStyle3Props> = ({ logo, logoUrl }) => {
	const [mobileToggle, setMobileToggle] = useState<boolean>(false);
	const isSticky = useStickyHeader();

	return (
		<header
			className={`cs_site_header cs_style_1 cs_type_1 cs_sticky_header ${isSticky}`}
		>
			<div className="cs_main_header cs_white_color cs_semibold">
				<div className="container">
					<div className="cs_main_header_in">
						<div className="cs_main_header_left">
							<Link
								className="cs_site_branding"
								to={logoUrl}
								aria-label="Home page link"
							>
								<img
									src={logo}
									alt="Company logo"
									loading="lazy"
									width={120}
									height={40}
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
							<div className="cs_main_header_right">
								<Link
									to="/login"
									aria-label="Login page link"
									className="cs_login_link"
								>
									<span>Login</span>
								</Link>
								<Link
									to="/register"
									aria-label="Register page link"
									className="cs_btn cs_style_1 cs_fs_16 cs_semibold cs_purple_bg cs_white_color cs_accent_hover"
								>
									<span>Sign Up</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderStyle3;
