

//bind takes functionality by pass use reference context as current context;
//bind will return a function at the end.

Function.prototype.newBind = function (context) {
    const currentContext = this;
   //this is to make arguments becomes a real array
    const currentArguments = [...arguments].slice(1); // Dont need the context
    return function (...args) {
    console.log( [...currentArguments,...args] ,'haha');
      return  currentContext.apply(context, [...currentArguments,...args])
    
    }
  }

  this.x = 9;    // this refers to global "window" object here in the browser
  const mod= {
    x: 81,
    getX: function () { return this.x; }
  };
  mod.getX(); // 81
  const retrieveX = mod.getX;
  retrieveX();
  // returns 9 - The function gets invoked at the global scope
  // Create a new function with 'this' bound to module
  // New programmers might confuse the
  // global const x with module's property x
  const boundGetX = retrieveX.newBind(mod,1,2,3,4);
  console.log(boundGetX(5,6)); // 81
  
  