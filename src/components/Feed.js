import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  margin-top: ${props => (!props.first ? '10%' : 0)};
  width: 100%;
`;

const Ul = styled.ul`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// a feed renders its children one under another
export default function Feed(props) {
  const { width, height } = props;
  return (
    <Ul width={width} height={height}>
      {React.Children.map(props.children, (Element, i) => (
        <Div first={i === 0}>
          {Element}
        </Div>
      ))}
    </Ul>
  );
}

Feed.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Feed.defaultProps = {
  width: 'auto',
  height: 'auto',
};
