import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import { Icon, Button, Classes, Intent, Position, Toaster  } from "@blueprintjs/core";

import * as _ from "lodash"

class Followers extends Component {

    state = {
    }

	render() {
            return (
                <div className={"app-drawer-content-container standard-drawer viz-settings-drawer theme-" + this.props.theme}>
                   
                    <div className={"details-container theme-" + this.props.theme}>
                        <div className="drawer-header">
                            <div className="drawer-title">
                                Shape settings
                            </div>

                            <div className="placeholder">Settings</div>
                            
                        </div>
                    </div>
                </div>
    
            )
 
		
	}
}

function mapStateToProps(state) {
	return {
        theme: state.app.theme,
        authenticated: state.auth.authenticated
	};
}

export default withRouter(connect(mapStateToProps, {
})(Followers));
