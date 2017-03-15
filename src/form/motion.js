import React from 'react'
import { TransitionMotion, spring } from 'react-motion'

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

export default Transition;
