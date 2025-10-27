import React from "react";
import styles from "./Btemplate10.module.scss";
import chooseusAsset from "./assets/chooseusDesc.svg";
import EditTextIcon from "../assets/images/EditTextIcon.svg";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";

function Container3({ editable, chooseusImage, setChooseusImage, chooseusText, setChooseustext }) {
	const onContentBlur = CreateSanitizeCallback(setChooseustext);
	return (
		<div className={styles.Container3}>
			<div className={styles.chooseusImage}>
				<img src={chooseusImage} alt="" />
			</div>
			<div className={styles.chooseusContent}>
				{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}
				<img src={chooseusAsset} alt="" />
				<h3>Why Choose us</h3>
				<ContentEditableDiv
					className={styles.chooseusText}
					text={chooseusText}
					onChange={onContentBlur}
					contentEditable={!editable}
				/>
			</div>
		</div>
	);
}

export default Container3;
