import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import popularView from './containers/popularView';
import filteredView from './containers/filteredView';

import Navigation from './components/navigation';
import Header from './components/header';

import { home, search, info } from './iconPaths';

class App extends Component {
  constructor() {
    super();
    this.searchPath = '/search';
    this.homePath = '/';
    this.infoPath = '/info';
  }

  render() {
    return (
      <div>
        <Header />
        <Navigation
          options={[
            { name: 'home', iconPath: home, path: this.homePath },
            { name: 'search', iconPath: search, path: this.searchPath },
            { name: 'info', iconPath: info, path: this.infoPath }
          ]}
        />
        <Route path={this.homePath} component={popularView} />
        <Route path={this.searchPath} component={filteredView} />
      </div>
    );
  }
}

export default App;
