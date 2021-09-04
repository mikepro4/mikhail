import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import classNames from "classnames"

import qs from "qs";
import * as _ from "lodash"

import { 
    createShape, loadShape, searchShapes, deleteShape, updateShape, loadNewShape
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
        activeZone: null
	}

	componentDidMount() {
        if (this.props.location.search) {
            console.log(this.getQueryParams().shape)
            this.props.loadShape(this.getQueryParams().shape, (data) => {
                console.log(data)
            })
        }
	}

	componentDidUpdate(prevprops) {
        
    }

    getQueryParams = () => {
		return qs.parse(this.props.location.search.substring(1));
    };
    
    
    renderHead = () => (
		<Helmet>
			<title>Mikhail - Home</title>
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
                                    "touch-zone-active": this.state.activeZone == 1
                                }, "touch-zone touch-zone-1")}
                                onTouchStart={(event) => this.handleZone1TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone1TouchEnd(event)}
                            ></div>
                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 2
                                }, "touch-zone touch-zone-2")}
                                onTouchStart={(event) => this.handleZone2TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone2TouchEnd(event)}
                            ></div>
                        </div>

                        <div className="touch-zones-row touch-zones-row-2">
                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 3
                                }, "touch-zone touch-zone-3")}
                                onTouchStart={(event) => this.handleZone3TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone3TouchEnd(event)}
                            ></div>
                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 4
                                }, "touch-zone touch-zone-4")}
                                onTouchStart={(event) => this.handleZone4TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone4TouchEnd(event)}
                            ></div>
                        </div>

                        <div className="touch-zones-row touch-zones-row-3">
                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 5
                                }, "touch-zone touch-zone-5")}
                                onTouchStart={(event) => this.handleZone5TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone5TouchEnd(event)}
                            ></div>
                            <div 
                                className={classNames({
                                    "touch-zone-active": this.state.activeZone == 6
                                }, "touch-zone touch-zone-6")}
                                onTouchStart={(event) => this.handleZone6TouchStart(event)}
                                onTouchEnd={(event) => this.handleZone6TouchEnd(event)}
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
        shape: state.shape
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
        loadNewShape
	})(HomePage))
}