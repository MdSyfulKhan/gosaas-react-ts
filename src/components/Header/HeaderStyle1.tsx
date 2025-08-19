import { useState } from "react";
import { Link } from "react-router-dom";
import { useStickyHeader } from "../../utils/hooks/useStickyHeader";
import NavList from "./NavList";

interface HeaderStyle1Props {
	logo: string;
	logoUrl: string;
}

const HeaderStyle1: React.FC<HeaderStyle1Props> = ({ logo, logoUrl }) => {
	const [mobileToggle, setMobileToggle] = useState(false);
	const isSticky = useStickyHeader();

	return (
		<header
			className={`cs_site_header cs_style_1 cs_sticky_header ${isSticky}`}
		>
			<div className="cs_main_header cs_fs_18 cs_heading_color">
				<div className="container">
					<div className="cs_main_header_in">
						<div className="cs_main_header_left">
							<Link
								className="cs_site_branding"
								to={logoUrl}
								aria-label="Home page link"
							>
								<img src={logo} alt="Logo" />
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
		</header>
	);
};

export default HeaderStyle1;
