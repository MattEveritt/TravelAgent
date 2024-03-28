import React, { FC, memo } from 'react';
import { selectCheckedBagsByOfferID, useAppSelector } from '../../../redux';
import { IncludedCheckedBags } from '../../../types/flightOfferTypes';
import { LuggageCard } from './LuggageCard';

type Props = {
  flightOfferID: number | null;
};
const _IncludedLuggageRow: FC<Props> = ({ flightOfferID }) => {
  const includedCheckedBags: IncludedCheckedBags = useAppSelector(state =>
    selectCheckedBagsByOfferID(state, flightOfferID),
  );
  const luggageArray = [
    {
      title: '1 x Personal Item',
      weight: 7,
      weightUnit: 'kgs',
      dimensions: '40 x 15 x 30 cm',
    },
  ];

  if (includedCheckedBags?.quantity) {
    for (let i = 0; i < includedCheckedBags.quantity; i++) {
      luggageArray.push({
        title: '1 x Checked Bag',
        weight: includedCheckedBags.weight || 23,
        weightUnit: includedCheckedBags.weightUnit || 'kgs',
        dimensions: '80 x 50 x 30 cm',
      });
    }
  }

  return luggageArray.map((item, index) => {
    const { title, weight, weightUnit, dimensions } = item;

    return (
      <LuggageCard
        key={index}
        title={title}
        weight={weight}
        weightUnit={weightUnit}
        dimensions={dimensions}
      />
    );
  });
};

export const IncludedLuggageRow = memo(_IncludedLuggageRow);
IncludedLuggageRow.displayName = 'IncludedLuggageRow';
