import CtaStyle3 from "../Cta/CtaStyle3";

interface HeroStyle7Props {
	data: {
		title: string;
		subTitle: string;
		features: { title: string }[];
		btnText: string;
		iconUrl: string;
		imgUrl: string;
		animText1: string;
		animText2: string;
	};
}

const HeroStyle7: React.FC<HeroStyle7Props> = ({ data }) => {
	const {
		title,
		subTitle,
		features,
		btnText,
		iconUrl,
		imgUrl,
		animText1,
		animText2,
	} = data;

	return (
		<section className="cs_hero cs_style_1 cs_type_1" id="home">
			<div className="container">
				<div className="cs_hero_content cs_center_column text-center">
					<CtaStyle3 data={{ title, subTitle, features, btnText, iconUrl }} />
					<div className="cs_height_63 cs_height_lg_60"></div>
					<div
						className="cs_hero_thumbnail cs_radius_20 position-relative aos fadeInDown"
						data-aos="fade-down"
						data-aos-duration="800"
					>
						<img src={imgUrl} alt="Hero image" />

						{/* Animated Text 1 */}
						<div className="cs_text_check_wrap position-absolute">
							<div className="cs_iconbox cs_style_3 cs_heading_bg cs_radius_15">
								<span className="cs_iconbox_icon cs_center cs_accent_color">
									{/* SVG Icon */}
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0)">
											<path d="..." fill="currentColor"></path>
										</g>
										<defs>
											<clipPath id="clip0">
												<rect width="24" height="24" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</span>
								<h3 className="cs_fs_18 cs_white_color mb-0">{animText1}</h3>
							</div>
							<span className="cs_arrow">
								<img src="/img/icons/arrow-right.svg" alt="Arrow" />
							</span>
						</div>

						{/* Animated Text 2 */}
						<div className="cs_aiassistant_wrap position-absolute">
							<div className="cs_iconbox cs_style_3 cs_heading_bg cs_radius_15">
								<span className="cs_iconbox_icon cs_center cs_accent_color">
									{/* SVG Icon */}
									<svg
										width="35"
										height="35"
										viewBox="0 0 35 35"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0)">
											<path d="..." fill="currentColor"></path>
											<path d="..." fill="currentColor"></path>
										</g>
										<defs>
											<clipPath id="clip0">
												<rect width="35" height="35" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</span>
								<h3 className="cs_fs_18 cs_white_color mb-0">{animText2}</h3>
							</div>
							<span className="cs_arrow cs_rotate_180">
								<img src="/img/icons/arrow-right.svg" alt="Arrow" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroStyle7;
