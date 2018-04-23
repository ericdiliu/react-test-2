import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from "../actions";


class PostNew extends Component {
    renderField (field) {
        const formClassName = `form-control ${field.meta.touched && field.meta.error? 'is-invalid' : ''}`;

        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className={formClassName}
                    type={field.type}
                    {...field.input}
                />
                <div className="text-help invalid-feedback">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    submit = (values) => {
        this.props.createPost(values, ()=>{
            this.props.history.push('/');
        });

    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit)}>
                <Field label="Title" type="text" name="title" component={this.renderField}/>
                <Field label="Categories" type="text" name="categories" component={this.renderField}/>
                <Field label="Content" type="text" name="content" component={this.renderField}/>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-secondary" to="/">
                    Cancel
                </Link>
            </form>

        );
    }
}

const validate = (values) => {
    const errors = {};

    if(!values.title) {
        errors.title = "Enter a title";
    }

    if(!values.categories) {
        errors.categories = "Enter some categories";
    }

    if(!values.content) {
        errors.content = "Enter some content";
    }

    return errors;
};

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    connect(null, {createPost})(PostNew)
);