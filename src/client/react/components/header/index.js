import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"

import Anime from 'react-anime';
import { motion } from "framer-motion"

import { 
    getMainShape
} from "../../../redux/actions/shapesActions"

class Header extends Component {

	constructor(props){
		super(props)
		this.state = {
			menuOpen: false,
            menuClosing: false,
            showMenuBars: false,
            showContent: false,
            showWord:false
		}
	}


	componentDidMount() {
        setTimeout(() => {
            this.setState({
                showMenuBars: true,
            })
        }, 500)

	}
	renderAuthButton() {
		return this.props.user ? (
			<div className="user-info">

			<div className="user-avatar-container">
				{/* <Link to={`/profile/${this.props.user.profile._id}`}>
					<img
						className="user-avatar"
						src={this.props.user.profile.profile.photos[0].value}
					/>
					<span className="user-display-name">
						{this.props.user.profile.profile.displayName}
					</span>
				</Link> */}
			</div>

		

			<a href="/api/logout" className="logout-button">
				Logout
			</a>

			</div>
		) : (
			<div className="user-info">
				<a href="/api/auth/google" className="login-button">
					Login with Google
				</a>
			</div>
		);
	}

	renderLines() {
		const bottomOpen = [
			{ value: 'M39.50625,9.5 C30.8788547,9.5 28.639837,0.5 20,0.5 C11.360163,0.5 8.88972652,9.5 0.5,9.5' }]

		const bottomClosed = [
			{ value: 'M39.50625,9.5 C30.8788547,9.5 28.642962,9.5 20.003125,9.5 C11.363288,9.5 8.88972652,9.5 0.5,9.5' }]

		const topOpen = [
			{ value: 'M39.50625,0.5 C30.8788547,0.5 28.642962,0.5 20.003125,0.5 C11.363288,0.5 8.88972652,0.5 0.5,0.5' }]

		const topClosed = [
			{ value: 'M39.50625,0.5 C30.8788547,0.5 28.642962,9.5109931 20.003125,9.5109931 C11.363288,9.5109931 8.88972652,0.5 0.5,0.5' }]


		if(!this.state.menuOpen && !this.state.menuClosing) {
			return(
				<div>
					<div className="line_bottom">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="10"
						>
							<g
							fill="none"
							fillRule="evenodd"
							stroke="#FFF"
							strokeLinecap="square"
							strokeWidth="1.1"
							>

								<path d="M39.50625,9.5 C30.8788547,9.5 28.642962,9.5 20.003125,9.5 C11.363288,9.5 8.88972652,9.5 0.5,9.5"></path>
						
							</g>
						</svg>

					</div>

					<div className="line_top">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="10"
						>
							<g
							fill="none"
							fillRule="evenodd"
							stroke="#FFF"
							strokeLinecap="square"
							strokeWidth="1.1"
							>
                                
								<path d="M39.50625,0.5 C30.8788547,0.5 28.642962,0.5 20.003125,0.5 C11.363288,0.5 8.88972652,0.5 0.5,0.5"></path>
							</g>
						</svg>

					</div>
				</div>
			)
		}

		if(this.state.menuOpen) {
			return(<div>
				<div className="line_bottom">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="10"
					>
						<g
						fill="none"
						fillRule="evenodd"
						stroke="#FFF"
						strokeLinecap="square"
						strokeWidth="1"
						>
						<Anime
							easing="easeInOutCubic"
							duration={1000}
							d={bottomOpen}
							loop={false}
							key={11+Date.now()}
						>
								<path d="M39.50625,9.5 C30.8788547,9.5 28.642962,9.5 20.003125,9.5 C11.363288,9.5 8.88972652,9.5 0.5,9.5"></path>
						</Anime>
						)
						</g>
					</svg>

				</div>

				<div className="line_top">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="10"
					>
						<g
						fill="none"
						fillRule="evenodd"
						stroke="#FFF"
						strokeLinecap="square"
						strokeWidth="1.1"
						>
							<Anime
							easing="easeInOutCubic"
							duration={1000}
							d={topClosed}
							loop={false}
							key={11+Date.now()}
						>	
								<path d="M39.50625,0.5 C30.8788547,0.5 28.642962,0.5 20.003125,0.5 C11.363288,0.5 8.88972652,0.5 0.5,0.5"></path>

						</Anime>
					
						
						
						</g>
					</svg>

				</div>
				</div>
			)
		}

		if(this.state.menuClosing) {
			return(
				<div>
					<div className="line_bottom">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="10"
					>
						<g
						fill="none"
						fillRule="evenodd"
						stroke="#FFF"
						strokeLinecap="square"
						strokeWidth="1.1"
						>
						<Anime
							easing="easeInOutCubic"
							duration={1000}
							d={bottomClosed}
							loop={false}
							key={11+Date.now()}
						>
							<path d="M39.50625,9.5 C30.8788547,9.5 28.639837,0.5 20,0.5 C11.360163,0.5 8.88972652,9.5 0.5,9.5"></path>
								
						</Anime>
						
						
						</g>
					</svg>

				</div>

				<div className="line_top">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="10"
					>
						<g
						fill="none"
						fillRule="evenodd"
						stroke="#FFF"
						strokeLinecap="square"
						strokeWidth="1.1"
						>
			
							<Anime
								easing="easeInOutCubic"
								duration={1000}
								d={topOpen}
								loop={false}
								key={11+Date.now()}
							>

								<path d="M39.50625,0.5 C30.8788547,0.5 28.642962,9.5109931 20.003125,9.5109931 C11.363288,9.5109931 8.88972652,0.5 0.5,0.5"></path>
									
							</Anime>
						
						
						</g>
					</svg>

				</div>
				</div>
			)
		}
	}

	handleClick() {
		if(!this.state.menuOpen && !this.state.menuClosing) {
			this.setState({
                menuOpen: true,
                showContent: true,
            })
            setTimeout(() => {
				this.setState({
                    showWord: true,
				})
			}, 100)
            document.body.classList.add("no-scroll")
		}
		
		if(this.state.menuOpen) {
			this.setState({
                menuOpen: false,
                menuClosing: true,
                showContent: false
			})

            document.body.classList.remove("no-scroll")
            
			setTimeout(() => {
				this.setState({
                    menuClosing: false,
				})
			}, 1000)
		}
	}

	chooseColor() {
		let colors = [
			"#FF0042", "#5C00FF", "#A100FF", "#00FF5F", "#00F6FF", "#FFDD00"
		]

        // return colors[Math.floor(Math.random() * colors.length)];
        return "#FFFFFF"
    }
    
    renderBottom() {
        if(this.props.user && this.props.user.email) {
            return(
                <div className="auth-links-container">Logged in as {this.props.user.email} 
                    <Link 
                        to="/auth/logout"
                        className="logout-link"
                        onClick={() => {
                            this.handleClick()
                        }}
                    >Logout</Link>
                </div>
            )
        } else {
            return(
                <div className="auth-links-container">
                    <ul className="auth-links" onClick={() => {
                            this.handleClick()
                        }}>
                        <li className="single-auth-link"><Link to="/auth/login">Login</Link></li>
                        <li className="single-auth-link"><Link to="/auth/signup">Signup</Link></li>
                    </ul>
                </div>
            )
        }
    }

	renderMenu() {
		const menuContainer = {
			open: { 
				height: "100%",
				type: "spring",
				damping: 2,
				stiffness: 10,
				transition: { duration: 0.4, delay: 0.3 }
			},
			closed: { 
				height: "0",
				type: "spring",
				damping: 2,
				stiffness: 10,
				transition: { duration: 0.2, delay: 0.05 }
			},
		}

		const menuBar = {
			open: (custom) => ({
                y: 0,
				backgroundColor: this.chooseColor(),
				type: "spring",
				damping: 2,
                stiffness: 10,
				transition: { 
					delay: 0 + custom,
					duration: 0.4, 
				}
			}),
			closed: (custom) => ({
                y: "-100%",
				backgroundColor: this.chooseColor(),
				type: "spring",
				damping: 2,
                stiffness: 10,
				transition: { 
					delay: 0,
					duration: 0.2
				}
			})
        }
        
        const wordItem = {
			open: (custom) => ({
                opacity: 1,
				transition: { 
					delay: 0.1 + custom,
					duration: 0.4, 
				}
			}),
			closed: (custom) => ({
                opacity: 0,
				transition: { 
					delay: 0,
					duration: 0.4
				}
			})
		}

		return (
			<div>
                    <div className={classNames({
                        "show-bars": this.state.showMenuBars
                    }, "bars")}>
                        <motion.div
                            animate={this.state.menuOpen ? "open" : "closed"}
                            variants={menuBar}
                            custom={0}
                            className="menu_bar menu_bar_1"
                        />

                        <motion.div
                            animate={this.state.menuOpen ? "open" : "closed"}
                            variants={menuBar}
                            custom={0.1}
                            className="menu_bar menu_bar_2"
                        />
                    </div>
                    
				<motion.div
					animate={this.state.menuOpen ? "open" : "closed"}
					variants={menuContainer}
					className="menu_container"
				>

                    {this.state.showContent && <div className="menu_content">
                        <ul className="menu-links" onClick={() => {
                            this.handleClick()
                        }}>
                            <li className="menu-link">
                                
                                <motion.div
                                    animate={this.state.showWord ? "open" : "closed"}
                                    variants={wordItem}
                                    custom={0.1}
                                    className="menu-word-container"
                                >
                                    <Link to="/shapes">Shapes</Link>
                                </motion.div>
                            </li>
                            <li className="menu-link">
                                <motion.div
                                    animate={this.state.showWord ? "open" : "closed"}
                                    variants={wordItem}
                                    custom={0.2}
                                    className="menu-word-container"
                                >
                                    <Link to="/music">Music</Link>
                                </motion.div>
                            </li>
                            <li className="menu-link">
                                <motion.div
                                    animate={this.state.showWord ? "open" : "closed"}
                                    variants={wordItem}
                                    custom={0.3}
                                    className="menu-word-container"
                                >
                                    <Link to="/work">Work</Link>
                                </motion.div>
                            </li>
                            <li className="menu-link">
                                <motion.div
                                    animate={this.state.showWord ? "open" : "closed"}
                                    variants={wordItem}
                                    custom={0.4}
                                    className="menu-word-container"
                                >
                                    <Link to="/about">About</Link>

                                </motion.div>
                            </li>
                        </ul>

                        {this.renderBottom()}
                    </div>}
						
				</motion.div>

				
			</div>

		)
	}


	render() {

		const bottomOpen = [
			{ value: 'M39.50625,9.5 C30.8788547,9.5 28.639837,0.5 20,0.5 C11.360163,0.5 8.88972652,9.5 0.5,9.5' }]

		const bottomClosed = [
			{ value: 'M39.50625,9.5 C30.8788547,9.5 28.642962,9.5 20.003125,9.5 C11.363288,9.5 8.88972652,9.5 0.5,9.5' }]

		const topOpen = [
			{ value: 'M39.50625,0.5 C30.8788547,0.5 28.642962,0.5 20.003125,0.5 C11.363288,0.5 8.88972652,0.5 0.5,0.5' }]

		const topClosed = [
			{ value: 'M39.50625,0.5 C30.8788547,0.5 28.642962,9.5109931 20.003125,9.5109931 C11.363288,9.5109931 8.88972652,0.5 0.5,0.5' }]

		
		if(this.props.location.pathname == "/search") {
			return (<div></div>)
		} else {
			return (
                <div 
                    className={classNames({
                        "app-header": true,
                        "demo-mode": this.props.demoMode
                    })}
                >
					<div className="app-header-wrapper">
	
                        <div 
                            className="header-left"
                        >
                                <Link 
                                    to="/"  
                                    onClick={() => {
                                            if(this.state.menuOpen) {
                                                this.setState({
                                                    menuOpen: false,
                                                    menuClosing: true
                                                })
                
                                                document.body.classList.remove("no-scroll")
                                    
                                                setTimeout(() => {
                                                    this.setState({
                                                        menuClosing: false
                                                    })
                                                }, 1000)

                                                this.props.getMainShape()
                                            }

                                            this.props.getMainShape()
                                        }}>
                                        Mikhail Proniushkin
                                </Link>
                                </div>
	
							<div className="menu_icon" onClick={() => {
								this.handleClick()
							}}>
								
							{this.renderLines()}
	
							
						</div>


					</div>
                    {this.renderMenu()}

			  </div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		user: state.app.user,
        location: state.router.location,
        demoMode: state.app.demoMode
	};
}

export default connect(mapStateToProps, {
    getMainShape
})(withRouter(Header));
