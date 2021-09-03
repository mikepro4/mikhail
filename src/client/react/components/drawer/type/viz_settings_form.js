import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import classnames from "classnames";
import { Form } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Intent, Spinner } from "@blueprintjs/core";

import Input from "../../form/BladeInput";
import Textarea from "../../form/BladeTextarea";


class VizSettingsForm extends Component {
	render() {
		const { handleSubmit } = this.props;

		return (
            <Form onSubmit={handleSubmit} autoComplete="off">
                <div className="blade-input-group">
                    <Field
                        name="title"
                        component={Textarea}
                        placeholder="Type title..."
                        ref="title"
                        title="Title"
                    />
                </div>

                <Button
                    disabled={this.props.pristine}
                    className={"submit-button theme-" + this.props.theme}
                    loading={this.props.loading}
                    type="submit"
                    text="Update"
                    large="true"
                />
            </Form>
		);
	}
}

const validate = values => {
    const errors = {}

    if (values.username) {

    }

    return errors
  }

VizSettingsForm = reduxForm({
    form: 'vizSettings',
    validate
})(VizSettingsForm);

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {
})(VizSettingsForm);

  