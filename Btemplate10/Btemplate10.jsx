import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import setting from "../assets/images/Setting.svg";
import AboutMe from "../components/AboutMe/AboutMe";
import NavBar from "../components/NavBar/NavBar";
import Rating from "../components/Rating/Rating";
import styles from "./Btemplate10.module.scss";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container5 from "./Container5";
import aboutImage from "./assets/aboutImage.webp";
import chooseusImg from "./assets/chooseImage.webp";
import introImg from "./assets/introImage.webp";

const BTemplate10 = () => {
	document.documentElement.style.setProperty("--base-font-size", "100%");
	const { user, templateData, isLoading, currentUserId, userId } = useSelector((state) => state.auth);
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

	if (width < 1928) document.documentElement.style.setProperty("--base-font-size", "90%");
	if (width < 1728) document.documentElement.style.setProperty("--base-font-size", "90%");
	if (width < 1500) document.documentElement.style.setProperty("--base-font-size", "80%");
	if (width < 1500 && height < 570) document.documentElement.style.setProperty("--base-font-size", "55%");
	if (width < 1350) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 1300 && height < 590) document.documentElement.style.setProperty("--base-font-size", "50%");
	if (width < 1250) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 1150) document.documentElement.style.setProperty("--base-font-size", "65%");
	if (width < 1025) document.documentElement.style.setProperty("--base-font-size", "52%");
	if (width < 1025 && height > 1300) document.documentElement.style.setProperty("--base-font-size", "152%");

	if (width < 950) document.documentElement.style.setProperty("--base-font-size", "40%");
	if (width < 850) document.documentElement.style.setProperty("--base-font-size", "45%");
	// if (width < 800) document.documentElement.style.setProperty("--base-font-size", "50%");
	if (width < 750) document.documentElement.style.setProperty("--base-font-size", "40%");
	if (width < 930 && height > 930) document.documentElement.style.setProperty("--base-font-size", "150%");
	if (width < 880 && height > 600) document.documentElement.style.setProperty("--base-font-size", "130%");
	if (width < 770 && height > 600) document.documentElement.style.setProperty("--base-font-size", "112%");
	if (width < 670 && height > 600) document.documentElement.style.setProperty("--base-font-size", "92%");
	if (width < 570 && height > 600) document.documentElement.style.setProperty("--base-font-size", "82%");
	// if (width < 550 && height > 600) document.documentElement.style.setProperty("--base-font-size", "80%");
	if (width < 480 && height > 600) document.documentElement.style.setProperty("--base-font-size", "95%");
	if (width < 400 && height > 600) document.documentElement.style.setProperty("--base-font-size", "90%");
	if (width < 380 && height > 600) document.documentElement.style.setProperty("--base-font-size", "70%");
	// if (width < 300 && height > 600) document.documentElement.style.setProperty("--base-font-size", "70%");
	// if (width < 930 && height > 1100) document.documentElement.style.setProperty("--base-font-size", "140%");

	const [editable, setEditable] = useState(true);
	const [showNav, setShowNav] = useState(false);
	const [showRating, setShowRating] = useState(false);
	const [ratingData, setRatingData] = useState("4.5");
	const [showAboutMe, setShowAboutMe] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [liveIn, setLiveIn] = useState("");
	const [schooling, setSchooling] = useState("");
	const [profession, setProfession] = useState("");

	const [businessName, setBusinessName] = useState("BUSINESS NAME");
	const [businessLogo, setBusinessLogo] = useState("Logo");
	const [postCount, setPostCount] = useState("2560");
	const [subscriberCount, setSubscriberCount] = useState("14k");
	// const [rating, setRating] = useState("4");
	const [landingImage, setLandingImage] = useState(introImg);
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [aboutusText, setAboutusText] = useState(
		"Lorem ipsum dolor sit amet consectetur. Erat et amet justo volutpat vitae cursus lorem proin. Sit vitae cursus amet nunc diam. Ut mi consequat vel urna auctor suspendisse est turpis. Elementum eget fringilla arcu scelerisque vel et morbi aliquam. Volutpat ridiculus leo etiam quam. Vulputate risus auctor id vestibulum. Nisl."
	);
	const [aboutusImg, setAboutusImg] = useState(aboutImage);

	const [chooseusText, setChooseusText] = useState(
		`Choose us for your computer and accessories needs because we offer high-quality products at competitive prices. Our experienced team provides excellent customer service and technical support, ensuring your satisfaction with every purchase. Trust us to deliver reliable and efficient solutions for all your computing needs.`
	);
	const [chooseusImage, setChooseusImage] = useState(chooseusImg);
	const [bannerBottom, setBannerBottom] = useState("bottomBanner");

	useEffect(() => {
		if (templateData === null) return;
		setRatingData(user?.Rating === undefined ? "0" : user?.Rating);
		setName(user?.username === "" || user?.username === undefined ? templateData?.name : user?.username);
	}, [user, templateData]);

	const templateUpdatedData = {
		name,
		aboutMe: {
			email,
			phone,
			liveIn,
			schooling,
			profession,
		},
		hireMe: {
			hireable: false,
		},
	};

	return (
		<>
			{/* {isLoading && <Lodging />} */}
			<NavBar
				editable={editable}
				setEditable={setEditable}
				showNav={showNav}
				setShowNav={setShowNav}
				templateUpdatedData={templateUpdatedData}
			/>
			{showRating && <Rating setShowRating={setShowRating} setRatingData={setRatingData} />}
			{showAboutMe && (
				<AboutMe
					editable={editable}
					setShowAboutMe={setShowAboutMe}
					email={email}
					setEmail={setEmail}
					phone={phone}
					setPhone={setPhone}
					liveIn={liveIn}
					setLiveIn={setLiveIn}
					schooling={schooling}
					setSchooling={setSchooling}
					profession={profession}
					setProfession={setProfession}
				/>
			)}

			<div className={styles.TemplateWrapper} id="Template10">
				{!showNav && currentUserId === userId && user && (
					<img src={setting} alt="" className={styles.Setting} onClick={() => setShowNav(true)} />
				)}

				<div className={styles.Template10}>
					<Container1
						editable={editable}
						landingImage={landingImage}
						setLandingImage={setLandingImage}
						businessLogo={businessLogo}
						setBusinessLogo={setBusinessLogo}
						businessName={businessName}
						setBusinessName={setBusinessName}
						ratingData={ratingData}
						setShowRating={setShowRating}
					/>
					<Container2
						editable={editable}
						aboutusImg={aboutusImg}
						setAboutusImg={setAboutusImg}
						aboutusText={aboutusText}
						setAboutusText={setAboutusText}
					/>
					<Container3
						editable={editable}
						chooseusImage={chooseusImage}
						setChooseusImage={setChooseusImage}
						chooseusText={chooseusText}
						setChooseustext={setChooseusText}
					/>
					<Container4 />
					<Container5 />
				</div>
			</div>
		</>
	);
};

export default BTemplate10;
