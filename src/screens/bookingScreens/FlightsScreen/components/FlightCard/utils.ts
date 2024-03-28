export const formatOutboundText = (departureDate: string) => {
  const date = new Date(departureDate);
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return `${formattedDate} - Outbound`;
};

export const formatCityName = (cityName: string = ', ') => {
  const seperateCityName = cityName.split(',')[0];
  const splitCityName = seperateCityName.split(' ');
  let newCityName: string[] = [];
  splitCityName.forEach(word => {
    newCityName.push(
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    );
  });
  return newCityName.join(' ');
};

export const formatDuration = (duration: string) => {
  const match = duration.match(/PT((\d+)H)?((\d+)M)?/);
  if (match) {
    const hours = match[2] ? `${match[2]}h` : '';
    const minutes = match[4] ? `${match[4]}m` : '';
    return `${hours}${minutes}`;
  }
  return duration;
};

export const formatDateText = (dateString: string) => {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};
