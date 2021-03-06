import React, { ReactElement, useRef, useMemo, useState, useCallback, Component } from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import { Icon, Button, Classes, Intent, Position, Toaster } from "@blueprintjs/core";
import * as _ from "lodash"
import moment from "moment"
import {updateLocale } from "moment"

import Viz from "../../viz"


class shapeView extends Component {

    render() {
        return(
            <div className="shape-view">
               <div className="shape-title">
                   
                   {/* {this.props.item.metadata.title} {this.props.item.metadata.createdBy}  */}

               </div>
               <Link to={"/?shape=" + this.props.item._id}>
                <Viz 
                    defaultViz={this.props.item.defaultViz}
                />
               </Link>
            </div>
        )
        
    }
}

function mapStateToProps(state) {
    return {
        theme: state.app.theme,
        user: state.app.user,
        authenticated: state.auth.authenticated,
        clientWidth: state.app.clientWidth,
    };
}

export default withRouter(connect(mapStateToProps, {
})(shapeView));
