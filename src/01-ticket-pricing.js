/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here=
  let ticketPrice={
    CHILDREN:8,
    TEENS:12,
    ADULTS:15,
    SENIORS:10,
  }
 let finalticketPrice=3;
  if(age<0 || typeof age!=="number") return -1;

    if(age>=0 && age<=12) {
      finalticketPrice+=ticketPrice.CHILDREN;
    }
    else if(age>=13 && age<=17){
      finalticketPrice+=ticketPrice.TEENS;
    }
    else if(age>=18 && age<=59){
      finalticketPrice+=ticketPrice.ADULTS;
    }
    else if(age>=60){
      finalticketPrice+=ticketPrice.SENIORS;
    }
  
  return isWeekend ? finalticketPrice : finalticketPrice-3;
}
