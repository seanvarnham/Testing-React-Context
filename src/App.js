import classNames from "classnames";

import AuthContextProvider, { AuthContext } from "./store/auth-context";
import LoggedInOutButton from "./components/LoggedInOutButton";
import ToggleThemeButton from "./components/ToggleTheme";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App = () => {
	return (
		<AuthContextProvider>
			<AuthContext.Consumer>
				{(ctx) => {
					const { themeState } = ctx;
					const appClasses = classNames(`App`, {
						[styles[`App-Theme--${themeState}`]]: themeState,
					});

					return (
						<div className={appClasses}>
							<header className={styles[`App-header`]}>
								<img
									src={logo}
									className={styles[`App-logo`]}
									alt="logo"
								/>
								<p>
									Edit <code>src/App.js</code> and save to
									reload.
								</p>

								<a
									className={styles[`App-link`]}
									href="https://reactjs.org"
									target="_blank"
									rel="noopener noreferrer"
								>
									Learn React
								</a>

								<div className={styles[`button-container`]}>
									<ToggleThemeButton />
									<LoggedInOutButton />
								</div>
							</header>
						</div>
					);
				}}
			</AuthContext.Consumer>
		</AuthContextProvider>
	);
};

export default App;
