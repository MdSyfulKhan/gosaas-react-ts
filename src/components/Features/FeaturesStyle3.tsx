import { Icon } from "@iconify/react/dist/iconify.js";
import parser from "html-react-parser";
import { Link } from "react-router-dom";

interface FeatureItem {
	id: number;
	title: string;
}

interface FeaturesStyle3Props {
	data: {
		title: string;
		subTitle: string;
		imgUrl: string;
		imgUrl2: string;
		features?: FeatureItem[];
		badge1?: string;
	};
	btnText?: string;
	btnUrl: string;
}

const FeaturesStyle3 = ({ data, btnText, btnUrl }: FeaturesStyle3Props) => {
	const { title, subTitle, imgUrl, imgUrl2, features, badge1 } = data;

	return (
		<section>
			<div className="cs_height_140 cs_height_lg_80" />
			<div className="container">
				<div className="cs_card cs_style_1 cs_type_4">
					<div className="row cs_gap_y_40 align-items-center position-relative">
						<div className="col-xl-5 col-lg-5 offset-xl-1 order-lg-2">
							<div
								className="cs_card_thumbnail cs_radius_15 position-relative fadeInRight"
								data-aos="fade-right"
								data-aos-duration="800"
							>
								<img src={imgUrl} alt="Feature image" className="cs_img_fit" />
								<div className="cs_illustration cs_radius_10 position-absolute">
									<img
										src={imgUrl2}
										alt="Analytics chart image"
										className="cs_img_fit"
									/>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-7 order-lg-1">
							<div className="cs_card_content">
								<div className="cs_section_heading cs_style_1 cs_mb_30">
									<h2
										className="cs_section_title cs_fs_50 cs_mb_16 aos fadeInDown"
										data-aos="fade-down"
										data-aos-duration="800"
									>
										{title}
									</h2>
									<p className="cs_section_text cs_fs_21 mb-0">
										{parser(subTitle)}
									</p>
								</div>
								<ul
									className="cs_list cs_style_1 cs_mp_0 aos fadeInLeft"
									data-aos="fade-right"
									data-aos-duration="800"
								>
									{features?.map((item, index) => (
										<li key={`feature-${index}`}>
											<span className="cs_list_icon cs_accent_color">
												<svg
													width={30}
													height={30}
													viewBox="0 0 30 30"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
												>
													<g clipPath="url(#clip0_1573_697412)">
														<path
															d="M27.803 6.59L23.4093 2.19625C21.9918 0.78 20.108 0 18.1055 0H11.8918C9.8893 0 8.00555 0.78 6.58805 2.19625L2.1943 6.59C0.778047 8.0075 -0.00195312 9.89125 -0.00195312 11.8938V18.1075C-0.00195312 20.11 0.778047 21.9937 2.1943 23.4113L6.58805 27.805C8.00555 29.2212 9.8893 30.0012 11.8918 30.0012H18.1055C20.108 30.0012 21.9918 29.2212 23.4093 27.805L27.803 23.4113C29.2193 21.9937 29.9993 20.11 29.9993 18.1075V11.8938C29.9993 9.89125 29.2193 8.0075 27.803 6.59ZM22.9155 12.2913L16.3755 18.8312C15.6093 19.5975 14.5905 20.02 13.5068 20.02C12.423 20.02 11.4043 19.5975 10.638 18.8312L7.1543 15.3475C6.66555 14.8587 6.66555 14.0688 7.1543 13.58C7.64305 13.0913 8.43305 13.0913 8.9218 13.58L12.4055 17.0637C12.9943 17.6525 14.0205 17.6513 14.608 17.0637L21.148 10.5237C21.6368 10.035 22.4268 10.035 22.9155 10.5237C23.4043 11.0125 23.4043 11.8025 22.9155 12.2913Z"
															fill="currentColor"
														/>
													</g>
													<defs>
														<clipPath id="clip0_1573_697413">
															<rect width={30} height={30} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</span>
											<span className="cs_fs_21 cs_heading_color">
												{item.title}
											</span>
										</li>
									))}
								</ul>
								<Link
									to={btnUrl}
									aria-label={`${btnText} button`}
									className="cs_btn cs_style_1 cs_purple_bg cs_fs_16 cs_white_color cs_semibold cs_accent_hover aos fadeInUp"
									data-aos="fade-up"
									data-aos-duration="800"
								>
									<span>{btnText}</span>
									<span
										className="cs_btn_icon cs_center overflow-hidden"
										aria-hidden="true"
									>
										<Icon
											icon="fa6-solid:arrow-right"
											style={{
												filter: "drop-shadow(-20px -0px 0px rgb(255,255,255))",
												color: "#fff",
											}}
										/>
									</span>
								</Link>
							</div>
						</div>
						<div className="cs_vector_shape_3 position-absolute">
							{badge1 && <img src={badge1} alt="Decorative badge" />}
						</div>
						<div className="cs_vector_shape_4 position-absolute">
							{badge1 && <img src={badge1} alt="Decorative badge" />}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesStyle3;
