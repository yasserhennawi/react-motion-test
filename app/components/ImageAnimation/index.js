import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { FormattedMessage } from 'react-intl';

const Image = styled.div`
  background: url(${ (props) => props.image });
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: ${ (props) => props.width}px;
  height: ${ (props) => props.height}px;
  left: ${ (props) => props.x}px;
  top: ${ (props) => props.y}px;
`

class ImageAnimation extends React.Component {


  render() {
    const {
      image,
      startingWidth,
      startingHeight,
      startingX,
      startingY,
      endingWidth,
      endingHeight,
      endingX,
      endingY,
    } = this.props;

    return (
      <Motion
        defaultStyle={{
          width: startingWidth,
          height: startingHeight,
          left: startingX,
          top: startingY,
        }}
        style={ {
          width: spring(endingWidth),
          height: spring(endingHeight),
          left: spring(endingX),
          top: spring(endingY),
        }}
      >
        {(style) => (
          <Image
            width={style.width}
            height={style.height}
            x={style.left}
            y={style.top}
            image={image}
          />
        )}
      </Motion>
    );
  }
}

ImageAnimation.propTypes = {
  image: React.PropTypes.string.isRequired,
  startingWidth: React.PropTypes.number.isRequired,
  startingHeight: React.PropTypes.number.isRequired,
  startingX: React.PropTypes.number.isRequired,
  startingY: React.PropTypes.number.isRequired,
  endingWidth: React.PropTypes.number.isRequired,
  endingHeight: React.PropTypes.number.isRequired,
  endingX: React.PropTypes.number.isRequired,
  endingY: React.PropTypes.number.isRequired,
}

export default ImageAnimation;
