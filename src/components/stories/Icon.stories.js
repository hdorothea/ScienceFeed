import React from 'react';

import { storiesOf } from '@storybook/react';
import Icon from '../Icon';
import { info } from '../../iconPaths';

storiesOf('Icon', module).add('renders', () => (
  <Icon paths={info} />
));
