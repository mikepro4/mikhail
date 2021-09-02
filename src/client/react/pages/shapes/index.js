import React, { Component, useCallback, useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Icon, Button, Classes, Intent  } from "@blueprintjs/core";

import { 
    createShape, loadShape, searchShapes, deleteShape, updateShape 
} from "../../../redux/actions/shapesActions"

import {
    updateCollection
} from "../../../redux/actions/appActions"

import ListResults  from "../../components/list"

class ShapesPage extends Component {

	componentDidMount() {
	}

	componentDidUpdate(prevprops) {
    }
    
    renderHead = () => (
		<Helmet>
			<title>Mikhail - Shapes</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
    )

	render() {

		return (
     		<div>
                 {this.renderHead()}
                    
                    Shapes

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

                    {this.props.user && <ListResults
                        type="user"
                        identifier={this.props.user._id}
                        resultType="shape"
                        searchCollection={this.props.searchShapes}
                    />}

                    
                    

               
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
        updateCollection
	})(ShapesPage))
}