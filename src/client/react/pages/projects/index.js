import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Icon, Button, Classes, Intent  } from "@blueprintjs/core";

import qs from "qs";

import moment from 'moment'
import * as _ from "lodash"

class Projects extends Component {

    state = {
    }

	componentDidMount() {
	}

	componentDidUpdate(prevprops, prevparams) {
    }
    
    renderHead = () => (
		<Helmet>
			<title>Projects</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
    )


	render() {

		return (
     		<div className="page-content-container">
                 {this.renderHead()}
                    
                    <div className="page-title">Projects</div>

                    <div className="projects-container">

                        <ul>
                            <li>
                                <Link to="/projects/hasana/logo">Hasana Logo</Link>
                            </li>

                            <li>
                                <Link to="/projects/hasana/home">Hasana Home</Link>
                            </li>

                        </ul>
                    </div>
               
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
	})(Projects))
}