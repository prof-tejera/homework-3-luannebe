import { Component } from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <form>
        <Input id="login-username" label="Username" type="text" isRequired={true} changeHandler={ (username) => console.log(username)} />
        <Input id="login-password" label="Password" type="password" isRequired={true} changeHandler={ (password) => console.log(password)} />
        <Button type="submit" className="btn btn-primary btn-full-width" text="Login" clickHandler={ () => console.log(`You clicked the button`)}/>
      </form>
    );
  }
}

export default LoginForm;
