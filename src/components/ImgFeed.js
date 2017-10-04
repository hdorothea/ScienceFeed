import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Feed from './Feed';

export const Img = styled.img`
  width: 90%;
`;

// an image feed given image links and descriptions renders them one under another
export default function ImgFeed(props) {
  const { imgSrcs, imgDescriptions } = props;
  return (
    <Feed>
      {imgSrcs.map((imgSrc, i) => (
        <Img src={imgSrcs[i]} alt={imgDescriptions[i]} />
      ))}
    </Feed>
  );
}


ImgFeed.propTypes = {
  imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
  imgDescriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
