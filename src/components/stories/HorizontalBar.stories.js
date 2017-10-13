import React from 'react';

import { storiesOf } from '@storybook/react';
import Icon from '../Icon';
import { home, search, info } from '../../iconPaths';

import HorizontalBar from '../HorizontalBar';

storiesOf('HorizontalBar', module).add('renders', () => (
  <HorizontalBar>
    <Icon paths={home} />
    <Icon paths={search} />
    <Icon paths={info} />
  </HorizontalBar>
));
