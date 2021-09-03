import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class SkipRight extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="14"
                    fill="none"
                    viewBox="0 0 13 14"
                    >
                    <path
                        fill="#fff"
                        d="M11 5.923L.737.397A.5.5 0 000 .837v12.326a.5.5 0 00.737.44L11 8.077V13.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v5.423z"
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

export default connect(mapStateToProps, {})(SkipRight);
