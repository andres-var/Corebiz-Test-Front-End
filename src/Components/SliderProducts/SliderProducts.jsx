import React                      from "react";
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import ReactStars              from "react-rating-stars-component";


import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";


// Import our styles
import "./SliderProducts.scss";
import { isValidArray } from "Helpers";

const SliderProducts = ({
	addItem,
	products,
}) => {

	return (
		<div id="SliderProducts">
			<div className="name-section">
				<h3>Más vendidos</h3>
			</div>
			 <Swiper
				slidesPerView={2}
				spaceBetween={20}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				navigation={{
					clickable : true,
				}}
				pagination={{
					clickable : true,
				}}
				breakpoints={{
					768 : {
					  slidesPerView  : 3,
					  spaceBetween   : 30,
					  slidesPerGroup : 1,
					},
					1024 : {
					  slidesPerView  : 4,
					  spaceBetween   : 40,
					  slidesPerGroup : 1,
					},
				  }}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				{
					isValidArray(products) && products.map(({
						price,
						stars,
						imageUrl,
						listPrice,
						productName,
						installments,
					}, index) => (
						<SwiperSlide key={index}>
							<div className="card">
								{ !listPrice && (
									<div className="off">
										<span>OFF</span>
									</div>
								)}
								<div className="card-image">
									<img src={ imageUrl ?? `https://picsum.photos/id/${index}/400/400`} alt="img" />
								</div>
								<div className="card-body">
									<h5 className="card-title">{ productName ?? "NA" }</h5>

									<div className="stars">
										<ReactStars
											activeColor="#F8475F"
											size={12}
											value={stars ?? 0}
											edit={false}
										/>,
									</div>

									<div className="prices">
										<p className="prices-previous">de { currencyFormat(listPrice ?? price ) } </p>
										<p className="prices-current">por { currencyFormat(price ?? 0 ) }</p>
										{
											isValidArray(installments) && installments.map(({
												value,
												quantity,
											}, index) => (
												<p key={index}>
													<span>o en {quantity ?? 0}x de R {currencyFormat(value ?? 0 )}</span>
												</p>
											))

										}
									</div>

									<div>
										<button onClick={addItem}>COMPRAR</button>
									</div>
								</div>
							</div>
						</SwiperSlide>
					) )
				}
			</Swiper>
		</div>
	);
};

const currencyFormat = (number) => {
	const formatter = new Intl.NumberFormat("en-US", {
		style    : "currency",
		currency : "USD",
	});
	return formatter.format(number);
};

export default SliderProducts;

