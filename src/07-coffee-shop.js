/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
   const coffeeMenu={
    BASEPRICE:{
    SMALL     :3.00,
    MEDIUM    :4.00,
    LARGE     :5.00
    },
    ADD_ON:{
    REGULAR   :0.00,
    LATTE     :1.00,
    CAPPUCCINO:1.50,
    MOCHA     :2.00
    },
    OPTIONAL_EXTRAS:{
     WHIPPEDCREAM:0.50,
     EXTRASHOT    :0.75
    },
   }
  let totalPrice=0;
  let coffeeType=type.toUpperCase();
   let basePrice=size.toUpperCase();
  if(!(basePrice in coffeeMenu.BASEPRICE) || !(coffeeType in coffeeMenu.ADD_ON)){ return -1;}



   for (const extra in extras){
   let extraU=extra.toUpperCase();
   if(extras[extra] && coffeeMenu.OPTIONAL_EXTRAS[extraU])
   totalPrice+=coffeeMenu.OPTIONAL_EXTRAS[extraU];
   }


   totalPrice+=coffeeMenu.BASEPRICE[basePrice]+coffeeMenu.ADD_ON[coffeeType];
   return Number(totalPrice.toFixed(2));

}
