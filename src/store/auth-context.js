import { createContext, useState } from "react";

export const AuthContext = createContext({
	theme: "light",
	isLoggedIn: false,
});

const AuthContextProvider = (props) => {
	const { children } = props;

	const [loginState, setLoginState] = useState(false);
	const [themeState, setThemeState] = useState("dark");

	const onToggleTheme = () => {
		let newTheme = "";
		if (themeState === "light") {
			newTheme = "dark";
		} else {
			newTheme = "light";
		}

		setThemeState(newTheme);
	};

	const onSuccessfulLogin = () => {
		setLoginState(!loginState);
	};

	const providerValue = {
		loginState,
		themeState,
		onToggleTheme,
		onSuccessfulLogin,
	};

	return (
		<>
			<AuthContext.Provider value={providerValue}>
				{children}
			</AuthContext.Provider>
		</>
	);
};
export default AuthContextProvider;
