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


    updateProperty(property, amount, destination, minValue, maxValue) {
        let selectedShape

        if(this.props.shape.newShape.defaultViz) {
            selectedShape = this.props.shape.newShape
        } else {
            selectedShape = this.props.shape.currentShape
        }

        // console.log(selectedShape)
        if(selectedShape && selectedShape.defaultViz) {
            let finalshape

            if(!destination || destination == "shape") {
                finalshape = {
                    ...selectedShape,
                    defaultViz: {
                        ...selectedShape.defaultViz,
                        shape: {
                            ...selectedShape.defaultViz.shape,
                            [property]: selectedShape.defaultViz.shape[property]  + amount
                        }
                    }
                }
            }

            if(destination == "point") {
                let finalAmount
                let pointAmount = selectedShape.defaultViz.point[property]  + amount

                if(maxValue) {
                    if(pointAmount < minValue) {
                        finalAmount = minValue
                    } else if(pointAmount > maxValue) {
                        finalAmount = maxValue
                    } else if(pointAmount >= minValue && pointAmount <= maxValue) {
                        finalAmount = pointAmount
                    }
                } else {
                    if(pointAmount < 0) {
                        finalAmount = 0
                    } else {
                        finalAmount = pointAmount
                    }
                }

                

                finalshape = {
                    ...selectedShape,
                    defaultViz: {
                        ...selectedShape.defaultViz,
                        point: {
                            ...selectedShape.defaultViz.point,
                            [property]: finalAmount
                        }
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
                this.launchInterval(key, "stop")

                let newStartedIntervals = update(this.state.startedIntervals, {
                    $splice: [[this.state.startedIntervals[key], 1]] 
                })

                this.setState({
                    startedIntervals: _.pull(this.state.startedIntervals, key)
                }, () => {
                    // console.log("startedIntervals", this.state.startedIntervals)
                })
            }
        })
    

        
        // start appropriate interval

        // stop approprite interval
    }

    launchInterval(key, action) {
        console.log(key, action)

        let changeValues = {
            boldRate: {
                standard: 0.01,
                extended: 0.1
            },
            rotateSpeed: {
                standard: 0.001,
                extended: 0.01
            },
            frequency: {
                standard: 0.00005,
                extended: 0.0001
            },
            step: {
                standard: 0.00001,
                extended: 0.0001
            },
            pointSize: {
                standard: 0.01,
                extended: 0.1
            },
            pointOpacity: {
                standard: 0.01,
                extended: 0.1,
                minValue: 0,
                maxValue: 1
            }
        }

        let includesShift = _.includes(this.props.app.activeKeys, 16) 

        if(key == 16) {

            // rotate speed
            if(_.includes(this.state.startedIntervals, 82)) {
                if(action == "start") {
                    this.runPropertyChange(includesShift, "start", "more", "rotateSpeed", changeValues.rotateSpeed.standard, changeValues.rotateSpeed.extended)
                } else if(action == "stop") {
                    this.runPropertyChange(false, "start", "more", "rotateSpeed", changeValues.rotateSpeed.standard, changeValues.rotateSpeed.extended)
                }
            } 

            if(_.includes(this.state.startedIntervals, 69)) {
                if(action == "start") {
                    this.runPropertyChange(includesShift, "start", "less", "rotateSpeed", changeValues.rotateSpeed.standard, changeValues.rotateSpeed.extended)
                } else if(action == "stop") {
                    this.runPropertyChange(false, "start", "less", "rotateSpeed", changeValues.rotateSpeed.standard, changeValues.rotateSpeed.extended)
                }
            } 

            // bold rate
            if(_.includes(this.state.startedIntervals, 66)) {
                if(action == "start") {
                    this.runPropertyChange(includesShift, "start", "more", "boldRate", changeValues.boldRate.standard, changeValues.boldRate.extended)
                } else if(action == "stop") {
                    this.runPropertyChange(false, "start", "more", "boldRate", changeValues.boldRate.standard, changeValues.boldRate.extended)
                }
            } 

            if(_.includes(this.state.startedIntervals, 86)) {
                if(action == "start") {
                    this.runPropertyChange(includesShift, "start", "less", "boldRate", changeValues.boldRate.standard, changeValues.boldRate.extended)
                } else if(action == "stop") {
                    this.runPropertyChange(false, "start", "less", "boldRate", changeValues.boldRate.standard, changeValues.boldRate.extended)
                }
            } 

            // frequency
            if(_.includes(this.state.startedIntervals, 70)) {
                if(action == "start") {
                    this.runPropertyChange(includesShift, "start", "more", "frequency", changeValues.frequency.standard, changeValues.frequency.extended)
                } else if(action == "stop") {
                    this.runPropertyChange(false, "start", "more", "frequency", changeValues.frequency.standard, changeValues.frequency.extended)
                }
            } 

            if(_.includes(this.state.startedIntervals, 86)) {
                if(action == "start") {
                    this.runPropertyChange(includesShift, "start", "less", "frequency", changeValues.frequency.standard, changeValues.frequency.extended)
                } else if(action == "stop") {
                    this.runPropertyChange(false, "start", "less", "frequency", changeValues.frequency.standard, changeValues.frequency.extended)
                }
            } 

            // step
            if(_.includes(this.state.startedIntervals, 83)) {
                if(action == "start") {
                    this.runPropertyChange(includesShift, "start", "more", "step", changeValues.step.standard, changeValues.step.extended)
                } else if(action == "stop") {
                    this.runPropertyChange(false, "start", "more", "step", changeValues.step.standard, changeValues.step.extended)
                }
            } 

            if(_.includes(this.state.startedIntervals, 65)) {
                if(action == "start") {
                    this.runPropertyChange(includesShift, "start", "less", "step", changeValues.step.standard, changeValues.step.extended)
                } else if(action == "stop") {
                    this.runPropertyChange(false, "start", "less", "step", changeValues.step.standard, changeValues.step.extended)
                }
            } 
            
        }

        if(key == 82) {
            this.runPropertyChange(includesShift, action, "more", "rotateSpeed", changeValues.rotateSpeed.standard, changeValues.rotateSpeed.extended)
        }

        if(key == 69) {
            this.runPropertyChange(includesShift, action, "less", "rotateSpeed", changeValues.rotateSpeed.standard, changeValues.rotateSpeed.extended)
        }

        if(key == 66) {
            this.runPropertyChange(includesShift, action, "more", "boldRate", changeValues.boldRate.standard, changeValues.boldRate.extended)
        }

        if(key == 86) {
            this.runPropertyChange(includesShift, action, "less", "boldRate", changeValues.boldRate.standard, changeValues.boldRate.extended)
        }

        if(key == 70) {
            this.runPropertyChange(includesShift, action, "more", "frequency", changeValues.frequency.standard, changeValues.frequency.extended)
        }

        if(key == 68) {
            this.runPropertyChange(includesShift, action, "less", "frequency", changeValues.frequency.standard, changeValues.frequency.extended)
        }

        if(key == 83) {
            this.runPropertyChange(includesShift, action, "more", "step", changeValues.step.standard, changeValues.step.extended)
        }

        if(key == 65) {
            this.runPropertyChange(includesShift, action, "less", "step", changeValues.step.standard, changeValues.step.extended)
        }

        if(key == 80) {
            this.runPropertyChange(includesShift, action, "more", "pointSize", changeValues.pointSize.standard, changeValues.pointSize.extended, "point")
        }

        if(key == 79) {
            this.runPropertyChange(includesShift, action, "less", "pointSize", changeValues.pointSize.standard, changeValues.pointSize.extended, "point")
        }

        if(key == 76) {
            this.runPropertyChange(includesShift, action, "more", "pointOpacity", changeValues.pointOpacity.standard, changeValues.pointOpacity.extended, "point", changeValues.pointOpacity.minValue, changeValues.pointOpacity.maxValue)
        }

        if(key == 75) {
            this.runPropertyChange(includesShift, action, "less", "pointOpacity", changeValues.pointOpacity.standard, changeValues.pointOpacity.extended, "point", changeValues.pointOpacity.minValue, changeValues.pointOpacity.maxValue)
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

            let amount

            if(includesShift) {
                amount = 0.1
            } else {
                amount = 0.01
            }

            if(direction == "less") {
                amount = amount * -1
            } 

            if(direction == "more") {
                const boldRateMore = setInterval(() => {
                    this.updateProperty("boldRate", amount)
                }, 1);
        
                this.setState({ boldRateMore });
            } 

            if(direction == "less") {
                const boldRateLess = setInterval(() => {
                    this.updateProperty("boldRate", amount)
                }, 1);
        
                this.setState({ boldRateLess });
            } 

        } else if (action == "stop") {
            let timeoutValue = 50
            
            if (includesShift) {
                timeoutValue = 100
            }

            if(direction == "more") {
                setTimeout(() => {
                    clearInterval(this.state.boldRateMore);
                }, timeoutValue)
            }

            if(direction == "less") {
                setTimeout(() => {
                    clearInterval(this.state.boldRateLess);
                }, timeoutValue)
            }

        }
    }

    runPropertyChange (includesShift, action, direction, property, standardAmount, extendedAmount, destination, minValue, maxValue) {
        if(action == "start") {
            if(direction == "more") {
                clearInterval(this.state[property+"More"]);
            }

            if(direction == "less") {
                clearInterval(this.state[property+"Less"]);
            }

            let amount

            if(includesShift) {
                amount = extendedAmount
            } else {
                amount = standardAmount
            }

            if(direction == "less") {
                amount = amount * -1
            } 

            if(direction == "more") {
                const intervalMore = setInterval(() => {
                    this.updateProperty(property, amount, destination, minValue, maxValue)
                }, 1);
        
                this.setState({ 
                    [property+"More"]: intervalMore 
                });
            } 

            if(direction == "less") {
                const intervalLess = setInterval(() => {
                    this.updateProperty(property, amount, destination, minValue, maxValue)
                }, 1);
        
                this.setState({ 
                    [property+"Less"]: intervalLess 
                });
            } 

        } else if (action == "stop") {
            let timeoutValue = 50
            
            if (includesShift) {
                timeoutValue = 100
            }

            if(direction == "more") {
                setTimeout(() => {
                    clearInterval(this.state[property+"More"]);
                }, timeoutValue)
            }

            if(direction == "less") {
                setTimeout(() => {
                    clearInterval(this.state[property+"Less"]);
                }, timeoutValue)
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