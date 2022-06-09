const nums = [100,4,200,1,3,2];
function longestStreak(array) {
  const hashSet = new Set(array);
  let longest = 1;
  for ( const val of hashSet){
    //find first # in the streak 
    if (!hashSet.has(val-1)) {
       let current = val;
       let curr_streak= 1;
       while(hashSet.has(current+1)) {
         current+=1;
          curr_streak+=1;
       }
      longest = Math.max(curr_streak,longest);
    }    
  }
  return longest;
}
console.log(longestStreak(nums));