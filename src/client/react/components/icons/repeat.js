import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class Repeat extends Component {
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
                    d="M11.806 4.724v-1.45H3.5a2.5 2.5 0 00-2.5 2.5v4.089H0V5.775a3.5 3.5 0 013.5-3.5h8.306V.856a.5.5 0 01.746-.435l3.57 2.018a.5.5 0 01-.016.88l-3.57 1.85a.5.5 0 01-.73-.445zM15.938 10.423a2.5 2.5 0 01-2.5 2.5H5.175V11.54a.5.5 0 00-.746-.435l-3.57 2.018a.5.5 0 00.015.879l3.57 1.85a.5.5 0 00.73-.444v-1.485h8.264a3.5 3.5 0 003.5-3.5V6.335h-1v4.088z"
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

export default connect(mapStateToProps, {})(Repeat);
