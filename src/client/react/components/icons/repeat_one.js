import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames"

class RepeatOne extends Component {
	render() {
		return (
			<div className="svg-wrapper">
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="17"
                fill="none"
                viewBox="0 0 21 17"
                >
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M20.055 5a5 5 0 11-10 0 5 5 0 0110 0zM15.81 8V2.4h-1.128v.544a.72.72 0 01-.112.408.347.347 0 01-.312.16h-.84v.952h.936a.889.889 0 00.304-.04V8h1.152z"
                    clipRule="evenodd"
                ></path>
                <path
                    fill="#fff"
                    d="M3.5 3.275h5.806a5.969 5.969 0 00-.208 1H3.5a2.5 2.5 0 00-2.5 2.5v4.089H0V6.775a3.5 3.5 0 013.5-3.5zM16.94 10.697a5.96 5.96 0 01-1 .238v.488a2.5 2.5 0 01-2.5 2.5H5.175v-1.382a.5.5 0 00-.746-.436l-3.57 2.018a.5.5 0 00.015.88l3.57 1.85a.5.5 0 00.73-.444v-1.486h8.266a3.5 3.5 0 003.5-3.5v-.726z"
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

export default connect(mapStateToProps, {})(RepeatOne);
