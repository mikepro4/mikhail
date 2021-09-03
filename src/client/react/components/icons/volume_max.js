import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class VolumeMax extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    fill="none"
                    viewBox="0 0 17 16"
                    >
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M6.255.363A1 1 0 017.027 0h.083a1 1 0 011 1v14a1 1 0 01-1 1h-.082a1 1 0 01-.774-.367l-3.827-4.675H1a1 1 0 01-1-1V6a1 1 0 011-1h1.428L6.255.363zM7.11 1h-.083L3.199 5.637A1 1 0 012.428 6H1v3.958h1.427a1 1 0 01.773.367L7.028 15h.082V1z"
                        clipRule="evenodd"
                    ></path>
                    <path
                        fill="#fff"
                        d="M11.38 12.03a6.475 6.475 0 001.608-4.279 6.472 6.472 0 00-1.3-3.901l-.76.655a5.475 5.475 0 011.06 3.246 5.48 5.48 0 01-1.401 3.667l.793.613zM14.172 14.186l-.791-.612a9.79 9.79 0 001.911-5.826c0-2.055-.63-3.962-1.707-5.54l.76-.657a10.783 10.783 0 011.947 6.197c0 2.41-.788 4.638-2.12 6.438z"
                    ></path>
                    </svg>
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps, {})(VolumeMax);
