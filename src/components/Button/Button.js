import { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { type, text, clickHandler, color, size, isDisabled, ...rest } = this.props;
    return (
      <button 
        type={type} className={`btn ${color} ${size}`} disabled={isDisabled} onClick = { (e) => clickHandler( e ) } {...rest}  >{text}
      </button>
    )
  }
}

export default Button;