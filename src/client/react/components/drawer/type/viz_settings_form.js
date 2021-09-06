import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import classnames from "classnames";
import { Form } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Intent, Spinner } from "@blueprintjs/core";

// import Input from "../../form/BladeInput";
import Textarea from "../../form/BladeTextarea";
import Slider from "../../form/Slider";
import TabGroup from "../../form/TabGroup";
import Checkbox from "../../form/Checkbox";


class VizSettingsForm extends Component {
	render() {
        const { handleSubmit } = this.props;
        
        let mathTabOptions = [
			{
				value: "sin",
				name: "Sin"
			},
			{
				value: "cos",
				name: "Cos"
			},
			{
				value: "tan",
				name: "Tan"
			},
			{
				value: "atan",
				name: "Atan"
			},
			{
				value: "log",
				name: "Log"
			}
		]

		return (
            <Form onSubmit={handleSubmit} autoComplete="off">

                <Field
                    name="shape.math"
                    component={TabGroup}
                    tabOptions={mathTabOptions}
                    label="Math"
                    sliderMax={20}
                />

                <Field
                    name="shape.boldRate"
                    component={Slider}
                    label="Bold rate"
                    sliderMax={20}
                />

                <Field
                    name="shape.step"
                    component={Slider}
                    label="step"
                    sliderMax={20}
                />

                <Field
                    name="shape.rotateSpeed"
                    component={Slider}
                    label="rotateSpeed"
                    sliderMax={5}
                />

                <Field
                    name="shape.frequency"
                    component={Slider}
                    label="frequency"
                    sliderMax={20}
                />

                <Field
                    name="shape.friction"
                    component={Slider}
                    label="friction"
                    sliderMax={1}
                />

                <Field
                    name="shape.rotatePointSpeed"
                    component={Slider}
                    label="rotatePointSpeed"
                    sliderMax={10}
                />

                <Field
                    name="point.pointSize"
                    component={Slider}
                    label="pointSize"
                    sliderMax={20}
                />

                <Field
                    name="point.pointOpacity"
                    component={Slider}
                    label="pointOpacity"
                    sliderMax={1}
                />

                <div className="blade-input-group">
                    <Field
                        name="title"
                        component={Textarea}
                        placeholder="Type title..."
                        ref="title"
                        title="Title"
                    />
                </div>

                <Field
                    name="main"
                    type="checkbox"
                    component={Checkbox}
                    label="Main"
                    inline={true}
                />

                {this.props.user &&  <Button
                    className={"submit-button theme-" + this.props.theme}
                    loading={this.props.loading}
                    type="submit"
                    text="Update"
                    large="true"
                />}

               
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
    user: state.app.user
});

export default connect(mapStateToProps, {
})(VizSettingsForm);

  