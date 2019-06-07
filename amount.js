/**
 * Converts an int or float to a string with Venezuelan Format
 * E.x: 12415.65 to "12.415,65" 
 * 
 * @param {int, float} amount 
 * @param {string} [intSeparator] 
 * @param {string} [decSeparator] 
 */
export const venezuelanFormat = (amount, 
                                 intSeparator = '.', 
                                 decSeparator = ',') => {
  const SEPARATE = 3;
  let strAmount  = amount.toString();
  let isNegative = false;

  if (strAmount[0] === '-') {
    strAmount  = strAmount.slice(1);
    isNegative = true;
  }

  const arrAmount = strAmount.split('.');
  let intPart = arrAmount[0];
  const intPartLength = intPart.length;

  if (intPartLength <= SEPARATE) {
    if (arrAmount[1])
      intPart += decSeparator + arrAmount[1];

    if (isNegative)
      intPart = `-${intPart}`;

    return intPart;
  }
    
  let initialPoint = intPartLength % SEPARATE;
  let points = Math.trunc(intPartLength / SEPARATE);

  if (initialPoint === 0) {
    points--;
    initialPoint = SEPARATE;
  }
    
  let amountFormatted = intPart.substring(0, initialPoint);
  
  for (let i = 0; i < points; i++) {
    let pos = initialPoint + (i * SEPARATE);
    amountFormatted += intSeparator;
    amountFormatted += intPart.substring(pos, pos + SEPARATE);
  }

  if (arrAmount[1])
    amountFormatted += decSeparator + arrAmount[1];

  if (isNegative)
    amountFormatted = `-${amountFormatted}`;

  return amountFormatted;
};