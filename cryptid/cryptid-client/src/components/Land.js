import React from 'react';
import cs from 'classnames';
import './Land.css';

const WTR = 'water';
const SWP = 'swamp';
const SND = 'sand';
const MTN = 'mountain';
const FRST = 'forest';
const BEAR = 'bear';
const CGR = 'cougar';
const animalBg = {
  [BEAR]: 'black',
  [CGR]: 'red',
}
const bg = {
  [WTR]: 'rgba(59, 126, 188, 0.8)',
  [SWP]: 'rgba(58, 25, 62, 0.9)',
  [SND]: 'rgba(245, 205, 16, 0.8)',
  [MTN]: 'rgba(136, 145, 135, 0.8)',
  [FRST]: 'rgba(44, 145, 55, 0.9)',
};

const Land = ({land, isTop, isRight, isStart}) => {
  const [hint, showHint] = React.useState(false);
  const landColor = typeof land === 'object' ? land.color : land;

  return (
    <div
      className={cs('container', {'container-right': isRight}, {'container-top': isTop})}
      onMouseEnter={() => { showHint(true); }}
      onMouseLeave={() => { showHint(false); }}
    >
      <svg width="100" height="87" viewBox="0 0 100 86.60254037844386">
        <path
          fill={bg[landColor]}
          d="M0 43.30127018922193L25 0L75 0L100 43.30127018922193L75 86.60254037844386L25 86.60254037844386Z"
        >
        </path>
      </svg>
      {land.animal && (
        <svg width="90" height="78" viewBox="0 0 90 77.94228634059948" className={cs('animal')}>
          <path
            strokeDasharray={land.animal === BEAR ? '9 9' : ''}
            strokeWidth={land.animal === BEAR ? '1px' : '2px'}
            fill="transparent"
            stroke={animalBg[land.animal]}
            d="M0 38.97114317029974L22.5 0L67.5 0L90 38.97114317029974L67.5 77.94228634059948L22.5 77.94228634059948Z"
          >
          </path>
        </svg>
      )}
      {hint && <div className={cs('guide', 'guide-one-step')} />}
      {hint && <div className={cs('guide', 'guide-three-steps')} />}
      {isStart && <div className={cs('mark')}>·</div>}
    </div>
  )
};

export default Land;
