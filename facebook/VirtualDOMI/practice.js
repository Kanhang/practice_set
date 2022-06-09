
function render(json){
  let {type ,props: {className, children, ...restProps}} = json;
  let el = document.createElement(type);
  if(className){
    el.classList.add(className);
  }
  if (children) {
    children = Array.isArray(children)? children: [children];
    for( const child of children){
      if( typeof child === 'string'){
      el.append(document.createTextNode(child));
      } else {
        el.append(render(child));
      }
    }
  }
  if (restProps){
    for (const [key,value] of Object.entries(restProps)){
        el.setAttribute(key,value);
    }
  }

  return el;
}



function virtualize(element){
    const results= {
        type: element.tagName.toLowerCase(),
        props:{}
    };  
    const props ={};
    if ( element.hasAttributes()){
        for( let {name,value} of element.attributes){
        props[name === 'class'? 'className':name]=  value;
        }
    }

    const children = [];
    if(element.hasChildNodes()){
        for (let node of element.childNodes){
            if(node.nodeType===1){
                children.push(virtualize(node))
            }
            if(node.nodeType===3){
                children.push(node.textContent)
            }
        }

    }
    if(children.length ){
        if(children.length ===1){
            props.children =children[0];
        } else {
            props.children = children;
        }

    }
    results.props= props;
    return results;
}

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