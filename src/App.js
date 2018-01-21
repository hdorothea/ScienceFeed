import React, { Component } from 'react';

import Radium from 'radium';
import { Route, Switch } from 'react-router-dom';

import PopularView from './containers/popularView';
import FilteredView from './containers/filteredView';
import Info from './components/info';

import Navigation from './components/navigation';
import Header from './components/header';

import { contentMaxWidth, contentWidth } from './styleConsts';
import { home, search, info } from './iconPaths';

const styles = {
  fixed: {
    borderBottom: '1px solid gainsboro',
    width: '100%',
    marginBottom: '1rem'
  },
  content: {
    width: '95%',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

class App extends Component {
  constructor() {
    super();
    this.searchPath = '/search';
    this.homePath = '/';
    this.infoPath = '/info';
  }

  render() {
    return (
      <div style={styles.app}>
        <div style={styles.fixed}>
          <div style={styles.content}>
            <Header />
            <Navigation
              options={[
                { name: 'home', iconPath: home, path: this.homePath },
                { name: 'search', iconPath: search, path: this.searchPath },
                { name: 'info', iconPath: info, path: this.infoPath }
              ]}
            />
          </div>
        </div>
        <div style={styles.content}>
          <Switch>
            <Route path={this.searchPath} component={FilteredView} />
            <Route path={this.infoPath} component={Info} />
            <Route path={this.homePath} component={PopularView} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Radium(App);
