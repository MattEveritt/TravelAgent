import React, { FC } from 'react';
import { Exit } from './components/Exit';

type Props = {
  exitRows: number[];
};

export const Exits: FC<Props> = ({ exitRows }) => {
  return exitRows.map((row, i) => <Exit row={row} key={i} />);
};
