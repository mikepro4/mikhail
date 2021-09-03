import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import qs from "qs";
import * as _ from "lodash"

import { 
    createShape, loadShape, searchShapes, deleteShape, updateShape 
} from "../../../redux/actions/shapesActions"

import Viz from "../../components/viz"

import SettingsIcon from "../../components/icons/settings"


class HomePage extends Component {

	componentDidMount() {
        if (this.props.location.search) {
            console.log(this.getQueryParams().shape)
            this.props.loadShape(this.getQueryParams().shape, (data) => {
                console.log(data)
            })
        }
	}

	componentDidUpdate(prevprops) {
        
    }

    getQueryParams = () => {
		return qs.parse(this.props.location.search.substring(1));
    };
    
    
    renderHead = () => (
		<Helmet>
			<title>Mikhail - Home</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
    )

	render() {

		return (
     		<div className="route-content home-route">
                {this.renderHead()}

                <div className="headline-container">
                    <div className="headline-single-line">Design, Tech</div>
                    <div className="headline-single-line">& Techno</div>
                    <div className="underline"></div>
                </div>

                <div className="main-shape">
                    <Viz />
                </div>
                
                <div className="main-settings">
                    <SettingsIcon />
                </div>
			</div>
				
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}


export default {
	component: withRouter(connect(mapStateToProps, {
        createShape, 
        loadShape, 
        searchShapes, 
        deleteShape, 
        updateShape
	})(HomePage))
}