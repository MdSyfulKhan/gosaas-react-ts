import { Link } from "react-router-dom";
import DropDown from "./DropDown";

interface MenuItem {
	title: string;
	linkUrl: string;
}

interface NavListProps {
	setMobileToggle: (value: boolean) => void;
	mobileToggle: boolean;
}

const homePageMenu: MenuItem[] = [
	{ title: "AI Writing Assistant", linkUrl: "/ai-writing" },
	{ title: "CRM Management", linkUrl: "/" },
	{ title: "Task Management", linkUrl: "/task-management" },
	{ title: "Data Analytics", linkUrl: "/data-analytics" },
	{ title: "App Landing", linkUrl: "/app-landing" },
	{ title: "POS Landing", linkUrl: "/pos" },
	{ title: "Live Chat", linkUrl: "/live-chat" },
];

const pagesMenu: MenuItem[] = [
	{ title: "About Us", linkUrl: "/about-us" },
	{ title: "Services", linkUrl: "/services" },
	{ title: "Integration", linkUrl: "/integration" },
	{ title: "Faq's & Answer", linkUrl: "/faqs" },
	{ title: "Blog Details", linkUrl: "/blog/blog-details" },
	{ title: "Login", linkUrl: "/login" },
	{ title: "Register", linkUrl: "/register" },
];

const NavList: React.FC<NavListProps> = ({ setMobileToggle, mobileToggle }) => {
	return (
		<>
			<ul className={`cs_nav_list ${mobileToggle ? "cs_active" : ""}`}>
				<li className="menu-item-has-children">
					<Link to="/" aria-label="Menu link">
						Home
					</Link>
					<DropDown items={homePageMenu} />
				</li>
				<li>
					<Link to="/features">Features</Link>
				</li>
				<li>
					<Link to="/pricing">Pricing</Link>
				</li>
				<li>
					<Link to="/blogs">Blog</Link>
				</li>
				<li className="menu-item-has-children">
					<Link to="#">Pages</Link>
					<DropDown items={pagesMenu} />
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>

			{/* Mobile menu toggle */}
			<span
				className={`cs_menu_toggle ${mobileToggle ? "cs_toggle_active" : ""}`}
				onClick={() => setMobileToggle(!mobileToggle)}
			>
				<span></span>
			</span>
		</>
	);
};

export default NavList;
