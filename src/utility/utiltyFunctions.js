// Function to convert degrees to radians
   export function toRadians(degrees) {
    return degrees * Math.PI / 180;
   }
   
   // Haversine formula to calculate distance between two points
   export function haversineDistance([lat1, lon1], [lat2, lon2], isMiles = false) {
    const RADIUS_OF_EARTH_IN_KM = 6371;
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
               Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
               Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = RADIUS_OF_EARTH_IN_KM * c;
   
    if (isMiles) {
       distance /= 1.60934; // Convert to miles
    }
   
    return distance;
   }

   export function convertMillisecondsToHoursMinutesSeconds(milliseconds) {
      // Convert milliseconds to seconds
      const totalSeconds = Math.floor(milliseconds / 1000);
  
      // Calculate hours, minutes, and seconds
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
  
      // Format hours, minutes, and seconds to always have two digits
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');
  
      // Return the formatted time
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  
   
   // Function to calculate total distance from an array of coordinates
   export function calculateTotalDistance(coordinates, isMiles = false) {
    let totalDistance = 0;
    for (let i = 0; i < coordinates.length - 1; i++) {
       const distance = haversineDistance(coordinates[i], coordinates[i + 1], isMiles);
       totalDistance += distance;
    }
    return totalDistance;
   }
   
   export function calculateTotalTime(data){
    // Initialize an array to store all time values
    let timeValues = [];

    // Navigate through the JSON structure to extract time values
    data.tracks.forEach(track => {
        track.segments.forEach(segment => {
            segment.forEach(point => {
                timeValues.push(new Date(point.time));
            });
        });
    });

    // Sort the time values
    timeValues.sort((a, b) => a - b);

    // Calculate the total time in milliseconds
    let totalTime = timeValues[timeValues.length - 1] - timeValues[0];

    // Convert milliseconds to seconds
    totalTime = convertMillisecondsToHoursMinutesSeconds(totalTime);

    // Return the total time in seconds
    return totalTime;
}