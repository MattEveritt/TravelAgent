import { createSelector } from '@reduxjs/toolkit';
import { selectAllTrips } from './selectAllTrips';
import { TripsType } from '../trips';

export const selectTripById = (id: string | undefined) =>
  createSelector(selectAllTrips(), (trips: TripsType[]) => {
    if (!id) return trips[0];
    const tripObj = trips.find(
      (trip: TripsType) => trip.id === id,
    ) as TripsType;
    return tripObj;
  });
