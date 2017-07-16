/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import EntranceAnimation from '../../components/EntranceAnimation'
import GateAnimation from '../../components/GateAnimation'
import ImageAnimation from '../../components/ImageAnimation'

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        {/* <ImageAnimation
          image='https://s-media-cache-ak0.pinimg.com/736x/94/b7/1a/94b71aa88d1d8a0f08b7dc9b24cd7c93--aesthetics-planet.jpg'
          startingWidth={40}
          startingHeight={20}
          startingX={100}
          startingY={100}
          endingWidth={400}
          endingHeight={200}
          endingX={0}
          endingY={0}
        /> */}


        <GateAnimation>
        </GateAnimation>
        <div>
          sadflkjsdf
        </div>
      </div>
    );
  }
}
