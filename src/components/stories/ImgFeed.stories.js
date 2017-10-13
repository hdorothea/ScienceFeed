import React from 'react';

import { storiesOf } from '@storybook/react';

import ImgFeed from '../ImgFeed';

export default storiesOf('ImgFeed', module).add('renders', () => (
  <ImgFeed
    imgSrcs={[
      'https://d3nevzfk7ii3be.cloudfront.net/igi/NU5mrvIoyFDFuSFH',
      'https://d3nevzfk7ii3be.cloudfront.net/igi/baGSWoqAItOfDGuk',
    ]}
    imgDescriptions={['descriptive Image', 'descriptive Image']}
  />
));
