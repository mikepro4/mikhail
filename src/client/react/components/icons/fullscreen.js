import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class Fullscreen extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 18 18"
                    >
                    <path
                        fill="#fff"
                        d="M0 0h5v1H1v4H0V0zM0 14v4h5v-1H1v-3H0zM17 14v3h-4v1h5v-4h-1zM18 5V0h-5v1h4v4h1z"
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

export default connect(mapStateToProps, {})(Fullscreen);
