import { useEffect } from "react"
import data from './data';
import gsap from "gsap";

function Container(){
	useEffect(()=>{
		let n=0;
		let pos;

		let container=document.querySelector(".container");
		let [gallerImage, galleryControl]=container.children;
		let galleryList=galleryControl.children;

		galleryList[n].classList.add("active");

		for(let i=0; i<galleryList.length; i++){
			galleryList[i].addEventListener("click", function(e){
				e.preventDefault();

				n=i;
				pos=n*(-600);

				for(let j=0; j<galleryList.length; j++){
					if(j === n){
						galleryList[j].classList.add("active");
					}
					else{
						galleryList[j].classList.remove("active");
					}
				}

				gsap.to(".viewer", {left: pos, duration: 0.5});
			});
		}
	})
	return(
		<>
			<div class="viewer">
				{/* <img src="/images/slide1.jpg" alt="slide1"/>
				<img src="/images/slide2.jpg" alt="slide2"/>
				<img src="/images/slide3.jpg" alt="slide3"/>
				<img src="/images/slide4.jpg" alt="slide4"/> */}
				{
					data.map((d, i)=>
					<img key={i} src={"/images/"+d.image} alt={"slide"+(i+1)}/> )
				}
			</div>
			<ul class="btn_group">
				{/* <li><a href="">1</a></li>
				<li><a href="">2</a></li>
				<li><a href="">3</a></li>
				<li><a href="">4</a></li> */}
				{
					data.map((d, i)=>
						<li key={i}><a href="">{i+1}</a></li>
					)
				}
			</ul>
		</>
	);
}

export default Container;