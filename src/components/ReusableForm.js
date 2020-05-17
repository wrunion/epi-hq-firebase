import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div><label htmlFor="name">Names: 
        <input
          type='text'
          name='names'
          placeholder='Pair Names' /></label>
        </div>
        <div><label htmlFor="location">Location:         
        <input
          type='text'
          name='location'
          placeholder='Location'/></label>
        </div>
        <div><label>Issue: 
        <input
          type='text'
          name='issue'
          placeholder='Describe your issue.' /></label>
        </div>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;