import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./Btemplate10.module.scss";
import gallery1 from "./assets/gallery1.png";
import GalleryCard from "./components/GalleryCard";
import "./Btemplate10.scss";

const galleryItems = [
	{
		id: 0,
		name: "MYMUS_OFF",
		userName: "Mymus_off",
		mediaUrl: gallery1,
	},
	{
		id: 1,
		name: "MYMUS_OFF",
		userName: "Mymus_off",
		mediaUrl: gallery1,
	},
	{
		id: 2,
		name: "MYMUS_OFF",
		userName: "Mymus_off",
		mediaUrl: gallery1,
	},
	{
		id: 3,
		name: "MYMUS_OFF",
		userName: "Mymus_off",
		mediaUrl: gallery1,
	},
	{
		id: 4,
		name: "MYMUS_OFF",
		userName: "Mymus_off",
		mediaUrl: gallery1,
	},
];

const items = galleryItems?.map((post) => <GalleryCard key={post.id} item={post} />);

const responsive = {
	0: { items: 1 },
};

function Container5() {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	useEffect(() => {
		function handelResize() {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}
		window.addEventListener("resize", handelResize);
		return () => window.removeEventListener("resize", handelResize);
	}, [width, height]);
	return (
		<div className={styles.Container5}>
			<div className={styles.topSection}>
				<h3>Our Gallery</h3>
				<h4>View all</h4>
			</div>
			<div className={styles.carousel} id="CarouselB10">
				{/* {galleryItems && width < height ? (
					"	<MobileGallery posts={posts} />"
				) : ( */}
				<AliceCarousel items={items} responsive={responsive} autoPlay autoPlayInterval={1000} animationDuration={1000} infinite />
				{/* )} */}
			</div>

			<div className={styles.thankYou}>Thank you ! Visit Again</div>
		</div>
	);
}

export default Container5;
