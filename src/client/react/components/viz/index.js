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
        if(this.props.shape.defaultViz) {
            this.startViz()
        }
        window.addEventListener("resize", this.handleResize);

        
    }

	componentWillUnmount = () => {
		window.removeEventListener("resize", this.handleResize);
		window.cancelAnimationFrame(this.state.requestAnimationFrame);
    }
    
    handleResize = () => {
		this.updateDimensions()
    }

    componentDidUpdate = (prevprops) => {
        if(this.props.shape.currentShape ) {
            if(prevprops.shape.currentShape._id !== this.props.shape.currentShape._id) {
                this.startViz() 
            }
        }
	}

	startViz = () => {
		this.updateDimensions(this.updateViz)
    }

    
    updateDimensions = (callback) => {
        let rect = this.refs.viz_container.getBoundingClientRect();
        
        if(this.props.app.clientWidth > 1000) {
            this.setState({
                width: rect.width * 2,
                height: rect.height * 2,
                radius: (rect.width * 2) / 7,
                x: (rect.width * 2) / 2,
                y: (rect.height * 2) / 2
            }, () => {
                if(callback) {
                    callback()
                }
            })
        } else {

             this.setState({
                width: rect.width * 2,
                height: rect.height * 2,
                radius: (rect.width * 2) / 1.6,
                x: (rect.width * 2) / 2 + rect.width,
                y: (rect.height * 2) / 2 - rect.height / 1.5
            }, () => {
                if(callback) {
                    callback()
                }
            })

            // SAFE

            // this.setState({
            //     width: rect.width * 2,
            //     height: rect.height * 2,
            //     radius: (rect.width * 2) / 1.1,
            //     x: (rect.width * 2) / 2 + rect.width,
            //     y: (rect.height * 2) / 2 - rect.height / 2
            // }, () => {
            //     if(callback) {
            //         callback()
            //     }
            // })
        }

		
    }

    updateViz = (callback) => {
        let rect = this.refs.viz_container.getBoundingClientRect();
    
        let vizSource

        if (this.props.shape.newShape.defaultViz) {
            vizSource = 'newShape'
        } else {
            vizSource = 'currentShape'
        }

        const {
          rotateSpeed,
          friction,
          rotatePointSpeed,
          step,
          frequency,
          boldRate,
          math
        } = this.props.shape[vizSource].defaultViz.shape
    
        const {
          pointSize,
          pointOpacity,
          pointCount,
          pointColor
        } = this.props.shape[vizSource].defaultViz.point
    
        this.setState({
            rotate_speed: rotateSpeed * 0.1 + 0.001,
            friction: friction * 0.8 + 0.1,
            rotate_point_speed: rotatePointSpeed * 0.2 + 0.03,
            step: step * 0.5 + 0.0001,
            freq: frequency * 0.09 + 0.01,
            bold_rate: boldRate * 0.3 + 0.1,
            math: math,
            pointSize: pointSize,
            pointCount: pointCount,
            pointOpacity: pointOpacity,
            pointColor: "#ffffff",
            backgroundColor: "",
            backgroundEnabled: false,
            backgroundOpacity: 1
        }, () => {
                if(!this.state.requestAnimationFrame) {
                    this.paint()
                    console.log("Initial state: ", this.state)
                }
        })
    }

    paint = () => {
        let canvas = this.refs.canvas;
        let ctx = canvas.getContext('2d')
        ctx.width = this.state.width;
        ctx.height = this.state.height;
        this.update();
    }

    generatePoints = () => {
        let points = []
        for (var i = 0; i < this.state.pointCount; i++) {
          var pt = this.createPoint(
            Math.random(1) * this.state.width,
            Math.random(1) * this.state.height
          );
          points.push(pt)
        }
    
        return points
    }

    createPoint(x, y) {
        let point = {
          x: x,
          y: y,
          vx: 0,
          vy: 0
        }
        return point
    }

    update = () => {
		let points = this.generatePoints()
        this.renderFrame(this.refs.canvas.getContext('2d'), points)
        // setInterval(() => {
        //     this.setupSVGCanvas(points)
        // }, 1000)
    }

    renderOnce = (ctx, points) => {
		ctx.clearRect(0, 0, this.state.width, this.state.height);

        this.setState({
          rotate: this.state.rotate + this.state.rotate_speed
        })

        let freqData = []
        let soundModifier = 1

        // if(this.props.player.analyser) {
        // freqData = new Uint8Array(this.props.player.analyser.frequencyBinCount)
        // this.props.player.analyser.getByteFrequencyData(freqData)
        // }

        for (let i = 0; i < points.length; i++) {

            let point = points[i];

            let t_radius = this.calculateRadius(soundModifier, i)

            let tx = this.state.x + Math.cos(this.state.rotate + this.state.step * i) * t_radius;
            let ty = this.state.y + Math.sin(this.state.rotate + this.state.step * i) * t_radius;

            point.vx += (tx - point.x) * this.state.rotate_point_speed;
            point.vy += (ty - point.y) * this.state.rotate_point_speed;

            point.x += point.vx;
            point.y += point.vy;

            point.vx *= this.state.friction;
            point.vy *= this.state.friction;

            if (point.x >= 0 && point.x <= this.state.width && point.y >= 0 && point.y <= this.state.height) {
                ctx.beginPath();
                ctx.arc(point.x,point.y,this.state.pointSize,0,2*Math.PI);
                ctx.fillStyle = `rgba(
                    ${this.hexToRgb(this.state.pointColor).r},
                    ${this.hexToRgb(this.state.pointColor).g},
                    ${this.hexToRgb(this.state.pointColor).b},
                    ${this.getPointOpacity(freqData[this.getPointIterator(i)])}
                )`;
                ctx.fill();
            }
        }

    }

    hexToRgb = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    calculateRadius = (soundModifier, i) => {
        let radius = Math[this.state.math](this.state.rotate * soundModifier + this.state.freq * i) * this.state.radius * this.state.bold_rate +
                this.state.radius;

        return radius
    }

    getPointIterator = (i) => {
        if (i <= 1024) {
            return i
        } else {
            return i-1024
        }
    }

    getPointOpacity = (value) => {
        if(value > 0) {
            return value/256*10
        } else {
            return this.state.pointOpacity
        }
    }

    renderFrame = (ctx, points) => {
        this.renderOnce(ctx, points);
        this.setState({
            requestAnimationFrame: requestAnimationFrame(() => this.renderFrame(ctx, points))
        });
    }

    setupSVGCanvas = (points) => {
        var container = document.querySelector("#centered");
        var svgkitContext = new SVGCanvas(this.state.width,this.state.height);

        let element = document.getElementById("svgcanvas");
        if(element) {
            element.parentNode.removeChild(element);
        }
        svgkitContext.svg.svgElement.setAttribute("class", "example"); // just for styling
        svgkitContext.svg.svgElement.setAttribute("id", "svgcanvas");
        container.appendChild(svgkitContext.svg.svgElement);
        this.renderOnce(svgkitContext, points)
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
                <div id="centered" style={{display: "none"}}></div>
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		location: state.router.location,
        app: state.app,
        shape: state.shape,
        player: null
	};
}

export default connect(mapStateToProps, {

 })(Viz);
