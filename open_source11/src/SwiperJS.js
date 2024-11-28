import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import data from './data';
import 'swiper/css';

import 'swiper/css/effect-fade';

function SwiperJS(){
	let [mainSwiper, setState]=useState(null);
	let {slide}=data;

	useEffect(()=>{
		if(mainSwiper === null) return;
	});
	

	let slideChange=swiper => {    
		let account=document.querySelector(".account");
		let current=account.firstElementChild;
		let total=account.lastElementChild;
		
		current.innerText=swiper.realIndex+1; 
		total.innerText=swiper.slides.length;  
	};
	return(
		<header id="header">
			<div class="main_slider">
			<Swiper
				speed={1200}
				loop={true}
				autoplay= {{delay: 5000}}
				modules={[Autoplay, EffectFade]}
				onSwiper={swiper => {
					slideChange(swiper);
					setState(swiper); 
				}}
				onSlideChange={swiper => {
					slideChange(swiper);
				}}
					className="swiper-container mainSwiper"
				>
					{
						slide.map((d, i) =>
							<SwiperSlide>
								<div className="text_box">
									<span>{d.title}</span>
									<p dangerouslySetInnerHTML={{__html: d.sub}}/>
									<a href="">View More +</a>
								</div>
								<img src={`/images/${d.image}`} alt={d.alt}/> 
							</SwiperSlide>
						)
					}
				</Swiper>
				<div className="account">
					<span className="current"></span> / <span className="total"></span>
				</div>
				<div className="icon_scroll">
					<div className="icon_box">
						<img src="/images/icon_scroll.png" alt="icon scroll"/>
					</div>
				</div>
			</div>

		</header>
	)
}

export default SwiperJS;