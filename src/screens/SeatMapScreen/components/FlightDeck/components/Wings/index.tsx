import React, { FC } from 'react';
import { Wing } from './components';

type Props = {
  start: number;
  end: number;
  width: number;
};
export const Wings: FC<Props> = ({ start, end, width }) => {
  return (
    <>
      <Wing orientation="left" start={start} end={end} />
      <Wing orientation="right" start={start} end={end} width={width} />
    </>
  );
};
