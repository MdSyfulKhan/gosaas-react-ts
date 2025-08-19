import Aos from "aos";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LayoutStyle1 from "./components/Layout/LayoutStyle1";
import LayoutStyle2 from "./components/Layout/LayoutStyle2";
import LayoutStyle3 from "./components/Layout/LayoutStyle3";
import LayoutStyle4 from "./components/Layout/LayoutStyle4";
import LayoutStyle5 from "./components/Layout/LayoutStyle5";
import LayoutStyle6 from "./components/Layout/LayoutStyle6";
import LayoutStyle7 from "./components/Layout/LayoutStyle7";
import AboutUsPage from "./pages/AboutUsPage";
import AIWritingAssistantPage from "./pages/AIWritingAssistantPage";
import AppLandingPage from "./pages/AppLandingPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CRMManagementPage from "./pages/CRMManagementPage";
import DataAnalyticsPage from "./pages/DataAnalyticsPage";
import FaqsPage from "./pages/FaqsPage";
import FeaturesPage from "./pages/FeaturesPage";
import IntegrationPage from "./pages/IntegrationPage";
import LiveChatPage from "./pages/LiveChatPage";
import Page404 from "./pages/Page404";
import POSLandingPage from "./pages/POSLandingPage";
import PricingPage from "./pages/PricingPage";
import ServicePage from "./pages/ServicePage";
import TaskManagementPage from "./pages/TaskManagementPage";
import BackToTop from "./utils/BackToTop";
import Preloader from "./utils/Preloader";
import ScrollToTopOnLoad from "./utils/ScrollToTopOnLoad";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const App: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		Aos.init({ once: false });

		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{isLoading && <Preloader />}
			<Routes>
				<Route path="/" element={<LayoutStyle1 />}>
					<Route index element={<CRMManagementPage />} />
				</Route>
				<Route path="/ai-writing" element={<LayoutStyle2 />}>
					<Route index element={<AIWritingAssistantPage />} />
				</Route>
				<Route path="/task-management" element={<LayoutStyle3 />}>
					<Route index element={<TaskManagementPage />} />
				</Route>
				<Route path="/data-analytics" element={<LayoutStyle4 />}>
					<Route index element={<DataAnalyticsPage />} />
				</Route>
				<Route path="/app-landing" element={<LayoutStyle5 />}>
					<Route index element={<AppLandingPage />} />
				</Route>
				<Route element={<LayoutStyle6 />}>
					<Route path="/pos" element={<POSLandingPage />} />
					<Route path="/live-chat" element={<LiveChatPage />} />
				</Route>
				<Route element={<LayoutStyle7 />}>
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/reset-password" element={<ResetPasswordPage />} />
					<Route path="/faqs" element={<FaqsPage />} />
					<Route path="/integration" element={<IntegrationPage />} />
					<Route path="/services" element={<ServicePage />} />
					<Route path="/blogs" element={<BlogPage />} />
					<Route path="/blog/:blogSlug" element={<BlogDetailsPage />} />
					<Route path="/features" element={<FeaturesPage />} />
					<Route path="/pricing" element={<PricingPage />} />
					<Route path="/about-us" element={<AboutUsPage />} />
					<Route path="*" element={<Page404 />} />
				</Route>
			</Routes>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
			<BackToTop />
			<ScrollToTopOnLoad />
		</>
	);
};

export default App;
