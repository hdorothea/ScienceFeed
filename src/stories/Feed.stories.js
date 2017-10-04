import React from 'react';

import { storiesOf } from '@storybook/react';

import Feed from '../components/Feed';
import { Img } from '../components/ImgFeed';

export default storiesOf('Feed', module).add('with images and text', () => (
  <Feed width="100px">
    <div>
      <div> First Image and stuff and whatever and so on...</div>
      <Img src="https://d3nevzfk7ii3be.cloudfront.net/igi/NU5mrvIoyFDFuSFH" alt="something" />
    </div>
    <div>
      <div> Second Image and stuff and whatever and so on...</div>
      <Img
        src="https://d3nevzfk7ii3be.cloudfront.net/igi/baGSWoqAItOfDGuk"
        alt="something else altogether"
      />
    </div>
  </Feed>
));
