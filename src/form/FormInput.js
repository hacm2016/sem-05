import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Form.css'

class FormInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
    this.onChange = this.onChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }
  onChange(e){
    this.setState({ inputValue: e.target.value });
  }
  getValue(){
    return this.state.inputValue;
  }
  render(){
    return(
      <div className="inputWithIcon" >
          <input type={ this.props.inputType }  variant="filled" 
           value={ this.state.inputValue }
           onChange= { this.onChange }
           required= { this.props.isRequired }
           
          />
    <i className={ this.props.inputClass } aria-hidden="true"></i>
      </div>
    );
  }
}

FormInput.propTypes = {
  inputType: PropTypes.string,
  isRequired: PropTypes.bool,
  inputClass: PropTypes.string
  
}

export default FormInput;
