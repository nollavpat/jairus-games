import React from 'react';
import cn from 'classnames';
import Land from './Land';
import './Piece.css';

const Piece = ({piece, rotate}) => {
  return (
    <span className={cn('horizontal', {'rotate': rotate})}>
      {piece.map((area, areaIndex) => (
        <span
          key={areaIndex}
          className={cn('land')}
        >
          {area.map((land, landIndex) => (
            <Land
              land={land}
              key={land + landIndex}
              isTop={landIndex > 0}
              isRight={areaIndex > 0}
              isStart={landIndex === 0 && areaIndex === 0}
            />
          ))}
        </span>
      ))}
    </span>
  );
};

export default Piece;