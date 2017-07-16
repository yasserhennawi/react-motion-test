import React from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring } from 'react-motion';
import { FormattedMessage } from 'react-intl';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: #EEE;
  & *:nth-child(even){
    align-self: flex-end;
  }
`

const Box = styled.div`
  height: 100vh;
  width: ${(props)=> props.width}%;
  opacity: 0.7;
  position: absolute;
  background-color: ${(props) => props.bgColor};
  ${'' /* border: 1px solid #FFF; */}
`

const ContentWrapper = styled.div`
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  font-size: 40px;
  width: 100%;
  overflow-x: hidden;
  flex-basis: ${(props)=> props.width}%;
  background-color: ${(props) => props.bgColor};
  & * {
    opacity: ${(props)=> props.opacity};
  }
`

const colors = [
  '#5e35b1',
  'red',
  'green',
  '#0288d1',
  '#ffff00',
]

export default class EnhanceAnimation extends React.Component {

  render() {

    return (
        <StaggeredMotion
          defaultStyles={[
            { width: 100 },
            { width: 100 },
            { width: 100 },
            { width: 100 },
            { width: 0 , opacity: 0 },
          ]}
          styles={ prevStyles => [
            { width: spring(0) },
            { width: spring(prevStyles[0].width) },
            { width: spring(prevStyles[1].width) },
            { width: spring(prevStyles[2].width) },
            { width: spring(100 - prevStyles[2].width), opacity:  prevStyles[2].width < 1 ? spring(1) : 0 },
          ]}
        >
          { styles => (
            <Wrapper>
              <Box bgColor={colors[0]} width={styles[0].width}/>
              <Box bgColor={colors[1]} width={styles[1].width}/>
              <Box bgColor={colors[2]} width={styles[2].width}/>
              <Box bgColor={colors[3]} width={styles[3].width}/>
              <ContentWrapper width={styles[4].width} bgColor={colors[4]} opacity={styles[4].opacity}>
                {this.props.children}
              </ContentWrapper>
            </Wrapper>
          )}
        </StaggeredMotion>
    );
  }
}
