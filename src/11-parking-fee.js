/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
 const vehicleParkingPriceChart={
     "car":{
     dailymax:30,
     firstHour:5,
     hourlyRate:3,
     },
     "motorcycle":{
     dailymax:18,
     firstHour:3,
     hourlyRate:2,
     },
     "bus":{
     dailymax:60,
     firstHour:10,
     hourlyRate:7,
     },
   }
function isVehicleAvailable(vehicleType,vehicleObj){
 return Object.prototype.hasOwnProperty.call(vehicleObj,vehicleType);
}
export function calculateParkingFee(hours, vehicleType) {
  // Your code here
 if(!isVehicleAvailable(vehicleType,vehicleParkingPriceChart)) return -1;
 if(hours<=0) return -1;
 hours=Math.ceil(hours);
 let parkingFee=0;
 const {dailymax,firstHour,hourlyRate}=vehicleParkingPriceChart[vehicleType];
 parkingFee=firstHour + hourlyRate*(hours-1);
 return Math.min(parkingFee,dailymax);
}