import React from 'react';

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

const Land = ({land, isTop, isRight}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: `${isRight ? '-23px' : 0}`,
      marginTop: `${isTop ? '1px' : 0}`,
    }}
  >
    <svg width="100" height="87" viewBox="0 0 100 86.60254037844386">
      <path fill={bg[land]} d="M0 43.30127018922193L25 0L75 0L100 43.30127018922193L75 86.60254037844386L25 86.60254037844386Z"></path>
    </svg>
    {/* {(j === 0 && i === 0) && (
      <div
        style={{position: 'absolute', border: '1px solid red', borderRadius: '10em', width: ONE_STEP, height: ONE_STEP, background: 'rgba(0, 0, 0, 0.1)'}}
      />
    )} */}
    {/* {(j === 0 && i === 0) && (
      <div
        style={{position: 'absolute', border: '1px solid blue', borderRadius: '20em', width: THREE_STEPS, height: THREE_STEPS, background: 'rgba(0, 0, 0, 0.1)', zIndex: '-1'}}
      />
    )}
    {(j === 0 && i === 0) && (<div
      style={{position: 'absolute', fontSize: '28px', textShadow: '0 0 10px #fff', zIndex: '-1'}}
    >
      *
    </div>)} */}
  </div>
);

export default Land;
