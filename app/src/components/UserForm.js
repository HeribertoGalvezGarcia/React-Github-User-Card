import React from "react";
import {withFormik, Form, Field} from "formik";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 50px auto 0;
`;

const StyledField = styled(Field)`
  margin: 5px;
`;

const StyledSubmit = styled.input`
  margin: 5px;
`;

class UserForm extends React.Component {
  render() {
    return (
      <StyledForm>
        <StyledField type="text" name="username" placeholder="Enter username" />
        <StyledSubmit type="submit" disabled={this.props.isSubmitting} value="Submit" />
      </StyledForm>
    );
  }
}

const UserFormikForm = withFormik({
  mapPropsToValues: () => ({
    username: ""
  }),

  validate: values => {
    const errors = {};

    if (!values.username) {
      errors.name = 'Required';
    }

    return errors;
  },

  handleSubmit: ({username}, {setSubmitting, resetForm, props: {setUser}}) => {
    setUser(username);
    setSubmitting(false);
    resetForm();
  }
})(UserForm);

export default UserFormikForm;