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
    demoOn,
    demoOff,
    toggleTheme, 
    activateKey,
    deactivateKey
} from "./redux/actions/appActions"

FocusStyleManager.onlyShowFocusOnTabs();

import { authUser, fetchCurrentUser, clearCurrentUser } from "../client/redux/actions/authActions"

import Scroll from "./react/components/scroll"

import Header from "./react/components/header"

import Player from "./react/components/player"
import Drawer from "./react/components/drawer"

import Play from "./react/components/icons/play"
import Timeline from "./react/components/timeline"
import AudioPlayer from "./react/components/audioplayer"

import {
    trackPlay,
    trackPause,
    trackSeek
} from './redux/actions/playerActions'

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
        
        document.addEventListener("keydown", this.onKeyDownPressed.bind(this))
        document.addEventListener("keyup", this.onKeyUpPressed.bind(this))
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDownPressed.bind(this));
        document.removeEventListener("keyup", this.onKeyUpPressed.bind(this));
    }     
    
    onKeyDownPressed(e) {
        // console.log("down", e.keyCode);
        this.props.activateKey(e.keyCode)
    }

    onKeyUpPressed(e) {
        // console.log("up", e.keyCode);
        this.props.deactivateKey(e.keyCode)
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

    @keydown("space")
    playTrack() {
        console.log("play")
        // this.props.trackPlay(this.props.player.trackMetadata)

        switch (this.props.player.status) {
            case "stop":
                this.props.trackPlay(this.props.player.trackMetadata)
                return 
            case "pause":
                this.props.trackPlay(this.props.player.trackMetadata)
                return 
            case "play":
                this.props.trackPause(this.props.player.trackMetadata)
                return
            default:
                return
        }
    }

    @keydown("h")
    demoMode() {
        console.log("demo mode")

        if(this.props.demoMode) {
            this.props.demoOff()
        } else {
            this.props.demoOn()
        }
        // this.props.trackPlay(this.props.player.trackMetadata)

        // switch (this.props.player.status) {
        //     case "stop":
        //         this.props.trackPlay(this.props.player.trackMetadata)
        //         return 
        //     case "pause":
        //         this.props.trackPlay(this.props.player.trackMetadata)
        //         return 
        //     case "play":
        //         this.props.trackPause(this.props.player.trackMetadata)
        //         return
        //     default:
        //         return
        // }
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
		})
	}

	render() {
		return (
            <div 
                className={"app theme-"+ this.props.theme}
                >
                {/* <div className="app-bg"></div> */}
                {this.props.drawerOpen && <Drawer type={this.props.drawerType} />}
                <Header/>
                <div className="main-section">
                    <div 
                        className={classNames({
                            "app-route-container": !this.props.demoMode
                        }, "theme-" + this.props.theme)}
                    >
                        {renderRoutes(this.props.route.routes)}
                    </div>
                    <div className="new-player">
                        {!this.props.demoMode &&<Timeline/> }
                        <AudioPlayer/>
                        
                    </div>

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
        user: state.app.user,
        drawerOpen: state.app.drawerOpen,
        drawerType: state.app.drawerType,
        demoMode: state.app.demoMode,
        player: state.player
	};
}

export default {
	component: withRouter(connect(mapStateToProps, {
        toggleTheme,
        authUser, 
		fetchCurrentUser, 
        clearCurrentUser,
        activateKey,
        deactivateKey,
        trackPlay,
        trackPause,
        trackSeek,
        demoOn,
        demoOff
	})(App))
};