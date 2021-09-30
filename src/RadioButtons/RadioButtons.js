import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import './RadioButtons.css';

class RadioButtons extends Component {
  render() {
    return (
      <Panel backgroundColor="blue">
        <Button type="button" text="Apple" color="red"  clickHandler={(e) => alert(`In App, ${e.target.tagName } button was clicked`)} />
        <Button type="button" text="Pear" color="green" clickHandler={(e) => alert(`In App, ${e.target.tagName } button was clicked`)} />
        <Button type="button" text="Orange" color="yellow" clickHandler={(e) => alert(`In App, ${e.target.tagName } button was clicked`)} />
        <Button type="button" text="Rotten Tomato" color="red" isDisabled="true" clickHandler={ (e) => alert(`In App, ${e.target.tagName } button was clicked`)} />
      </Panel>
    );
  }
}

export default RadioButtons;