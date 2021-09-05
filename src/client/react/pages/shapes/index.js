import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Icon, Button, Classes, Intent  } from "@blueprintjs/core";

import { 
    createShape, loadShape, searchShapes, deleteShape, updateShape 
} from "../../../redux/actions/shapesActions"

import {
    updateQueryString,
    updateCollection
} from "../../../redux/actions/appActions"

import ListResults  from "../../components/list"

import TabBar  from "../../components/tab_bar"

import qs from "qs";

import moment from 'moment'
import * as _ from "lodash"

class ShapesPage extends Component {

    state = {
        selectedTabId: "1",
        tabs: [
            "My shapes",
            "Recent",
            "Featrued"
        ],
    }

	componentDidMount() {
	}

	componentDidUpdate(prevprops, prevparams) {
        if (this.props.location.search) {
			if (prevparams.selectedTabId !== this.getQueryParams().selectedTabId) {
				this.setState({
					selectedTabId: this.getQueryParams().selectedTabId
				});
			}
        }
    }
    
    renderHead = () => (
		<Helmet>
			<title>Mikhail - Shapes</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
    )

    getQueryParams = () => {
		return qs.parse(this.props.location.search.substring(1));
    };

    handleTabChange = value => {
		this.setState({
			selectedTabId: value
		});

		this.props.updateQueryString(
			{ selectedTabId: value },
			this.props.location,
			this.props.history
        );

        if(this.props.totalScrolledPixels > document.getElementById("shape-tabs").offsetTop) {
            document.getElementById("body").scrollTop = document.getElementById("ticker-tabs").offsetTop - 110
        }
    };

    renderTab = () => {
		switch (this.state.selectedTabId) {
			case "1":
				return(
                    <div>
                        
                        <div>
                            {this.props.user && <ListResults
                                type="user"
                                identifier={this.props.user._id}
                                resultType="shape"
                                searchCollection={this.props.searchShapes}
                            />}
                        </div>

                        <Button 
                            minimal="true"
                            icon="plus"
                            text="Create"
                            className={"control theme-"+ this.props.theme}
                            onClick={() =>  {
                                this.props.createShape({
                                    metadata: {
                                        createdBy: this.props.user._id
                                    },
                                }, () => {
                                    this.props.updateCollection(true)
                                })
                                }
                            }

                        />
                    </div>
                    )
			case "2":
				return(
					<div className="placeholder">2</div>
				)
			case "3":
				return(
					<div className="placeholder">
                        {this.props.user ? (
                            <Button 
                            minimal="true"
                            icon="plus"
                            text="Create"
                            className={"control theme-"+ this.props.theme}
                            onClick={() =>  {
                                this.props.createShape({
                                    metadata: {
                                        title: "Untitled",
                                        createdBy: this.props.user._id
                                    },
                                }, () => {
                                    this.props.updateCollection(true)
                                })
                                }
                            }

                        />
                        ) : <div>Please login</div>}
                        
                    </div>
				)
			case "4":
				return(
					<div className="placeholder">4</div>
				)
			default:
				return ;
		}
    }
    

	render() {

		return (
     		<div>
                 {this.renderHead()}
                    
                    <div className="page-title">Shapes</div>

                    

                    <div id="shape-tabs">
                        <TabBar
                            tabs={this.state.tabs}
                            activeTab={this.state.selectedTabId}
                            onTabChange={(tab) => this.handleTabChange(tab)}
                            sticky={this.state.selectedTabId !== "1"}
                        />

                        {this.renderTab()}
                    </div>
               
			</div>
				
		);
	}
}

function mapStateToProps(state) {
	return {
        theme: state.app.theme,
        user: state.app.user
	};
}


export default {
	component: withRouter(connect(mapStateToProps, {
        createShape, 
        loadShape, 
        searchShapes, 
        deleteShape, 
        updateShape,
        updateCollection,
        updateQueryString
	})(ShapesPage))
}