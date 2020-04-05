import React from 'react';
import Land from './Land';

const WTR = 'water';
const SWP = 'swamp';
const SND = 'sand';
const MTN = 'mountain';
const FRST = 'forest';
const ONE_STEP = '170px';
const THREE_STEPS = '500px';
const bg = {
  [WTR]: 'rgba(59, 126, 188, 0.8)',
  [SWP]: 'rgba(58, 25, 62, 0.9)',
  [SND]: 'rgba(245, 205, 16, 0.8)',
  [MTN]: 'rgba(136, 145, 135, 0.8)',
  [FRST]: 'rgba(44, 145, 55, 0.9)',
};

const Piece = ({piece, rotate}) => {
  return (
    <span style={{
      display: 'flex',
      flexDirection: 'row',
      transform: `rotateZ(${rotate || 0}deg)`,
    }}>
      {piece.map((area, i) => (
        <span
          key={area + i}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: `${i % 2 !== 0 ? '43px' : 0}`,
          }}
        >
          {area.map((land, j) => (
            <Land
              land={land}
              key={land + j}
              isTop={j > 0}
              isRight={i > 0}
            />
          ))}
        </span>
      ))}
    </span>
  );
};

export default Piece;