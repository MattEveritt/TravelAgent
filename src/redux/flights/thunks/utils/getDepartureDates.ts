export const getDepartureDates = (
  dates: { startDate: string; untilDate: string }[],
  type: 'Round-trip' | 'One-way' | 'Multi-city',
) => {
  let departureDates: string[] = [];

  if (type === 'Round-trip') {
    departureDates = [dates[0].startDate, dates[0].untilDate];
  } else {
    departureDates = dates.map(date => date.startDate);
  }
  return departureDates;
};
