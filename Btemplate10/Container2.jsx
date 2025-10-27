import React from "react";
import styles from "./Btemplate10.module.scss";
import AboutDescAsset from "./assets/aboutDescAsset.svg";
import AboutusAsset from "./assets/aboutusAsset.svg";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import EditTextIcon from "../assets/images/EditTextIcon.svg";

function Container2({ editable, aboutusImg, setAboutusImg, aboutusText, setAboutusText }) {
	const onContentBlur = CreateSanitizeCallback(setAboutusText);
	return (
		<div className={styles.Container2}>
			<div className={styles.aboutImage}>
				<img src={aboutusImg} alt="" />
			</div>
			<div className={styles.aboutCompany}>
				<img src={AboutusAsset} alt="" />
				<p>About Company</p>
			</div>
			<div className={styles.aboutDesc}>
				<img src={AboutDescAsset} alt="" />
				{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}
				<ContentEditableDiv
					className={styles.aboutusText}
					text={aboutusText}
					onChange={onContentBlur}
					contentEditable={!editable}
				/>
			</div>
			<div className={styles.hiringButton}>We're Hiring</div>
		</div>
	);
}

export default Container2;
