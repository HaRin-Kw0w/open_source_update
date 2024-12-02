import { useEffect } from 'react';

function Header(props) {

	let data = props.propsValue;
	let deviceData = data.device;
	let navData = data.depth1;

	useEffect(() => {
		let body=document.body;
		let header=document.getElementById("header");
		let mobile=document.getElementById("mobile");
		let tab=header.querySelector(".tab");
		let dim=document.querySelector(".dim");

		let w;

		tab.addEventListener("click", function(e){
			e.preventDefault();

			body.classList.add("fixed");
			mobile.classList.add("active");
			dim.classList.add("active");
		});

		dim.addEventListener("click", function(){
			body.classList.remove("fixed");
			mobile.classList.remove("active");
			dim.classList.remove("active");
		});

		window.addEventListener("resize", function(){
			w=window.innerWidth;

			if(w > 600){
				if(mobile.classList.contains("active")){
					body.classList.remove("fixed");
					mobile.classList.remove("active");
					dim.classList.remove("active");
				}
			}
		});
	});

	return (
		<>
			<header id="header">
				{
					deviceData.map((nav, i) => 
					<nav key={i} id={nav}>
						<ul>
							{
								navData.map((d, j) => 
									<li key={j}><a href="">{d}</a></li>
								)
							}
						</ul>
					</nav>
					)
				}
				<a href="" className="tab">tab</a>
			</header>
			<div className="dim"></div>
		</>
	);
}

export default Header;