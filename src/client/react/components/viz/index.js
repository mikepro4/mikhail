import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames"
import * as _ from "lodash";

class Viz extends Component {
	state = {
        width: 0,
        height: 0,
        radius: 0,
        rotate: 0,
        rotate_speed: 0,
        friction: 0,
        speed: 0,
        step: 0,
        freq: 0,
        bold_rate: 0,
        math: "sin",
        pointSize: 0,
        pointOpacity: 0,
        x: 0,
        y: 0
    };

	componentDidMount = () => {
        this.startViz()
        window.addEventListener("resize", this.handleResize);
    }

	componentWillUnmount = () => {
		window.removeEventListener("resize", this.handleResize);
		window.cancelAnimationFrame(this.state.requestAnimationFrame);
    }
    
    handleResize = () => {
		this.updateDimensions()
    }
    
    updateDimensions = (callback) => {
		let rect = this.refs.viz_container.getBoundingClientRect();

		this.setState({
            width: rect.width * 4,
            height: rect.height * 4,
            radius: (rect.width * 4) / 12,
            x: (rect.width * 4) / 2,
            y: (rect.height * 4) / 2
        }, () => {
            if(callback) {
                callback()
            }
        })
    }
    
    startViz = () => {
		this.updateDimensions(this.updateViz)
    }

	render() {
		return (
            <div 
                className={classNames({"full": this.props.app.fullScreen}, "viz-container")}
                ref="viz_container" 
                style={{
                    backgroundColor: this.state.backgroundColor
                }}
            >
                <canvas
                    ref="canvas"
                    className="viz"
                    id="viz"
                    width={this.state.width}
                    height={this.state.height}
                />
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		location: state.router.location,
        app: state.app,
        currentShape: state.shape.currentShape,
	};
}

export default connect(mapStateToProps, {

 })(Viz);
