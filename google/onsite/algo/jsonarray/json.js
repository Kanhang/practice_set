const data = [   
{     name: 'John',     company: 'Google',     position: 'Software Engineer',     level: 'Entry' },  
{     name: 'Ann',     company: 'Waymo',     position: 'Product Manager',     level: 'Senior',  } ];
   const match = {
      name: 'John',
      level: 'Entry'
    };

// 要求根据match pattern找到data里边相对应的item
//O(m*n) O(1)
const res = data.find( datum => {
 return   Object.entries(match).every(([key,value]) => {
        return datum[key] === value
    })
})
console.log(res);










// optimizad using trie, trie is faster than hash table
// To summarize, the time complexity is as follows:

// OPERATION	AVERAGE CASE	WORST CASE	BEST CASE
// Insertion	O(N)	O(N)	O(N)
// Deletion	    O(N)	O(N)	O(N)
// Searching	O(N)	O(N)	O(1)
// Space complexity for creation of a trie: O(alphabet_size * average key length * N)

// The Space Complexity is as follows:

// OPERATION	SPACE COMPLEXITY
// Insertion	O(N)
// Deletion	    O(1)
// Searching	O(1)