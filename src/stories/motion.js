import React from 'react'
import { TransitionMotion, spring } from 'react-motion'
import { Button } from 'react-toolbox';

const stiffness = 170;
const damping = 25;

const options = { stiffness, damping };

const willLeave = () => ({
    scale: spring(100, options),
  });

  const willEnter = () => ({
    scale: spring(100, options)
  });

  const getStyles = () => ({
    scale: spring(0, options)
  });

const Transition = ({ children }) => (
  <TransitionMotion
    styles={[{ key: 'key', style: getStyles(), data: children }]}
    willLeave={willLeave}
    willEnter={willEnter}>
      {
        int =>
        <div>
          {
            int.map(
              ({ key, style, data }) => (
                <div key={`${key}-transition`} style={ {transform: `translate(-${style.scale}%)` }}>
                  {data}
                </div>
              )
            )
          }
        </div>
      }
  </TransitionMotion>
);




// Main container
export default class Container extends React.Component {
  state = {
    openCard: false
  };

  openCard = () => {
    this.setState({ openCard: !this.state.openCard })
  };

  render() {
    return (
      <div>
        <Transition>
          { this.state.openCard ? <div style={ { height: '200px', backgroundColor: 'blue' } }>Hello There</div> : <div style={ { height: '400px', backgroundColor: 'red' } }>Start</div> }
        </Transition>
        <Button label="spinn it" onClick={this.openCard} />
      </div>
    );
  }
}
