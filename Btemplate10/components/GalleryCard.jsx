import React from "react";
import styles from "../Btemplate10.module.scss";
import comment from "../../assets/business/image/comment.svg";
import heart from "../../assets/business/image/heartLike.svg";
import share from "../../assets/business/image/share.svg";

function GalleryCard({ item }) {
	return (
		<div className={styles.GalleryCard}>
			<div className={styles.backImage}>
				<img src={item.mediaUrl} alt="" />
			</div>
			<div className={styles.upperSection}>
				<h3>{item.name}</h3>
				<h4>{item.userName}</h4>
			</div>
			<div className={styles.bottomSection}>
				<div className={styles.desc}>{item.desc}</div>
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
			</div>
		</div>
	);
}

export default GalleryCard;
