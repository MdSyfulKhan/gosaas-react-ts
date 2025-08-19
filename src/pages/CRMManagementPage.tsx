import React from "react";
import BrandStyle1 from "../components/Brand/BrandStyle1";
import CtaStyle1 from "../components/Cta/CtaStyle1";
import CtaStyle2 from "../components/Cta/CtaStyle2";
import FaqStyle1 from "../components/Faq/FaqStyle1";
import FeaturesStyle1 from "../components/Features/FeaturesStyle1";
import FeaturesStyle2 from "../components/Features/FeaturesStyle2";
import FeaturesStyle3 from "../components/Features/FeaturesStyle3";
import HeroStyle1 from "../components/Hero/HeroStyle1";
import PricingStyle1 from "../components/Pricing/PricingStyle1";
import TestimonialStyle1 from "../components/Testimonial/TestimonialStyle1";

/* =========================
   Interfaces (ids added)
========================= */

interface HeroData {
	title: string;
	subTitle: string;
	imgUrl: string;
	btnText1: string;
	btnUrl1: string;
	videoBtnText: string;
	videoSrc: string;
}

interface FeatureItem {
	id: number;
	title: string;
	description: string;
	icon: string;
	icon_bg: string;
}

interface FeatureOneData {
	title: string;
	subTitle: string;
	features: FeatureItem[];
}

interface BrandItem {
	id: number;
	imgUrl: string;
}

interface BrandData {
	title: string;
	brands: BrandItem[];
}

interface FeatureTwoItem {
	id: number;
	icon: string;
	title: string;
	desc: string;
}

interface FeatureTwoData {
	title: string;
	imgUrl: string;
	features: FeatureTwoItem[];
}

interface CtaOneData {
	title: string;
	btnText: string;
}

interface FeatureThreeItem {
	id: number;
	title: string;
}

interface FeatureThreeData {
	title: string;
	subTitle: string;
	imgUrl: string;
	imgUrl2: string;
	features: FeatureThreeItem[];
}

/** CLEAN testimonial shape expected by your fixed TestimonialStyle1 */
interface TestimonialItem {
	id: number;
	avatar?: string;
	name: string;
	designation?: string;
	message: string;
	rating?: number;
}

interface TestimonialData {
	title: string;
	subTitle: string;
	testimonial: TestimonialItem[];
}

interface PricingPlan {
	id: number;
	title: string;
	subtitle: string;
	monthly: number;
	features: boolean[];
	badge?: string;
}

interface PricingData {
	title: string;
	subTitle: string;
	icon: string;
	plan: PricingPlan[];
}

interface FaqItem {
	id: number;
	question: string;
	answer: string;
}

interface FaqData {
	title: string;
	subTitle: string;
	faqs: FaqItem[];
}

interface CtaTwoItem {
	id: number;
	title: string;
}

interface CtaTwoData {
	title: string;
	btnText: string;
	bgImg: string;
	items: CtaTwoItem[];
}

const heroData: HeroData = {
	title: "Elevate Ur Customer Relationships with Our ",
	subTitle:
		"Enhance your customer interactions and streamline your sales processes with our powerful and intuitive CRM solution.",
	imgUrl: "/img/hero_img_4.jpg",
	btnText1: "Get Started Free",
	btnUrl1: "/register",
	videoBtnText: "Get a Demo",
	videoSrc: "https://www.youtube.com/embed/U3IfeAqciL0",
};

const featureOneData: FeatureOneData = {
	title: " Core Features of Our <br /> CRM Application",
	subTitle:
		"Discover the essential tools and functionalities designed to optimize your customer management, improve sales efficiency, and enhance overall business performance.",
	features: [
		{
			id: 1,
			title: "Contact Management",
			description:
				"Store and organize customer <br /> information in a centralized, easily <br /> accessible database.",
			icon: "/img/icons/browser.svg",
			icon_bg: "cs_accent_bg",
		},
		{
			id: 2,
			title: "Sales Track Management",
			description:
				"Track and manage sales leads <br /> from initial contact to deal <br /> closure.",
			icon: "/img/icons/stats.svg",
			icon_bg: "cs_bg_1",
		},
		{
			id: 3,
			title: "Reporting and Analytics",
			description:
				"Generate detailed reports and <br /> insights into sales, customer <br /> behavior, and business health.",
			icon: "/img/icons/point-of-sale-bill.svg",
			icon_bg: "cs_bg_2",
		},
		{
			id: 4,
			title: "Contact Management",
			description:
				"Store and organize customer <br /> information in a centralized, easily <br /> accessible database.",
			icon: "/img/icons/browser.svg",
			icon_bg: "cs_accent_bg",
		},
	],
};

const brandData: BrandData = {
	title: "Already Join 15K + Business Using GoSass",
	brands: [
		{ id: 1, imgUrl: "/img/brand-1.svg" },
		{ id: 2, imgUrl: "/img/brand-2.svg" },
		{ id: 3, imgUrl: "/img/brand-3.svg" },
		{ id: 4, imgUrl: "/img/brand-4.svg" },
		{ id: 5, imgUrl: "/img/brand-5.svg" },
		{ id: 6, imgUrl: "/img/brand-6.svg" },
	],
};

const featureTwoData: FeatureTwoData = {
	title: "Upgrade Your Business with Our CRM Solution",
	imgUrl: "/img/feature_9.png",
	features: [
		{
			id: 1,
			icon: "/img/icons/magnet-user.svg",
			title: "High-Quality Leads",
			desc: "Discover how to use AI-powered marketing tools to attract and convert more leads without multiplying your marketing spend.",
		},
		{
			id: 2,
			icon: "/img/icons/rocket-lunch.svg",
			title: "Accelerate Sales",
			desc: "Start closing more deals faster and streamlining your sales process with HubSpot's AI-powered deal management tools.",
		},
		{
			id: 3,
			icon: "/img/icons/journey.svg",
			title: "Create Customer Journey",
			desc: "Fuel the entire customer journey with content across formats and channels with all-in-one, AI-powered content marketing software.",
		},
	],
};

const ctaOneData: CtaOneData = {
	title:
		"Boost Sales. Build Lasting Relationships.<br/>Achieve Faster Growth Today!",
	btnText: "Get Started Now!",
};

const featureThreeData: FeatureThreeData = {
	title: "Automate tasks to increase efficiency and reduce manual effort",
	subTitle:
		"Gain precise insights for your business with our advanced analytics tools. Make informed decisions based on accurate, real-time data",
	imgUrl: "/img/feature_8.jpg",
	imgUrl2: "/img/Illustration.png",
	features: [
		{ id: 1, title: "Actionable Insights" },
		{ id: 2, title: "Enhanced Decision-Making" },
		{ id: 3, title: "Improved Efficiency" },
	],
};

const testimonialData: TestimonialData = {
	title: "Customer Reviews and <br/> Success Stories",
	subTitle: "",
	testimonial: [
		{
			id: 1,
			avatar: "/img/avatar-1.jpg",
			name: "Sara Thomas",
			designation: "Project Manager",
			message:
				"Gosaas has completely transformed how we manage projects at our company. The intuitive interface makes it easy for everyone to get on board, and the powerful features like subtasks and dependencies.",
			rating: 3.5,
		},
		{
			id: 2,
			avatar: "/img/avatar-2.jpg",
			name: "Wizard Bona",
			designation: "Creative Director",
			message:
				"Managing a creative team comes with its own set of challenges,  but Gosaas has made it so much easier. The customizable views allow us to organize tasks in a way that makes sense for our projects",
			rating: 5,
		},
		{
			id: 3,
			avatar: "/img/avatar-3.jpg",
			name: "Jhon Kubera",
			designation: "Marketing Specialist",
			message:
				"As a marketing specialist, staying organized and on top of deadlines is crucial. Gosaas has been a lifesaver. The platform is incredibly user-friendly, and I love how I can customize task lists to fit my workflow.",
			rating: 5,
		},
		{
			id: 4,
			avatar: "/img/avatar-1.jpg",
			name: "Sara Thomas",
			designation: "Project Manager",
			message:
				"Gosaas has completely transformed how we manage projects at our company. The intuitive interface makes it easy for everyone to get on board, and the powerful features like subtasks and dependencies.",
			rating: 4.5,
		},
		{
			id: 5,
			avatar: "/img/avatar-2.jpg",
			name: "Wizard Bona",
			designation: "Creative Director",
			message:
				"Managing a creative team comes with its own set of challenges,  but Gosaas has made it so much easier. The customizable views allow us to organize tasks in a way that makes sense for our projects",
			rating: 4.5,
		},
		{
			id: 6,
			avatar: "/img/avatar-3.jpg",
			name: "Jhon Kubera",
			designation: "Marketing Specialist",
			message:
				"As a marketing specialist, staying organized and on top of deadlines is crucial. Gosaas has been a lifesaver. The platform is incredibly user-friendly, and I love how I can customize task lists to fit my workflow.",
			rating: 4,
		},
	],
};

const pricingData: PricingData = {
	title: "Transparent pricing plans, find the <br/> perfect fit for your needs",
	subTitle: "",
	icon: "",
	plan: [
		{
			id: 1,
			title: "Free",
			subtitle: "Free for small team",
			monthly: 0,
			features: [true, true, true, false, false, false, false],
		},
		{
			id: 2,
			title: "Standard",
			subtitle: "Most popular deal",
			monthly: 10,
			features: [true, true, true, true, true, false, false],
			badge: "Most Popular",
		},
		{
			id: 3,
			title: "Premium",
			subtitle: "For your large team",
			monthly: 20,
			features: [true, true, true, true, true, true, true],
		},
	],
};

const faqData: FaqData = {
	title: "Answers to Your Frequently <br /> Asked Questions",
	subTitle: "",
	faqs: [
		{
			id: 1,
			question: "What data types does your analytics application support?",
			answer:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos vitae, consectetur eos, aut porro repellat quas eum reprehenderit magnam natus, voluptatem tempore numquam. Similique, dicta porro.",
		},
		{
			id: 2,
			question: "Do you offer a free trial of your analytics application?",
			answer:
				"Yes, we offer a 14-day free trial so you can explore all features before purchasing.",
		},
		{
			id: 3,
			question: "Can I upgrade or downgrade my plan at any time?",
			answer:
				"Absolutely! You can change your plan at any time directly from your dashboard.",
		},
		{
			id: 4,
			question: "Do you offer discounts for annual subscriptions?",
			answer:
				"Yes! We offer up to 20% discounts on yearly plans compared to monthly subscriptions.",
		},
		{
			id: 5,
			question: "What support options are available if I need help?",
			answer:
				"We provide 24/7 chat support, a help center, and personal onboarding for enterprise plans.",
		},
		{
			id: 6,
			question: "Is there a mobile app available?",
			answer:
				"Yes, we have both iOS and Android apps available for download on their respective stores.",
		},
		{
			id: 7,
			question: "What are benefits of using your analytics application?",
			answer:
				"Real-time data tracking, AI-driven insights, custom reports, and integration with over 100 tools.",
		},
		{
			id: 8,
			question: "Is there any future prediction for business?",
			answer:
				"Yes, our platform uses machine learning to offer predictive analytics tailored to your data.",
		},
	],
};

const ctaTwoData: CtaTwoData = {
	title: "Ready to enhance your sales & <br/> customer satisfaction?",
	btnText: "Sign Up Free",
	bgImg: "/img/counter_bg.svg",
	items: [
		{ id: 1, title: "No credit card needed" },
		{ id: 2, title: "Free 14-day trial" },
	],
};

/* =========================
   Page
========================= */

const CRMManagementPage: React.FC = () => {
	return (
		<>
			<HeroStyle1 data={heroData} />
			<FeaturesStyle1 data={featureOneData} />
			<div className="cs_height_132 cs_height_lg_72" />
			<BrandStyle1 data={brandData} />
			<FeaturesStyle2 data={featureTwoData} />
			<CtaStyle1 data={ctaOneData} />
			<FeaturesStyle3
				data={featureThreeData}
				btnText="Learn More"
				btnUrl="/contact"
			/>
			<TestimonialStyle1 data={testimonialData} />
			<PricingStyle1 data={pricingData} />
			<FaqStyle1 data={faqData} />
			<CtaStyle2 data={ctaTwoData} />
		</>
	);
};

export default CRMManagementPage;
