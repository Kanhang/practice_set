// <form id="parent">
// 	<input type="text" name="foo.bat" />
// 	<input type="text" name="foo.bar.baz" />
// 	<input type="text" name="fizz" />
// </form>
// Write a function (in JS) that returns an object with values of text inputs in the form id passed to it.
// For eg:

// getValues("parent") should return object like

// {
// 	"foo": {
// 		"bat" : _____, //Actual value of 1st text box
// 		"bar" : {
// 			"baz" : _____ // Value of 2nd text box
// 		}
// 	},
// 	"fizz" : _____ // Value of 3rd text box
// }
const serilizer = ()=>{
    const els = document.querySelectorAll("#parent input");
    console.log(Array.from(els));
    console.log(els[0].getAttribute("text"));

  const res =  Array.from(els).reduce((acc, el )=>{
        const text = el. getAttribute('text');
        const value = el. getAttribute('value');
        const names = text.split('.');
        let temp =acc;
        names.forEach((name,index)=>{
            console.log(name)
            if (! (name in temp) ){
                temp[name] = {};
            }
            console.log(temp);
            if(index === names.length-1){
                temp[name]= value;
            } 
            
            temp =temp[name]; // get into next layer
        })
        return acc;
    },{})
console.log(res);
return res;
}


serilizer();