import React from 'react';

const WTR = 'water';
const SWP = 'swamp';
const SND = 'sand';
const MTN = 'mountain';
const FRST = 'forest';

const bg = {
  [WTR]: 'rgba(59, 126, 188, 0.8)',
  [SWP]: 'rgba(58, 25, 62, 0.9)',
  [SND]: 'rgba(245, 205, 16, 0.8)',
  [MTN]: 'rgba(136, 145, 135, 0.8)',
  [FRST]: 'rgba(44, 145, 55, 0.9)',
};
const pieces = {
  '1': [[WTR, SWP, SWP], [WTR, SWP, SWP], [WTR, WTR, SND], [WTR, SND, SND], [FRST, FRST, SND], [FRST, FRST, FRST]],
  '2': [[SWP, SWP, SWP], [FRST, SWP, MTN], [FRST, FRST, MTN], [FRST, SND, MTN], [FRST, SND, MTN], [FRST, SND, SND]],
  '3': [[SWP, SWP, MTN], [SWP, SWP, MTN], [FRST, FRST, MTN], [FRST, MTN, MTN], [FRST, WTR, WTR], [WTR, WTR, WTR]],
  '4': [[SND, SND, SND], [SND, SND, SND], [MTN, MTN, SND], [MTN, WTR, FRST], [MTN, WTR, FRST], [MTN, WTR, FRST]],
  '5': [[SWP, SWP, SND], [SWP, SND, SND], [SWP  , SND, WTR], [MTN, WTR, WTR], [MTN, MTN, WTR], [MTN, MTN, WTR]],
  '6': [[SND, MTN, MTN], [SND, MTN, WTR], [SWP, SWP, WTR], [SWP, SWP, WTR], [SWP, FRST, WTR], [FRST, FRST, FRST]],
};

const Piece = ({piece, rotate}) => (
  <span style={{display: 'flex', flexDirection: 'row', transform: `rotateZ(${rotate || 0}deg)`}}>
    {piece.map((area, i) => (
      <span
        key={area + i}
        style={{display: 'flex', flexDirection: 'column', marginTop: `${i % 2 !== 0 ? '40px' : 0}`}}
      >
        {area.map((land, j) => (
          <button
            style={{width: '80px', height: '80px', background: bg[land], margin: '1px', fontSize: '28px', textShadow: '0 0 10px #fff'}}
          >
            {j === 0 && i === 0 ? '*' : ''}
          </button>
        ))}
      </span>
    ))}
  </span>
);

const Board = () => {
  const [r1, setR1] = React.useState(0);
  const [r2, setR2] = React.useState(0);
  const [r3, setR3] = React.useState(0);
  const [r4, setR4] = React.useState(0);
  const [r5, setR5] = React.useState(0);
  const [r6, setR6] = React.useState(0);
  const [pos1, setPos1] = React.useState(1);
  const [pos2, setPos2] = React.useState(2);
  const [pos3, setPos3] = React.useState(3);
  const [pos4, setPos4] = React.useState(4);
  const [pos5, setPos5] = React.useState(5);
  const [pos6, setPos6] = React.useState(6);

  return (
    <div style={{
      margin: '20px',
      display: 'flex'
    }}>
      <div>
        <div style={{display: 'flex'}}>
          <Piece rotate={r1} piece={pieces[pos1] || pieces['1']} />
          <Piece rotate={r2} piece={pieces[pos2] || pieces['1']}/>
        </div>
        <div style={{display: 'flex', marginTop: '-40px'}}>
          <Piece rotate={r3} piece={pieces[pos3] || pieces['1']} />
          <Piece rotate={r4} piece={pieces[pos4] || pieces['1']} />
        </div>
        <div style={{display: 'flex', marginTop: '-40px'}}>
          <Piece rotate={r5} piece={pieces[pos5] || pieces['1']} />
          <Piece rotate={r6} piece={pieces[pos6] || pieces['1']} />
        </div>
      </div>
      <div style={{marginLeft: '20px'}}>
        <div>
          <div style={{display: 'flex'}}>
            <span>
              <button onClick={() => {setR1(r1 + 180)}}>rotate</button>
              <input type="number" min="1" max="6" style={{width: '5em'}} value={pos1} onChange={(e) => {setPos1(e.target.value)}}/>
            </span>
            <span>
              <input type="number" min="1" max="6" style={{width: '5em'}} value={pos2} onChange={(e) => {setPos2(e.target.value)}}/>
              <button onClick={() => {setR2(r2 + 180)}}>rotate</button>
            </span>
          </div>
          <div style={{display: 'flex'}}>
            <span>
              <button onClick={() => {setR3(r3 + 180)}}>rotate</button>
              <input type="number" min="1" max="6" style={{width: '5em'}} value={pos3} onChange={(e) => {setPos3(e.target.value)}}/>
            </span>
            <span>
              <input type="number" min="1" max="6" style={{width: '5em'}} value={pos4} onChange={(e) => {setPos4(e.target.value)}}/>
              <button onClick={() => {setR4(r4 + 180)}}>rotate</button>
            </span>
          </div>
          <div style={{display: 'flex'}}>
            <span>
              <button onClick={() => {setR5(r5 + 180)}}>rotate</button>
              <input type="number" min="1" max="6" style={{width: '5em'}} value={pos5} onChange={(e) => {setPos5(e.target.value)}}/>
            </span>
            <span>
              <input tye="number" min="1" max="6" style={{width: '5em'}} value={pos6} onChange={(e) => {setPos6(e.target.value)}}/>
              <button onClick={() => {setR6(r6 + 180)}}>rotate</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
