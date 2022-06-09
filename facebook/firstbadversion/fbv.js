
/*
 type TypIsBad = (version: number) => boolean
 */

/**
 * @param {TypIsBad} isBad 
 */
 function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    // write your code to return the first bad version
    // if none found, return -1

    let l = 0;
    let r =  version;
    while( l <= r) {
      let mid = Math.floor((l+r)/2);
      if(isBad(mid)) {
        r = mid -1;
      } else {
        l = mid +1;
      }
    }
    if (l<= version) {
      return l
    } else {
      return -1; 
    }
  }
}