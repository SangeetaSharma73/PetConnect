export const getCityFromCoords = async (lat, lng) => {
  const apiKey = "YOUR_OPENCAGE_API_KEY"; // replace with your key

  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`
  );

  const data = await res.json();
  if (data && data.results && data.results.length > 0) {
    return (
      data.results[0].components.city ||
      data.results[0].components.town ||
      "Unknown"
    );
  }

  return "Unknown";
};

export const getDistanceInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2); // distance in km
};
