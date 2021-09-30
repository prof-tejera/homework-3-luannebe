import { Component } from 'react';

class PageLink extends Component {
  render() {
    const { url, text,  ...rest } = this.props;
    return (
      <li className="page-item">
        <a href={url}>{text}</a>
      </li> 
    );
  }
}

export default PageLink;


