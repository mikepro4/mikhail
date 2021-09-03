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
    loadShape
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
            return (
                <div className={"app-drawer-content-container standard-drawer viz-settings-drawer theme-" + this.props.theme}>
                   
                    <div className={"details-container theme-" + this.props.theme}>
                        <div className="drawer-header">
                            <div className="drawer-title">
                                Shape Settings
                            </div>

                            <Button 
                                minimal="true"
                                icon="cross"
                                className={"control button-close theme-"+ this.props.theme}
                                onClick={() =>  {
                                    this.props.hideDrawer()
                                    }
                                }
                            />

                            <VizSettingsForm 
                                enableReinitialize="true"
                                initialValues={
                                    {
                                        title: this.props.shape.metadata.title
                                    }
                                }
                                loading={this.state.loading}
                                onSubmit={this.handleFormSubmit.bind(this)}
                                theme={this.props.theme}
                            />


                        </div>
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
        shape: state.shape.currentShape
	};
}

export default withRouter(connect(mapStateToProps, {
    updateShape,
    loadShape
})(VizSettings));
