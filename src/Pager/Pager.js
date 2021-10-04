import { Component } from 'react';
import PageLink from 'components/PageLink/PageLink';
import './Pager.css';

class Pager extends Component {
  render() {
   const { numpages, siteurl,  ...rest } = this.props;
    const items = [];
    for ( let i = 1; i <= numpages; i++ ) {
      let item = <PageLink key={i} url={siteurl} text={i}  />;
      items.push(item);   
    }
    return (
      <ul className="pagination">
        {items}
      </ul>
    );
  }
}

export default Pager;
