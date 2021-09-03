import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class SkipLeft extends Component {
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
                        d="M2 5.923L12.263.397a.5.5 0 01.737.44v12.326a.5.5 0 01-.737.44L2 8.077V13.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V.5A.5.5 0 01.5 0h1a.5.5 0 01.5.5v5.423z"
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

export default connect(mapStateToProps, {})(SkipLeft);
