import React from 'react';
import Piece from './Piece';

const WTR = 'water';
const SWP = 'swamp';
const SND = 'sand';
const MTN = 'mountain';
const FRST = 'forest';
const BEAR = 'bear';
const CGR = 'cougar';
const territory = (land, animal) => ({animal, color: land});
const pieces = {
  '1': [[WTR, SWP, SWP], [WTR, SWP, SWP], [WTR, WTR, SND], [WTR, SND, territory(SND, BEAR)], [FRST, FRST, territory(SND, BEAR)], [FRST, FRST, FRST]],
  '2': [[territory(SWP, CGR), SWP, SWP], [territory(FRST, CGR), SWP, MTN], [territory(FRST, CGR), FRST, MTN], [FRST, SND, MTN], [FRST, SND, MTN], [FRST, SND, SND]],
  '3': [[SWP, territory(SWP, CGR), territory(MTN, CGR)], [SWP, territory(SWP, CGR), MTN], [FRST, FRST, MTN], [FRST, MTN, MTN], [FRST, WTR, WTR], [WTR, WTR, WTR]],
  '4': [[SND, SND, SND], [SND, SND, SND], [MTN, MTN, SND], [MTN, WTR, FRST], [MTN, WTR, FRST], [MTN, territory(WTR, CGR), territory(FRST, CGR)]],
  '5': [[SWP, SWP, SND], [SWP, SND, SND], [SWP  , SND, WTR], [MTN, WTR, WTR], [MTN, MTN, territory(WTR, BEAR)], [MTN, territory(MTN, BEAR), territory(WTR, BEAR)]],
  '6': [[territory(SND, BEAR), territory(MTN, BEAR), MTN], [SND, MTN, WTR], [SWP, SWP, WTR], [SWP, SWP, WTR], [SWP, FRST, WTR], [FRST, FRST, FRST]],
};

const Board = () => {
  const [r1, setR1] = React.useState(false);
  const [r2, setR2] = React.useState(false);
  const [r3, setR3] = React.useState(false);
  const [r4, setR4] = React.useState(false);
  const [r5, setR5] = React.useState(false);
  const [r6, setR6] = React.useState(false);
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
          <span style={{marginLeft: '-21px'}}><Piece rotate={r2} piece={pieces[pos2] || pieces['1']} /></span>
        </div>
        <div style={{display: 'flex', marginTop: '-40px'}}>
          <Piece rotate={r3} piece={pieces[pos3] || pieces['1']} />
          <span style={{marginLeft: '-21px'}}><Piece rotate={r4} piece={pieces[pos4] || pieces['1']} /></span>
        </div>
        <div style={{display: 'flex', marginTop: '-40px'}}>
          <Piece rotate={r5} piece={pieces[pos5] || pieces['1']} />
          <span style={{marginLeft: '-21px'}}><Piece rotate={r6} piece={pieces[pos6] || pieces['1']} /></span>
        </div>
      </div>
      <div style={{marginLeft: '20px'}}>
        <div>
          <div style={{display: 'flex'}}>
            <span>
              <button onClick={() => {setR1(!r1)}}>rotate</button>
              <input type="number" min="1" max="6" style={{width: '5em'}} value={pos1} onChange={(e) => {setPos1(e.target.value)}}/>
            </span>
            <span>
              <input type="number" min="1" max="6" style={{width: '5em'}} value={pos2} onChange={(e) => {setPos2(e.target.value)}}/>
              <button onClick={() => {setR2(!r2)}}>rotate</button>
            </span>
          </div>
          <div style={{display: 'flex'}}>
            <span>
              <button onClick={() => {setR3(!r3)}}>rotate</button>
              <input type="number" min="1" max="6" style={{width: '5em'}} value={pos3} onChange={(e) => {setPos3(e.target.value)}}/>
            </span>
            <span>
              <input type="number" min="1" max="6" style={{width: '5em'}} value={pos4} onChange={(e) => {setPos4(e.target.value)}}/>
              <button onClick={() => {setR4(!r4)}}>rotate</button>
            </span>
          </div>
          <div style={{display: 'flex'}}>
            <span>
              <button onClick={() => {setR5(!r5)}}>rotate</button>
              <input type="number" min="1" max="6" style={{width: '5em'}} value={pos5} onChange={(e) => {setPos5(e.target.value)}}/>
            </span>
            <span>
              <input tye="number" min="1" max="6" style={{width: '5em'}} value={pos6} onChange={(e) => {setPos6(e.target.value)}}/>
              <button onClick={() => {setR6(!r6)}}>rotate</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
