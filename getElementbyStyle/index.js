// Create a function that finds elements in the DOM by a style. The function should take a CSS property name and value
// and return the list of elements in the DOM that match that style. The function signature should look like the following:

// method signature:
// getElementsByStyle => (property: string, value: string): Array

// For example, you might call getElementsByStyle("color", "#FFF") and it would return all the elements in the DOM with white text.

// You can use the following to help you:

// document.body: returns the root body node
// element.children: returns the immediate children of any node
// Map<cssProperty: string, cssValue: string> getComputedStyle(element): returns an object containing the styles applied to an element where each key is a style property
// and the value is the CSS value, inherited values are included
// assume querySelectorAll cannot be used in the implementation
console.log('haha');
const haha = document.getElementsByClassName('food');
 // compStyles.getPropertyValue('line-height')
const selectElements = getElementsByStyle('width','100px');
console.log(selectElements);
function getElementsByStyle(property,value){
  const root = document.getElementById('root');
 const children=  root.children;
    let selected= [];
 Array.from(children).forEach((child)=>{
  let computedStyles=  getComputedStyle(child);

   let computedValue= computedStyles.getPropertyValue(property);
    console.log(child);
    console.log(computedValue , value);
    if (computedValue === value){
      if (child!==null){
      selected.push(child);
    }
  }})
  return selected;
  
}