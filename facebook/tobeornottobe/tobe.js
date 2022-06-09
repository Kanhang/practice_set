




/**
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
 function myExpect(input) {
    // your code here
    function toBe( value, errorType = false) {
      const compare = Object.is(input,value);
      if (errorType === true) { 
        if (compare) {
         throw new Error('error');
        } else {
         return true;
        }
  
      } else {
        if (!compare) {
          throw new Error('error');
        } else {
          return true;
        }
      }}
    return {
      toBe, 
      not: {
        toBe :function(value) { 
          return toBe(value, true);
        }
      }
    }
    
  
  
  
  }
  
  
  
  