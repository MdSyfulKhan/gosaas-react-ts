import { useState } from "react";
import { Link } from "react-router-dom";
import { useStickyHeader } from "../../utils/hooks/useStickyHeader";
import NavList from "./NavList";

interface HeaderStyle6Props {
	logo: string;
	logoUrl: string;
}

const HeaderStyle6: React.FC<HeaderStyle6Props> = ({ logo, logoUrl }) => {
	const [mobileToggle, setMobileToggle] = useState<boolean>(false);
	const isSticky = useStickyHeader();

	return (
		<header
			className={`cs_site_header cs_style_1 cs_sticky_header ${isSticky}`}
			role="banner"
		>
			<div className="cs_main_header cs_fs_18 cs_heading_color">
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
						</div>
					</div>
				</div>
			</div>
			<hr className="cs_header_divider" />
		</header>
	);
};

export default HeaderStyle6;
