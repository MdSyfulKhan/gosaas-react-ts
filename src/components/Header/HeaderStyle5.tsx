import { useState } from "react";
import { Link } from "react-router-dom";
import { useStickyHeader } from "../../utils/hooks/useStickyHeader";
import NavList from "./NavList";

interface HeaderStyle5Props {
	logo: string;
	logoUrl: string;
}

const HeaderStyle5: React.FC<HeaderStyle5Props> = ({ logo, logoUrl }) => {
	const [mobileToggle, setMobileToggle] = useState<boolean>(false);
	const isSticky = useStickyHeader();

	return (
		<header
			className={`cs_site_header cs_style_1 cs_sticky_header ${isSticky}`}
			role="banner"
		>
			<div className="cs_main_header cs_fs_18 cs_heading_color cs_medium">
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
							<div className="cs_main_header_center">
								<div className="cs_nav">
									<NavList
										setMobileToggle={setMobileToggle}
										mobileToggle={mobileToggle}
									/>
								</div>
							</div>
						</div>
						<div className="cs_main_header_right">
							<Link
								to="/login"
								aria-label="Login to your account"
								className="cs_login_link"
							>
								<span>Login</span>
							</Link>
							<Link
								to="/register"
								aria-label="Create a new account"
								className="cs_btn cs_style_1 cs_fs_16 cs_semibold cs_purple_bg cs_white_color"
							>
								<span>Sign Up Free</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderStyle5;
