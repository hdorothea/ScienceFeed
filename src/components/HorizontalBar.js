import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Div = styled.div`margin-left: ${props => (!props.first ? '10%' : 0)};`;

// A horizontal bar renders its children in a horizontal list
// covering 100% of the width of the containing div and with
// margins in between

export default function HorizontalBar(props) {
  return (
    <Hul>
      {React.Children.map(props.children, (Element, i) => <Div first={i === 0}>{Element}</Div>)}
    </Hul>
  );
}

HorizontalBar.propTypes = {
  children: PropTypes.array.isRequired,
};
