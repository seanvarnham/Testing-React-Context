import React, { useContext } from "react";
import classnames from "classnames";
import { AuthContext } from "../store/auth-context";
import styles from "../App.module.css";

const LoggedInOutButton = () => {
	const loginContext = useContext(AuthContext);
	const { onSuccessfulLogin, loginState } = loginContext;

	const classes = classnames(styles[`button--login`], {
		[styles[`is-logged-in`]]: loginState,
		[styles[`is-logged-out`]]: !loginState,
	});

	return (
		<button className={classes} onClick={onSuccessfulLogin}>
			{loginState ? "Log out" : "Log in"}
		</button>
	);
};

export default LoggedInOutButton;
