import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import classNames from "classnames"
import keydown from "react-keydown";
import moment from "moment"
import update from "immutability-helper";

import qs from "qs";
import * as _ from "lodash"

import { 
    createShape, loadShape, searchShapes, deleteShape, updateShape, loadNewShape, clearNewShape, getMainShape
} from "../../../redux/actions/shapesActions"

import Viz from "../../components/viz"

import SettingsIcon from "../../components/icons/settings"

import {
    showDrawer
} from '../../../redux/actions/appActions'


class HomePage extends Component {

    state = {
        touched: false,
        timeInterval: null,
        time: 0,
        originalBoldRate: null,
        activeZone: null,
        keys: {
            e: false,
            r: {
                active: false,
                interval: null,
                time: 0,
                waiting: false
            },
            v: false, 
            b: false,
            a: false,
            s: false,
            d: false, 
            f: false,
            q: false,
            w: false
        },
        startedIntervals: []
	}

	componentDidMount() {
        if (this.props.location.search) {
            console.log("here")
            console.log(this.getQueryParams().shape)
            this.props.loadShape(this.getQueryParams().shape, (data) => {
                console.log(data)
            })
        } else {
            this.props.getMainShape()

        }
    }
    
    keyUp() {
        console.log("keyup")
    }

	componentDidUpdate(prevprops) {
        if(!_.isEqual(prevprops.app.activeKeys, this.props.app.activeKeys)) {
            setTimeout(() => {
                this.checkIntervals()
            }, 1)
        }
    }

    componentWillUnmount() {
        this.props.clearNewShape()
    }

    getQueryParams = () => {
		return qs.parse(this.props.location.search.substring(1));
    };
    
    
    renderHead = () => (
		<Helmet>
			<title>Design, Tech & Techno</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
    )

    handleZone1TouchStart = (event) => {
        if(!this.state.touched) {
            console.log(event)
            this.setState({
                touched: true,
                activeZone: 1
            })
            this.startZone1TimeInterval()
        }
    }

    handleZone1TouchEnd= (event) => {
        clearInterval(this.state.timeInterval);

        this.setState({
            touched: false,
            time: 0,
            activeZone: null
        })
    }

    handleZone2TouchStart = (event) => {
        if(!this.state.touched) {
            console.log(event)
            this.setState({
                touched: true,
                activeZone: 2
            })
            this.startZone2TimeInterval()
        }
    }

    handleZone2TouchEnd= (event) => {
        clearInterval(this.state.timeInterval);

        this.setState({
            touched: false,
            time: 0,
            activeZone: null
        })
    }

    handleZone4TouchStart = (event) => {
        if(!this.state.touched) {
            console.log(event)
            this.setState({
                touched: true,
                activeZone: 4
            })
            this.startZone4TimeInterval()
        }
    }

    handleZone4TouchEnd= (event) => {
        clearInterval(this.state.timeInterval);

        this.setState({
            touched: false,
            time: 0,
            activeZone: null
        })
    }

    handleZone3TouchStart = (event) => {
        if(!this.state.touched) {
            console.log(event)
            this.setState({
                touched: true,
                activeZone: 3
            })
            this.startZone3TimeInterval()
        }
    }

    handleZone3TouchEnd= (event) => {
        clearInterval(this.state.timeInterval);

        this.setState({
            touched: false,
            time: 0,
            activeZone: null
        })
    }

    handleZone6TouchStart = (event) => {
        if(!this.state.touched) {
            console.log(event)
            this.setState({
                touched: true,
                activeZone: 6
            })
            this.startZone6TimeInterval()
        }
    }

    handleZone6TouchEnd= (event) => {
        clearInterval(this.state.timeInterval);

        this.setState({
            touched: false,
            time: 0,
            activeZone: null
        })
    }

    handleZone7TouchStart = (event) => {
        if(!this.state.touched) {
            console.log(event)
            this.setState({
                touched: true,
                activeZone: 7
            })
            this.startZone7TimeInterval()
        }
    }

    handleZone7TouchEnd= (event) => {
        clearInterval(this.state.timeInterval);

        this.setState({
            touched: false,
            time: 0,
            activeZone: null
        })
    }

    handleZone8TouchStart = (event) => {
        if(!this.state.touched) {
            console.log(event)
            this.setState({
                touched: true,
                activeZone: 8
            })
            this.startZone8TimeInterval()
        }
    }

    handleZone8TouchEnd= (event) => {
        clearInterval(this.state.timeInterval);

        this.setState({
            touched: false,
            time: 0,
            activeZone: null
        })
    }

    handleZone5TouchStart = (event) => {
        if(!this.state.touched) {
            console.log(event)
            this.setState({
                touched: true,
                activeZone: 5
            })
            this.startZone5TimeInterval()
        }
    }

    handleZone5TouchEnd= (event) => {
        clearInterval(this.state.timeInterval);

        this.setState({
            touched: false,
            time: 0,
            activeZone: null
        })
    }

    startZone5TimeInterval() {
        clearInterval(this.state.timeInterval);

        let selectedShape

        if(this.props.shape.newShape.defaultViz) {
            selectedShape = this.props.shape.newShape
        } else {
            selectedShape = this.props.shape.currentShape
        }
        this.setState({
            originalBoldRate: selectedShape.defaultViz.shape.boldRate 
        })

		const timeInterval = setInterval(() => {
            this.setState({ 
                time: this.state.time + 100
             });

            //  let newShape = this.props.shape.currentShape.defaultViz.shape
            
            // console.log(selectedShape)
            if(selectedShape && selectedShape.defaultViz) {
                let finalshape = {
                    ...selectedShape,
                    defaultViz: {
                       ...selectedShape.defaultViz,
                       shape: {
                           ...selectedShape.defaultViz.shape,
                           boldRate: selectedShape.defaultViz.shape.boldRate  + this.state.time / 10000
                       }
                    }
                }
                this.props.loadNewShape(finalshape)
            }
             
		}, 1);

		this.setState({ timeInterval });
    }
    
    startZone6TimeInterval() {
        clearInterval(this.state.timeInterval);

        let selectedShape

        if(this.props.shape.newShape.defaultViz) {
            selectedShape = this.props.shape.newShape
        } else {
            selectedShape = this.props.shape.currentShape
        }
        this.setState({
            originalBoldRate: selectedShape.defaultViz.shape.boldRate 
        })

		const timeInterval = setInterval(() => {
            this.setState({ 
                time: this.state.time + 100
             });

            //  let newShape = this.props.shape.currentShape.defaultViz.shape
            
            // console.log(selectedShape)
            if(selectedShape && selectedShape.defaultViz) {
                let finalshape = {
                    ...selectedShape,
                    defaultViz: {
                       ...selectedShape.defaultViz,
                       shape: {
                           ...selectedShape.defaultViz.shape,
                           boldRate: selectedShape.defaultViz.shape.boldRate  - this.state.time / 10000
                       }
                    }
                }
                this.props.loadNewShape(finalshape)
            }
             
		}, 1);

		this.setState({ timeInterval });
    }
    
    startZone3TimeInterval() {
        clearInterval(this.state.timeInterval);

        let selectedShape

        if(this.props.shape.newShape.defaultViz) {
            selectedShape = this.props.shape.newShape
        } else {
            selectedShape = this.props.shape.currentShape
        }
        this.setState({
            originalBoldRate: selectedShape.defaultViz.shape.boldRate 
        })

		const timeInterval = setInterval(() => {
            this.setState({ 
                time: this.state.time + 100
             });

            //  let newShape = this.props.shape.currentShape.defaultViz.shape
            
            // console.log(selectedShape)
            if(selectedShape && selectedShape.defaultViz) {
                let finalshape = {
                    ...selectedShape,
                    defaultViz: {
                       ...selectedShape.defaultViz,
                       shape: {
                           ...selectedShape.defaultViz.shape,
                           step: selectedShape.defaultViz.shape.step + this.state.time / 10000000
                       }
                    }
                }
                this.props.loadNewShape(finalshape)
            }
             
		}, 1);

		this.setState({ timeInterval });
    }
    
    startZone4TimeInterval() {
        clearInterval(this.state.timeInterval);

        let selectedShape

        if(this.props.shape.newShape.defaultViz) {
            selectedShape = this.props.shape.newShape
        } else {
            selectedShape = this.props.shape.currentShape
        }
        this.setState({
            originalBoldRate: selectedShape.defaultViz.shape.boldRate 
        })

		const timeInterval = setInterval(() => {
            this.setState({ 
                time: this.state.time + 100
             });

            //  let newShape = this.props.shape.currentShape.defaultViz.shape
            
            // console.log(selectedShape)
            if(selectedShape && selectedShape.defaultViz) {
                let finalshape = {
                    ...selectedShape,
                    defaultViz: {
                       ...selectedShape.defaultViz,
                       shape: {
                           ...selectedShape.defaultViz.shape,
                           step: selectedShape.defaultViz.shape.step - this.state.time / 10000000
                       }
                    }
                }
                this.props.loadNewShape(finalshape)
            }
             
		}, 1);

		this.setState({ timeInterval });
    }
    
    startZone1TimeInterval() {
        clearInterval(this.state.timeInterval);

        let selectedShape

        if(this.props.shape.newShape.defaultViz) {
            selectedShape = this.props.shape.newShape
        } else {
            selectedShape = this.props.shape.currentShape
        }
        this.setState({
            originalBoldRate: selectedShape.defaultViz.shape.boldRate 
        })

		const timeInterval = setInterval(() => {
            this.setState({ 
                time: this.state.time + 100
             });

            //  let newShape = this.props.shape.currentShape.defaultViz.shape
            
            // console.log(selectedShape)
            if(selectedShape && selectedShape.defaultViz) {
                let finalshape = {
                    ...selectedShape,
                    defaultViz: {
                       ...selectedShape.defaultViz,
                       shape: {
                           ...selectedShape.defaultViz.shape,
                           frequency: selectedShape.defaultViz.shape.frequency + this.state.time / 1000000
                       }
                    }
                }
                this.props.loadNewShape(finalshape)
            }
             
		}, 1);

		this.setState({ timeInterval });
    }
    
    startZone2TimeInterval() {
        clearInterval(this.state.timeInterval);

        let selectedShape

        if(this.props.shape.newShape.defaultViz) {
            selectedShape = this.props.shape.newShape
        } else {
            selectedShape = this.props.shape.currentShape
        }
        this.setState({
            originalBoldRate: selectedShape.defaultViz.shape.boldRate 
        })

		const timeInterval = setInterval(() => {
            this.setState({ 
                time: this.state.time + 100
             });

            //  let newShape = this.props.shape.currentShape.defaultViz.shape
            
            // console.log(selectedShape)
            if(selectedShape && selectedShape.defaultViz) {
                let finalshape = {
                    ...selectedShape,
                    defaultViz: {
                       ...selectedShape.defaultViz,
                       shape: {
                           ...selectedShape.defaultViz.shape,
                           frequency: selectedShape.defaultViz.shape.frequency - this.state.time / 1000000
                       }
                    }
                }
                this.props.loadNewShape(finalshape)
            }
             
		}, 1);

		this.setState({ timeInterval });
    }
    
    startZone7TimeInterval() {
        clearInterval(this.state.timeInterval);

        let selectedShape

        if(this.props.shape.newShape.defaultViz) {
            selectedShape = this.props.shape.newShape
        } else {
            selectedShape = this.props.shape.currentShape
        }
        this.setState({
            originalBoldRate: selectedShape.defaultViz.shape.boldRate 
        })

		const timeInterval = setInterval(() => {
            this.setState({ 
                time: this.state.time + 100
             });

            //  let newShape = this.props.shape.currentShape.defaultViz.shape
            
            // console.log(selectedShape)
            if(selectedShape && selectedShape.defaultViz) {
                let finalshape = {
                    ...selectedShape,
                    defaultViz: {
                       ...selectedShape.defaultViz,
                       shape: {
                           ...selectedShape.defaultViz.shape,
                           rotateSpeed: selectedShape.defaultViz.shape.rotateSpeed  + this.state.time / 100000
                       }
                    }
                }
                this.props.loadNewShape(finalshape)
            }
             
		}, 1);

		this.setState({ timeInterval });
    }
    startZone8TimeInterval() {
        clearInterval(this.state.timeInterval);

        let selectedShape

        if(this.props.shape.newShape.defaultViz) {
            selectedShape = this.props.shape.newShape
        } else {
            selectedShape = this.props.shape.currentShape
        }
        this.setState({
            originalBoldRate: selectedShape.defaultViz.shape.boldRate 
        })

		const timeInterval = setInterval(() => {
            this.setState({ 
                time: this.state.time + 100
             });

            //  let newShape = this.props.shape.currentShape.defaultViz.shape
            
            // console.log(selectedShape)
            if(selectedShape && selectedShape.defaultViz) {
                let finalshape = {
                    ...selectedShape,
                    defaultViz: {
                       ...selectedShape.defaultViz,
                       shape: {
                           ...selectedShape.defaultViz.shape,
                           rotateSpeed: selectedShape.defaultViz.shape.rotateSpeed  - this.state.time / 100000
                       }
                    }
                }
                this.props.loadNewShape(finalshape)
            }
             
		}, 1);

		this.setState({ timeInterval });
    }

    // @keydown("r")
    boldRateMore(event) {
        console.log(moment().format())

        if(this.state.keys.r.active) {
     
            this.setState({ 
                keys: {
                    ...this.state.keys,
                    r: {
                        ...this.state.keys.r,
                        waiting: true
                    }
                }
            });

        } else {
            const timeInterval = setInterval(() => {
                this.setState({ 
                    keys: {
                        ...this.state.keys,
                        r: {
                            ...this.state.keys.r,
                            time: this.state.keys.r.time + 100,
                            waiting: true
                        }
                    }
                 });
    
                this.updateProperty("boldRate", this.state.keys.r.time / 100000)
                 
            }, 1);
    
            this.setState({
                keys: {
                    ...this.state.keys,
                    r: {
                        ...this.state.keys.r,
                        active: true,
                        interval: timeInterval,
                        waiting: true,
                    }
                }
            })

           
        }

        setTimeout(() => {
            if(this.state.keys.r.waiting) {
                clearInterval(this.state.keys.r.interval);
                this.setState({
                    keys: {
                        ...this.state.keys,
                        waiting: false,
                        active: false
                    }
                })
            }
        }, 1000)

        
    }

    // @keydown("r")
    // boldRateMore() {
    //     this.setState({
    //         boldRateMore: true
    //     })
        // this.updateProperty("boldRate", 0.5)
        // if(!this.state.touched) {
        //     this.setState({
        //         touched: true,
        //         activeZone: 8,
        //         desktop: true
        //     })
        //     this.startDesktopZone8TimeInterval()
        // }
    // }

    // @keydown("e")
    // rotateLess() {
    //     this.updateProperty("boldRate", -0.5)
    // }

    startDesktopZone8TimeInterval() {
        clearInterval(this.state.timeInterval);

		const timeInterval = setInterval(() => {
            this.setState({ 
                time: this.state.time + 100
             });


            this.updateProperty("boldRate", this.state.time / 100000)
             
		}, 1);

		this.setState({ timeInterval });
    }


    updateProperty(property, amount) {
        let selectedShape

        if(this.props.shape.newShape.defaultViz) {
            selectedShape = this.props.shape.newShape
        } else {
            selectedShape = this.props.shape.currentShape
        }
        this.setState({
            originalBoldRate: selectedShape.defaultViz.shape.boldRate 
        })

        // console.log(selectedShape)
        if(selectedShape && selectedShape.defaultViz) {
            let finalshape = {
                ...selectedShape,
                defaultViz: {
                    ...selectedShape.defaultViz,
                    shape: {
                        ...selectedShape.defaultViz.shape,
                        [property]: selectedShape.defaultViz.shape[property]  + amount
                    }
                }
            }
            this.props.loadNewShape(finalshape)
        }
    }

    checkIntervals () {
        // console.log("check intervals")
        // check active intervals

        // this.state.startedIntervals

        // this.props.app.activeKeys

        // let difference = _.difference(this.props.app.activeKeys, this.state.startedIntervals)
        // console.log("difference", difference)
        // console.log("aciveKeys", this.props.app.activeKeys)

        // check whether startedIntervals are in ActiveKeys

        // _.map(this.state.startedIntervals, (key) => {
        //     let startedItervalKey = _.findIndex(this.props.acitveKeys, key);
        // })

        _.map(this.props.app.activeKeys, (key) => {

            let startedItervalKey = _.includes(this.state.startedIntervals, key);
            // console.log("startedItervalKey", key, startedItervalKey)
            if(!startedItervalKey) {
                // console.log("start interval", key)
                this.setState({
                    startedIntervals: _.union(this.state.startedIntervals, [key])
                }, () => {
                    // console.log("startedIntervals", this.state.startedIntervals)
                    this.launchInterval(key, "start")
                })
            }
        })

        _.map(this.state.startedIntervals, (key) => {

            let startedItervalKey = _.includes(this.props.app.activeKeys, key);

            if(!startedItervalKey) {
                // console.log("stop interval", key)
                let newStartedIntervals = update(this.state.startedIntervals, {
                    $splice: [[this.state.startedIntervals[key], 1]] 
                })

                this.setState({
                    startedIntervals: newStartedIntervals
                }, () => {
                    // console.log("startedIntervals", this.state.startedIntervals)
                    this.launchInterval(key, "stop")
                })
            }
        })

        // start appropriate interval

        // stop approprite interval
    }

    launchInterval(key, action) {
        console.log(key, action)

        let includesShift = _.includes(this.props.app.activeKeys, 16) 

        if(key == 16) {
            if(_.includes(this.state.startedIntervals, 82)) {
                if(action == "start") {
                    this.runBoldRate(includesShift, action, "more")
                }
            } 

            if(_.includes(this.state.startedIntervals, 69)) {
                if(action == "start") {
                    this.runBoldRate(includesShift, action, "less")
                }
            } 
            
        }

        if(key == 82) {
            this.runBoldRate(includesShift, action, "more")
        }

        if(key == 69) {
            this.runBoldRate(includesShift, action, "less")
        }

    }

    runBoldRate (includesShift, action, direction) {
        if(action == "start") {
            if(direction == "more") {
                clearInterval(this.state.boldRateMore);
            }

            if(direction == "less") {
                clearInterval(this.state.boldRateLess);
            }

            let boldRateAmount

            if(includesShift) {
                boldRateAmount = 0.1
            } else {
                boldRateAmount = 0.01
            }

            if(direction == "less") {
                boldRateAmount = boldRateAmount * -1
            } 

            if(direction == "more") {
                const boldRateMore = setInterval(() => {
                    this.updateProperty("boldRate", boldRateAmount)
                }, 1);
        
                this.setState({ boldRateMore });
            } 

            if(direction == "less") {
                const boldRateLess = setInterval(() => {
                    this.updateProperty("boldRate", boldRateAmount)
                }, 1);
        
                this.setState({ boldRateLess });
            } 

        } else if (action == "stop") {
            let timeoutValue = 100
            
            if (includesShift) {
                timeoutValue = 150
            }

            if(direction == "more") {
                setTimeout(() => {
                    clearInterval(this.state.boldRateMore);
                }, timeoutValue)
            }

            if(direction == "less") {
                clearInterval(this.state.boldRateLess);
            }

        }
    }
    

	render() {
        
		return (
     		<div className="route-content home-route">
                {this.renderHead()}

                

                <div 
                    className="main-shape" 
                   
                >
                    <div className="touch-zones">
                        <div className="touch-zones-row touch-zones-row-1">

                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 2
                                }, "touch-zone touch-zone-2")}
                                onTouchStart={(event) => this.handleZone2TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone2TouchEnd(event)}
                            ></div>

                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 1
                                }, "touch-zone touch-zone-1")}
                                onTouchStart={(event) => this.handleZone1TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone1TouchEnd(event)}
                            ></div>
                           
                        </div>

                        <div className="touch-zones-row touch-zones-row-2">
                            
                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 4
                                }, "touch-zone touch-zone-4")}
                                onTouchStart={(event) => this.handleZone4TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone4TouchEnd(event)}
                            ></div>

                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 3
                                }, "touch-zone touch-zone-3")}
                                onTouchStart={(event) => this.handleZone3TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone3TouchEnd(event)}
                            ></div>
                        </div>

                        <div className="touch-zones-row touch-zones-row-3">
                            
                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 8
                                }, "touch-zone touch-zone-8")}
                                onTouchStart={(event) => this.handleZone8TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone8TouchEnd(event)}
                            ></div>

                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 7
                                }, "touch-zone touch-zone-7")}
                                onTouchStart={(event) => this.handleZone7TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone7TouchEnd(event)}
                            ></div>
                        </div>

                        <div className="touch-zones-row touch-zones-row-3">
                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 6
                                }, "touch-zone touch-zone-6")}
                                onTouchStart={(event) => this.handleZone6TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone6TouchEnd(event)}
                            ></div>

                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 5
                                }, "touch-zone touch-zone-5")}
                                onTouchStart={(event) => this.handleZone5TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone5TouchEnd(event)}
                            ></div>
                        </div>
                    </div>
                    <div className="headline-container">

                        {this.props.shape && this.props.shape.currentShape && this.props.shape.currentShape.metadata && <div>
                            <div className="headline-single-line">{this.props.shape.currentShape.metadata.title}</div>
                        </div>
                        }
                        {this.props.shape && this.props.shape.currentShape && this.props.shape.currentShape.metadata && this.props.shape.currentShape.metadata.title.length > 0 && <div className="underline"></div>}

                    </div>
                    {/* {this.state.touched ? <div className="touched">{this.state.time}</div> : ""} */}
                    <Viz />
                </div>
                
                <div className="main-settings" onClick={() =>  this.props.showDrawer("viz-settings")}>
                    <SettingsIcon />
                </div>
			</div>
				
		);
	}
}

function mapStateToProps(state) {
	return {
        shape: state.shape,
        app: state.app
	};
}


export default {
	component: withRouter(connect(mapStateToProps, {
        createShape, 
        loadShape, 
        searchShapes, 
        deleteShape, 
        updateShape,
        showDrawer,
        loadNewShape,
        clearNewShape,
        getMainShape
	})(HomePage))
}