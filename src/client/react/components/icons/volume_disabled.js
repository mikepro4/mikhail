import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class VolumeDisabled extends Component {
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
                        d="M16.07 5.115l-2.122 2.122-2.12-2.121-.708.707 2.121 2.121-2.12 2.121.706.707 2.121-2.12 2.122 2.12.707-.706-2.122-2.122 2.122-2.122-.707-.707z"
                    ></path>
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M7.027 0a1 1 0 00-.772.363L2.428 5H1a1 1 0 00-1 1v3.958a1 1 0 001 1h1.427l3.827 4.675a1 1 0 00.774.367h.082a1 1 0 001-1V1a1 1 0 00-1-1h-.083zm0 1h.083v14h-.082L3.2 10.325a1 1 0 00-.773-.367H1V6h1.428a1 1 0 00.771-.363L7.027 1z"
                        clipRule="evenodd"
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

export default connect(mapStateToProps, {})(VolumeDisabled);
