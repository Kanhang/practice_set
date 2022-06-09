 

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

 
 const virtualize = (element) => {
    const result = {};
    result.type = element.tagName.toLowerCase();
    result.props ={};
    const props= {};
    if(element.hasAttributes()){
        for(const { name,value} of element.attributes){
            props[name === 'className' ?'class':name] = value;  
        }
    }
    const children = [];
    if (element.hasChildNodes()){
        for ( const childNode of element.childNodes){
            if(childNode.nodeType ===1) {
                children.push(virtualize(childNode));
            } else if (childNode.nodeType ===3){
                children.push(childNode.textContent);
            }
        }
    }
    if( children.length>0){
        if ( children.length ===1){
            props.children = children[0];
        } else {
            props.children = children;
        }
    }
    result.props = props;
    return result;
 }

 function render(json){
    let{ type, props: { className, children, ...restProps}}= json;
    const el = document.createElement(type);
    if( className ){
        el.classList.add(className);

    }
    children = Array.isArray(children)? children: [children];
    for ( const child of children){
            if (typeof child ==='string'){
                el.append(document.createTextNode(child));
            } else {
                el.append(render(child));
            }
    }
    if (restProps){
        Object.entries(restProps).forEach(([name,value])=>{
            el.setAttribute(name,value)
        })
    }
    return el;
 }