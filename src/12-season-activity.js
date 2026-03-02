/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
const WanderPricingSeason=["","Winter","Winter","Spring","Spring","Spring","Summer","Summer","Summer","Autumn","Autumn","Autumn","Winter"];
const WanderLustActivity={
"Winter":["skiing","ice skating"],
"Spring":["museum visit","hiking",],
"Summer":["swimming","cycling"],
"Autumn":["reading at a cafe","nature walk"]
}
export function getSeasonActivity(month, temperature) {
  // Your code here
  if(month<1 || month > 12 ) return null;
  const season=WanderPricingSeason[month];
  console.log(season);
  const activity=WanderLustActivity[season];
  let seasonactivity="";
  if(season==="Winter"){
  seasonactivity= temperature >=0 ? activity[1]:activity[0];
  }
  else if(season ==="Autumn"){
    seasonactivity= temperature > 15 ?  activity[1]:activity[0];
  }
  else if(season==="Spring"){
  seasonactivity= temperature > 20 ? activity[1]:activity[0]
  }
  else if(season==="Summer"){
  seasonactivity= temperature <=35 ? activity[1]:activity[0];
  }

    return {
    season:season,
    activity:seasonactivity
    };
}
getSeasonActivity(11,10);
