import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class VolumeMin extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="16"
                    fill="none"
                    viewBox="0 0 13 16"
                    >
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M7.027 0a1 1 0 00-.772.363L2.428 5H1a1 1 0 00-1 1v3.958a1 1 0 001 1h1.427l3.827 4.675a1 1 0 00.774.367h.082a1 1 0 001-1V1a1 1 0 00-1-1h-.083zm0 1h.083v14h-.082L3.2 10.325a1 1 0 00-.773-.367H1V6h1.428a1 1 0 00.771-.363L7.027 1z"
                        clipRule="evenodd"
                    ></path>
                    <path
                        fill="#fff"
                        d="M12.987 7.751c0 1.64-.607 3.136-1.608 4.28l-.793-.613a5.48 5.48 0 001.4-3.667 5.475 5.475 0 00-1.059-3.246l.76-.655a6.472 6.472 0 011.3 3.901z"
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

export default connect(mapStateToProps, {})(VolumeMin);
