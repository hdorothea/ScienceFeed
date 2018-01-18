import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import PopularView from './containers/popularView';
import FilteredView from './containers/filteredView';
import Info from './components/info';

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
        <Switch>
          <Route path={this.searchPath} component={FilteredView} />
          <Route path={this.infoPath} component={Info} />
          <Route path={this.homePath} component={PopularView} />
        </Switch>
      </div>
    );
  }
}

export default App;
