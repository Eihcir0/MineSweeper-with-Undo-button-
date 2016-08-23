import React from 'react';
import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';

class Widgets extends React.Component {
  constructor() {
    super();
    this.tabs = [
      { title: 'One', content: 'page One' },
      { title: 'Two', content: 'page Two' },
      { title: 'Three', content: 'page Three' }
    ];
  }

  render() {
    return (
      <div>
        <Clock />
        <Weather />
        <Tabs tabs={ this.tabs } />
      </div>
    );
  }


}//end class

export default Widgets;
