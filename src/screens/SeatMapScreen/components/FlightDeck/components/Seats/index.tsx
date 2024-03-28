import React, { FC, memo } from 'react';
import { Seat } from './components';

type Props = {
  seats: {
    number: string;
    coordinates: {
      x: number;
      y: number;
    };
    travelerPricing: {
      seatAvailabilityStatus: string;
    }[];
  }[];
};

const _Seats: FC<Props> = ({ seats }) => {
  return seats.map((seat, i) => (
    <Seat
      key={i}
      number={seat.number}
      x={seat.coordinates.x}
      y={seat.coordinates.y}
      availability={seat.travelerPricing[0].seatAvailabilityStatus}
    />
  ));
};

export const Seats = memo(_Seats);
