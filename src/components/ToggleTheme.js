import React, { useContext } from "react";
import classnames from "classnames";
import { AuthContext } from "../store/auth-context";
import styles from "../App.module.css";

const ToggleThemeButton = () => {
	const context = useContext(AuthContext);
	const { onToggleTheme, themeState } = context;

	const buttonClasses = classnames(styles[`button--login`], {});

	return (
		<>
			<button className={buttonClasses} onClick={onToggleTheme}>
				{themeState === "light" ? "Light" : "Dark"}
			</button>
		</>
	);
};

export default ToggleThemeButton;
