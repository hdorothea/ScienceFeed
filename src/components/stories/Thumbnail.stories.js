import React from 'react';

import { storiesOf } from '@storybook/react';

import Thumbnail from '../Thumbnail';

export default storiesOf('Thumbnail', module).add('renders', () => (
  <Thumbnail
    width="500px"
    imgSrc="https://d3nevzfk7ii3be.cloudfront.net/igi/NU5mrvIoyFDFuSFH"
    text="To fix this open up the first corner divide it in half jump over turn left. It might work now."
    imgDescription="descriptive Image"
    color="white"
    fontFamily="sans"
    fontSize="1em"
  />
));
