import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import { Icon, Button, Classes, Intent, Position, Toaster  } from "@blueprintjs/core";

import qs from "qs";
import * as _ from "lodash"

// import { 
//     updateCover,
//     updateCoverGradient,
//     updateProfile
// } from "../../../../redux/actions/profileActions"

import VizSettingsForm from "./viz_settings_form"

import {
    updateShape,
    loadShape,
    loadNewShape,
    createShape
} from "../../../../redux/actions/shapesActions"

class VizSettings extends Component {

    state = {
        loading: false
    }

    handleFormSubmit(data) {
        console.log(data)

        this.setState({
			loading: true
        })

        this.props.updateShape(this.props.shape, data, () => {
            this.props.hideDrawer()
            this.setState({
                loading: false
            })

            this.props.loadShape(this.getQueryParams().shape, (data) => {
                console.log(data)
            })
        })
    }

    getQueryParams = () => {
		return qs.parse(this.props.location.search.substring(1));
    };


	render() {
        let shape = this.props.newShape && this.props.newShape.defaultViz ? this.props.newShape.defaultViz.shape : this.props.shape.defaultViz.shape
        let point = this.props.newShape && this.props.newShape.defaultViz ? this.props.newShape.defaultViz.point : this.props.shape.defaultViz.point
        return (
            <div className={"app-drawer-content-container standard-drawer viz-settings-drawer theme-" + this.props.theme}>
                
                <div className={"details-container theme-" + this.props.theme}>
                    <div className="drawer-header">

                        <VizSettingsForm 
                            enableReinitialize="true"
                            initialValues={
                                {
                                    title: this.props.shape.metadata.title,
                                    shape: shape,
                                    point: point,
                                    main: this.props.shape.metadata.main
                                }
                            }
                            loading={this.state.loading}
                            onSubmit={this.handleFormSubmit.bind(this)}
                            theme={this.props.theme}
                            onChange={values => {
                                this.props.loadNewShape({
                                    defaultViz: {
                                        shape: values.shape,
                                        point: values.point
                                    }
                                })
                            }}
                        />


                    </div>

                    <Button 
                            className={"control button-update theme-"+ this.props.theme}
                            onClick={() =>  {

                                let user

                                if(this.props.user && this.props.user._id ) {
                                    user = this.props.user._id
                                } else {
                                    user = "anon"
                                }
                                this.props.createShape({
                                    metadata: {
                                        title: this.props.shape.metadata.title,
                                        createdBy: user
                                    },
                                    defaultViz: {
                                        shape: shape,
                                        point: point
                                    }
                                }, (data) => {
                                    console.log(data)
                                    this.props.history.push("/?shape="+data._id)
                                    this.props.hideDrawer()
                                })
                                }
                            }
                        >Save new</Button>
                </div>
            </div>

        )
 
		
	}
}

function mapStateToProps(state) {
	return {
        theme: state.app.theme,
        user: state.app.user,
        authenticated: state.auth.authenticated,
        shape: state.shape.currentShape,
        newShape: state.shape.newShape
	};
}

export default withRouter(connect(mapStateToProps, {
    updateShape,
    loadShape,
    loadNewShape,
    createShape
})(VizSettings));
