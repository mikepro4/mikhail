import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import classNames from "classnames";
import socketIOClient from "socket.io-client";
import keydown from "react-keydown";

import { FocusStyleManager } from "@blueprintjs/core";

import { io } from "./socket"

import { 
	toggleTheme, 
} from "./redux/actions/appActions"

FocusStyleManager.onlyShowFocusOnTabs();

export let socket

class App extends Component {
	state = {
		appVisible: false
	}

	componentDidMount() {
        let socket = io()

		const theme = localStorage.getItem('theme');
		if (theme) {
			this.props.toggleTheme(theme)
			document.body.classList.add("theme-" + theme);
		} else {
			this.props.toggleTheme("dark")
			document.body.classList.add("theme-dark");
		}
	}

	@keydown("ctrl + t")
	toggleTheme() {
		this.props.toggleTheme()
	}

	render() {
		return (
			<div className={"app theme-"+ this.props.theme}>
				<div className={"app-route-container theme-" + this.props.theme}>
					{renderRoutes(this.props.route.routes)}
				</div>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		appReducer: state.appReducer,
		theme: state.app.theme,
	};
}

export default {
	component: withRouter(connect(mapStateToProps, {
		toggleTheme,
	})(App))
};