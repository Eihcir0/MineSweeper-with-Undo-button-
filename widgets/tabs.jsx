import React from 'react';

class Tabs extends React.Component {
  constructor({ tabs }) {
    super();
    this.tabs = tabs;
    this.state = {selected: 0};
    // this.changePage = this.changePage.bind(this);
  }

  changePage(idx) {
    return () => {
      this.setState({ selected: idx });
    };
  }

  render() {
    let tabs = this.tabs.map((tab,idx) => (
      <li key={idx}
        className={ (idx === this.state.selected) ? 'bold' : '' }
        onClick={ this.changePage(idx) }>
        {tab.title}
      </li>
    ));

    return (
      <div>
        <header>
          <ul>
            {tabs}
          </ul>
        </header>
        <article>{this.tabs[this.state.selected].content}</article>
      </div>
    );
  }


}//end class

export default Tabs;
