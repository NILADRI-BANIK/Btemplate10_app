import React, { useEffect, useState } from "react";
import dialer from "../assets/business/svg/dialer.svg";
import location from "../assets/business/svg/location.svg";
import message from "../assets/business/svg/message.svg";
import store from "../assets/business/svg/store.svg";
import whatsapp from "../assets/business/svg/whatsapp.svg";
import styles from "./Btemplate10.module.scss";
import asset1 from "./assets/asset1.png";
import asset1Mob from "./assets/asset1Mob.png";
import rating from "../assets/images/rating.png";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import EditTextIcon from "../assets/images/EditTextIcon.svg";

function Container1({ editable, landingImage, setLandingImage, ratingData, setShowRating, businessName, setBusinessName }) {
	const onContentBlur = CreateSanitizeCallback(setBusinessName);
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
		<div className={styles.Container1}>
			{!editable && <ImageUpload className={styles.changeLandingIcon} setImage={setLandingImage} image={landingImage} />}
			<div className={styles.asset}>{width < height ? <img src={asset1Mob} alt="" /> : <img src={asset1} alt="" />}</div>
			<div className={styles.intro}>
				<div className={styles.introImage}>
					<img src={landingImage} alt="" />
				</div>
			</div>
			<div className={styles.postSubscribers}>
				<div className={styles.subscribers}>
					<h3>{"650k"}</h3>
					<h5>Subscribers</h5>
				</div>
				<div className={styles.posts}>
					<h3>{"5000"}</h3>
					<h5>Post</h5>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.RatingContainer} onClick={() => setShowRating(true)}>
					<img src={rating} alt="" />
					<p>{ratingData}</p>
				</div>

				<div className={styles.socials}>
					<div className={styles.whatsapp}>
						<img src={whatsapp} alt="" />
					</div>
					<div className={styles.phone}>
						<img src={dialer} alt="" />
					</div>
					<div className={styles.mail}>
						<img src={message} alt="" />
					</div>
					<div className={styles.location}>
						<img src={location} alt="" />
					</div>
					<div className={styles.store}>
						<img src={store} alt="" />
					</div>
				</div>
				<div className={styles.nameActions}>
					{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}
					<ContentEditableDiv
						className={styles.businessName}
						text={businessName}
						onChange={onContentBlur}
						contentEditable={!editable}
					/>
					<div className={styles.buttons}>
						<button>Subscribe</button>
						<button>Message</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Container1;
