import React, { FC } from 'react';
import { Facility } from './components';

type Props = {
  facilities: {
    code: string;
    coordinates: {
      x: number;
      y: number;
    };
  }[];
};

export const Facilities: FC<Props> = ({ facilities }) => {
  if (!facilities) return null;

  return facilities.map((facility, i) => (
    <Facility
      key={i}
      code={facility.code}
      x={facility.coordinates.x}
      y={facility.coordinates.y}
    />
  ));
};
