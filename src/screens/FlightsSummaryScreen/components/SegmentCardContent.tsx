import React, { FC, memo, useEffect, useState } from 'react';
import { SegmentContent } from '../../bookingScreens/FlightsScreen/components/FlightCard/components';
import { fetchAirportInfoByIATA, useAppDispatch } from '../../../redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { IncludedCheckedBags } from '../../../types/flightOfferTypes';

type SegmentCardContentProps = {
  segment: any;
  destinationCityName: string;
  departureCityName: string;
  isSummary: boolean;
  segmentIndex: number;
  segmentCount: number;
  includedCheckedBags?: IncludedCheckedBags;
};

const _SegmentCardContent: FC<SegmentCardContentProps> = ({
  segment,
  destinationCityName,
  departureCityName,
  isSummary,
  segmentIndex,
  segmentCount,
  includedCheckedBags,
}) => {
  const dispatch = useAppDispatch();

  const [departureCity, setDepartureCity] = useState<string>('');
  const [destinationCity, setDestinationCity] = useState<string>('');

  const departureIataCode = segment.departure.iataCode;
  const destinationIataCode = segment.arrival.iataCode;
  const departureTime = segment.departure.at.substring(11, 16);
  const departureDate = segment.departure.at.substring(0, 10);
  const stops = segment.numberOfStops;
  const arrivalTime = segment.arrival.at.substring(11, 16);
  const airlineCode = segment.carrierCode;
  const duration = segment.duration;

  useEffect(() => {
    const fetchCityName = async (iataCode: string) => {
      const cityName = await dispatch(fetchAirportInfoByIATA({ iataCode }));
      const unwrappedCityName = unwrapResult(cityName);
      return unwrappedCityName?.data?.address?.cityName || '';
    };

    const updateCityNames = async () => {
      if (segmentCount > 1) {
        if (segmentIndex === 0) {
          setDepartureCity(departureCityName);
          const _destinationCity = await fetchCityName(destinationIataCode);
          setDestinationCity(_destinationCity);
        } else if (segmentIndex === segmentCount - 1) {
          const _departureCity = await fetchCityName(departureIataCode);
          setDepartureCity(_departureCity);
          setDestinationCity(destinationCityName);
        } else {
          const _departureCity = await fetchCityName(departureIataCode);
          setDepartureCity(_departureCity);
          const _destinationCity = await fetchCityName(destinationIataCode);
          setDestinationCity(_destinationCity);
        }
      } else {
        setDepartureCity(departureCityName);
        setDestinationCity(destinationCityName);
      }
    };
    updateCityNames();
  }, [
    segmentIndex,
    segmentCount,
    departureCityName,
    destinationCityName,
    dispatch,
    destinationIataCode,
    departureIataCode,
  ]);

  return (
    <SegmentContent
      departureIataCode={departureIataCode}
      destinationIataCode={destinationIataCode}
      departureCityName={departureCity}
      destinationCityName={destinationCity}
      departureTime={departureTime}
      departureDate={departureDate}
      stops={stops}
      arrivalTime={arrivalTime}
      airlineCode={airlineCode}
      duration={duration}
      isSummary={isSummary}
      includedCheckedBags={includedCheckedBags}
    />
  );
};

export const SegmentCardContent = memo(_SegmentCardContent);
