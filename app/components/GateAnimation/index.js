import React from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring } from 'react-motion';
import { FormattedMessage } from 'react-intl';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  ${'' /* min-height: 100vh; */}
  background-color: #EEE;
`

const Box = styled.div`
  height: 100vh;
  width: ${(props)=> props.width}%;
  opacity: ${(props)=> props.opacity};
  position: absolute;
  background-color: ${(props) => props.bgColor};
  z-index: 2;
  &:nth-child(2){
    align-self: flex-end;
  }
  border: 1px solid #FFF;
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
    z-index: 999;
    opacity: ${(props)=> props.opacity};
  }
`

const OpenButton = styled.div`
  z-index: 1;
  margin: 20px;
  border: 1px solid #000;
  position: absolute;
  color: #000;
  padding: 10px;
  background-color: #FFF;
  box-sizing: border-box;
  align-self: auto;

`

const colors = [
  '#212121',
  '#212121',
  '#fff',
]

export default class GateAnimation extends React.Component {

  closeGate() {
    this.setState({
      openGate: false
    })
  }

  openGate() {
    this.setState({
      openGate: true
    })
  }

  componentWillMount() {
    this.setState({
      openGate: false,
    })
    setTimeout(() => {
      this.setState({
        openGate: true
      })
    } , 500);
  }

  render() {

    return (
      <StaggeredMotion
        defaultStyles={[
          { width: 50, opacity: 0  },
          { width: 50, opacity: 0  },
          { width: 0 , opacity: 0 },
        ]}
        styles={ prevStyles => {
            return [
          {
            width: spring( this.state.openGate ? prevStyles[0].width * 0.5 : prevStyles[0].width < 45 ? prevStyles[0].width + 2  * 5 : 50),
            opacity: spring(1),
          },
          {
            width: spring( this.state.openGate ? prevStyles[1].width * 0.5 : prevStyles[1].width < 45 ? prevStyles[1].width + 2  * 5 : 50),
            opacity: spring(1),
          },
          {
            width: spring(100 - prevStyles[1].width), opacity:  prevStyles[1].width < 1 ? spring(1) : spring(0)
          },
            ]
        }}
      >
        { styles => (
          <Wrapper>
            <Box opacity={styles[0].opacity} bgColor={colors[0]} width={styles[0].width}/>
            <Box opacity={styles[1].opacity} bgColor={colors[1]} width={styles[1].width}/>
          </Wrapper>
        )}
      </StaggeredMotion>
    );
  }
}
