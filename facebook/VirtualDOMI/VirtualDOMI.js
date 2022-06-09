

const json = {
    type: 'div',
    props: {
      children: [
        {
          type: 'h1',
          props: {
            children: ' this is '
          }
        },
        {
          type: 'p',
          props: {
            className: 'paragraph',
            children: [
              ' a ',
              {
                type: 'button',
                props: {
                  children: ' button '
                }
              },
              ' from ',
              {
                type: 'a',
                props: {
                  href: 'https://bfe.dev',
                  children: [
                    {
                      type: 'b',
                      props: {
                        children: 'BFE'
                      }
                    },
                    '.dev'
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }

function render(obj){
let  {type, props: {className, children,...restProps}}= obj;
const el = document.createElement(type);

if(className) //to prevent add undefine 
el.classList.add(className);
children= Array.isArray(children)?children:[children];

children.forEach((child)=>{

    if(typeof child === 'string' ){
        el.append(document.createTextNode(child));
    }
    else {
        el.append(render(child));
    }
if(restProps){
     Object.entries( restProps).forEach(([key,value])=>{
        el.setAttribute(key,value);
    })
}

})
return el;
}


function virtualize(element){
    const result = {
        type : element.tagName.toLowerCase(),
        props :{}
    };
    const props={};
  //console.log(element.attributes,'a');
    if(element.hasAttributes()){
        for (let {name, value } of element.attributes){
            console.log(name,value);
            props[name==='class'?'className':name] = value;
        }
    }
    //console.log(props);
  const children =[];
  if (element.hasChildNodes()){
    for(let node of element.childNodes)  {
      if(node.nodeType===1){ //element node
        children.push(virtualize(node));  //nodetype2 attribute node
      } else if(node.nodeType ===3){ //text node 
        children.push(node.textContent);
      }
    }
  }
  if(children.length) {
    if(children.length ===1){
      props.children = children[0];
    } else {
      props.children = children;
    }
  }
  result.props = props;
  return result;
}



console.log(virtualize(render(json)));