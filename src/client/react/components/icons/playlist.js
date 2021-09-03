import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class Playlist extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    fill="none"
                    viewBox="0 0 16 15"
                >
                    <path stroke="#fff" d="M0 14.5L16 14.5"></path>
                    <path stroke="#fff" d="M0 8.5L16 8.5"></path>
                    <path stroke="#fff" d="M7 2.5L16 2.5"></path>
                    <path fill="#fff" d="M0 5V0l4.286 2.5L0 5z"></path>
                </svg>
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps, {})(Playlist);
