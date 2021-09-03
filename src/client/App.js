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

import { authUser, fetchCurrentUser, clearCurrentUser } from "../client/redux/actions/authActions"

import Scroll from "./react/components/scroll"

import Header from "./react/components/header"



export let socket

class App extends Component {
	state = {
		appVisible: false
	}

	componentDidMount() {
        let socket = io()

        this.auth()

		const theme = localStorage.getItem('theme');
		if (theme) {
			this.props.toggleTheme(theme)
			document.body.classList.add("theme-" + theme);
		} else {
			this.props.toggleTheme("dark")
			document.body.classList.add("theme-dark");
		}
    }
    
    componentDidUpdate(prevprops) {
		if(prevprops.user !== this.props.user) {
			if(this.props.user && !this.props.user.avatar) {
				
				// this.props.assignAvatar(() => {
				// 	this.loadUser()
				// })
			}
		}
	}

	@keydown("ctrl + t")
	toggleTheme() {
		this.props.toggleTheme()
    }
    
    auth() {
		const token = localStorage.getItem('token');
		if (token) {
			this.props.authUser()
			this.loadUser()
		} else {
			this.setState({
				appVisible: true
			})
		}
	}

	loadUser() {
		this.props.fetchCurrentUser(() => {
			this.setState({
				appVisible: true
			})

			// if(this.props.user && !this.props.user.username) {
			// 	this.props.showUsername()
			// } else {
			// 	this.props.hideUsername()
			// }
		})
	}

	render() {
		return (
			<div className={"app theme-"+ this.props.theme}>
                <Header/>
				<div className={"app-route-container theme-" + this.props.theme}>
					{renderRoutes(this.props.route.routes)}
				</div>
                <Scroll />
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		appReducer: state.appReducer,
        theme: state.app.theme,
        user: state.app.user
	};
}

export default {
	component: withRouter(connect(mapStateToProps, {
        toggleTheme,
        authUser, 
		fetchCurrentUser, 
		clearCurrentUser,
	})(App))
};