import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ParentDiv = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const TextDiv = styled.div`
  max-width: 100%;
  max-height: 25%;
  position: absolute;
  overflow: hidden;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  bottom: 0;
  left: 0;
`;

// a thumbnail is an image with text on the bottom
export default function Thumbnail(props) {
  const { imgSrc, text, imgDescription, width, height, fontSize, fontFamily, color } = props;
  return (
    <ParentDiv width={width} height={height}>
      <Img src={imgSrc} alt={imgDescription} />
      <TextDiv fontSize={fontSize} fontFamily={fontFamily} color={color}>
        {' '}
        {text}{' '}
      </TextDiv>
    </ParentDiv>
  );
}

Thumbnail.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgDescription: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  color: PropTypes.string,
};

Thumbnail.defaultProps = {
  width: 'auto',
  height: 'auto',
  fontSize: 'initial',
  fontFamily: 'initial',
  color: 'initial',
};
