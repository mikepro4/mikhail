import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Icon, Button, Classes, Intent  } from "@blueprintjs/core";

import qs from "qs";

import moment from 'moment'
import * as _ from "lodash"

import { demoOn, demoOff } from "../../../../../redux/actions/appActions"

class HasanaLogo extends Component {

    state = {
    }

	componentDidMount() {
        console.log("mount")
        this.props.demoOn()
        document.body.classList.add("theme-hasana-logo");
    }
    
    componentWillUnmount() {
        console.log("unmount")
        document.body.classList.remove("theme-hasana-logo");
        // this.props.demoOff()
    }

    
    renderHead = () => (
		<Helmet>
			<title>Hasana Logo</title>
		</Helmet>
    )


	render() {

		return (
     		<div className="project-page">
                Hasana
            </div>
				
		);
	}
}

function mapStateToProps(state) {
	return {
        theme: state.app.theme,
        user: state.app.user,
        app: state.app
	};
}


export default {
	component: withRouter(connect(mapStateToProps, {
        demoOn,
        demoOff
	})(HasanaLogo))
}