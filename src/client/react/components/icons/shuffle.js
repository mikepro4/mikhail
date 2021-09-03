import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class Shuffle extends Component {
	render() {
		return (
			<div className="svg-wrapper">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="17"
                fill="none"
                viewBox="0 0 19 17"
                >
                <path
                    fill="#F9F9F9"
                    d="M13.751 2.945v1.424a.5.5 0 00.73.444l3.57-1.85a.5.5 0 00.016-.88L14.497.066a.5.5 0 00-.746.436v1.444h-.2a3.5 3.5 0 00-2.97 1.648l-5.096 8.174a2.5 2.5 0 01-2.121 1.178H0v1h3.364a3.5 3.5 0 002.97-1.649l5.095-8.174a2.5 2.5 0 012.122-1.177h.2zM6.334 3.591l.65 1.044-.589.945-.91-1.46a2.5 2.5 0 00-2.121-1.177H0v-1h3.364a3.5 3.5 0 012.97 1.648zM10.58 12.294l-.65-1.043.59-.945.91 1.46a2.5 2.5 0 002.12 1.177h.201V11.72a.5.5 0 01.73-.445l3.57 1.85a.5.5 0 01.016.88l-3.57 2.018a.5.5 0 01-.746-.435v-1.645h-.2a3.5 3.5 0 01-2.97-1.649z"
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

export default connect(mapStateToProps, {})(Shuffle);
