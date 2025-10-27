import React, { useEffect, useState } from "react";
import comment from "../assets/business/image/comment.svg";
import heart from "../assets/business/image/heartLike.svg";
import share from "../assets/business/image/share.svg";
import styles from "./Btemplate10.module.scss";
import product1 from "./assets/product1.png";
import product2 from "./assets/product2.png";
import product3 from "./assets/product3.png";
import product4 from "./assets/product4.png";
import product5 from "./assets/product5.png";
import product6 from "./assets/product6.png";

const products = [
	{
		id: 0,
		mediaUrl: product1,
		productName: "productName",
	},
	{
		id: 1,
		mediaUrl: product2,
		productName: "productName",
	},
	{
		id: 2,
		mediaUrl: product3,
		productName: "productName",
	},
	{
		id: 3,
		mediaUrl: product4,
		productName: "productName",
	},
	{
		id: 4,
		mediaUrl: product5,
		productName: "productName",
	},
	{
		id: 5,
		mediaUrl: product6,
		productName: "productName",
	},
];
function Container4() {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const [hoveredProductId, setHoveredProductId] = useState(null);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [width, height]);

	const handleMouseEnter = (productId) => {
		setHoveredProductId(productId);
	};

	const handleMouseLeave = () => {
		setHoveredProductId(null);
	};

	return (
		<div className={styles.Container4}>
			<div className={styles.topSection}>
				<h3>Our Product</h3>
				<h4>View all</h4>
			</div>
			<div className={styles.productContainer}>
				{products.slice(0, width < height ? 4 : 6).map((item) => (
					<div
						key={item.id}
						className={styles.product}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={handleMouseLeave}>
						<div className={styles.imageUrl}>
							<img src={item.mediaUrl} alt="" />
						</div>
						<div className={styles.nameActions}>
							<div className={styles.name}>{item.productName}</div>
							{hoveredProductId === item.id && (
								<div className={styles.actions}>
									<div className={styles.like}>
										<img src={heart} alt="" />
									</div>
									<div className={styles.comment}>
										<img src={comment} alt="" />
									</div>
									<div className={styles.share}>
										<img src={share} alt="" />
									</div>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Container4;
