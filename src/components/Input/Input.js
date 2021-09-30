import { Component } from 'react';

class Input extends Component {
    render() {
      const { id, changeHandler, label, isRequired,  ...rest } = this.props;
      return (
        <div  className="field">
          <label>{label}</label>
          <input id={id} required={isRequired} onChange = {(e) => changeHandler(e.target.value)} {...rest} />
        </div>
      );
    }
}

export default Input;


