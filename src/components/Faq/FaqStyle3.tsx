import parser from "html-react-parser";
import { useState } from "react";

interface AccordionItemProps {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
}

interface FaqItem {
	question: string;
	answer: string;
}

interface FaqStyle3Props {
	data: {
		title: string;
		subtitle?: string;
		faqs?: FaqItem[];
	};
}

const AccordionItem = ({
	question,
	answer,
	isOpen,
	onClick,
}: AccordionItemProps) => (
	<div className="cs_accordian cs_type_1 cs_radius_20 position-relative">
		<div
			className={`cs_accordian_head cs_fs_18 cs_border_color cs_medium ${
				isOpen ? "active" : ""
			}`}
			onClick={onClick}
			style={{ cursor: "pointer" }}
			aria-expanded={isOpen}
		>
			{question}
			<span
				className="cs_accordian_toggle position-absolute"
				aria-hidden="true"
			></span>
		</div>
		{isOpen && (
			<div className="cs_accordian_body cs_body_color" role="region">
				{answer}
			</div>
		)}
	</div>
);

const FaqStyle3 = ({ data }: FaqStyle3Props) => {
	const { title, subtitle, faqs } = data;
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section>
			<div className="cs_height_140 cs_height_lg_80"></div>
			<div className="container">
				<div className="cs_section_heading cs_style_1 cs_mb_60 text-center">
					{subtitle && (
						<p
							className="cs_section_subtitle cs_accent_color cs_border cs_radius_15 cs_semibold aos fadeInDown"
							data-aos="fade-down"
							data-aos-duration="800"
						>
							{subtitle}
						</p>
					)}
					<h2
						className="cs_section_title cs_fs_50 cs_white_color mb-0 aos fadeInUp"
						data-aos="fade-up"
						data-aos-duration="800"
					>
						{parser(title)}
					</h2>
				</div>
				<div className="row cs_gap_y_24">
					<div
						className="col-xl-6 aos fadeInLeft"
						data-aos="fade-up"
						data-aos-duration="800"
					>
						{faqs?.slice(0, 4).map((faq, index) => (
							<AccordionItem
								key={index}
								question={faq.question}
								answer={faq.answer}
								isOpen={openIndex === index}
								onClick={() => handleToggle(index)}
							/>
						))}
					</div>
					<div
						className="col-xl-6 fadeInRight"
						data-aos="fade-up"
						data-aos-duration="800"
					>
						{faqs?.slice(4).map((faq, index) => (
							<AccordionItem
								key={index + 4}
								question={faq.question}
								answer={faq.answer}
								isOpen={openIndex === index + 4}
								onClick={() => handleToggle(index + 4)}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="cs_height_134 cs_height_lg_80"></div>
		</section>
	);
};

export default FaqStyle3;
