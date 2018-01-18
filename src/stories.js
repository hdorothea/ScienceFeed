import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import Card from './components/common/card';
import ContentCard from './components/contentCard';
import ArticleFeed from './components/articleFeed';
import Icon from './components/icon';
import Navigation from './components/navigation';

import { home, search, info } from './iconPaths';

storiesOf('Card', module).add('renders', () => (
  <div>
    <Card>
      <span> Some text </span>
    </Card>
  </div>
));

storiesOf('ContentCard', module).add('renders', () => (
  <ContentCard
    headerText="Crazy big lobster found"
    mainText="A crazy big lobster was found sunday afternoon in the sierra nevade blalllldl"
    imgUrl="https://pbs.twimg.com/media/DTv_XuuWkAAsi-p.jpg"
  />
));

storiesOf('ArticleFeed', module).add('renders', () => {
  const articles = [
    {
      title: 'Crazy big lobster found',
      abstract: 'A crazy big lobster was found sunday afternoon in the sierra nevade blalllldl',
      headerImg: 'https://pbs.twimg.com/media/DTv_XuuWkAAsi-p.jpg'
    },
    {
      title: 'Another Crazy big lobster was found',
      abstract:
        'Another crazy big lobster was found sunday afternoon in the sierra nevade blalllldl',
      headerImg: 'https://pbs.twimg.com/media/DTTtR3UU8AEaoIR.jpg:large'
    }
  ];
  return <ArticleFeed style={{ width: '200px' }} articles={articles} />;
});

storiesOf('Icon', module).add('renders', () => <Icon color="grey" paths={home} />);

storiesOf('Navigation', module)
  .add('renders without links', () => (
    <Navigation
      options={[
        { name: 'home', iconPath: home },
        { name: 'search', iconPath: search },
        { name: 'info', iconPath: info }
      ]}
    />
  ))
  .addDecorator(StoryRouter())
  .add('works with links', () => (
    <Navigation
      options={[
        { name: 'home', path: '/', iconPath: home },
        { name: 'search', path: '/search', iconPath: search },
        { name: 'info', path: '/info', iconPath: info }
      ]}
    />
  ));
