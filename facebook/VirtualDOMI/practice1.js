

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


  const virtualize = (element)=> {
    const result = {    
        type: element.tagName.tolowerCase(),
        props: {}
    } 
    const props = {};
    if(element.hasAttributes()){
        for( let { name ,value } of element.attributes){
        props[name === 'className'?'class': name] = value;

         }
    }

    const children = [];
    if(element.hasChildNodes()){
        for( const node of element.childNodes){
            if(node.nodeType ===1){
                children.push(virtualize(node));
            }else if (node.nodeType===3){
                children.push(node.textContent);
            }
        }
    }

    if(children.length>0){
        if (children.length ===1){
            props.children = children[0];
        } else {
           props.children = children;
        } 
    }

    result.props = props;
    return result;
  }

  function render(json){
    let {type , props: {className, children, ...restProps}}= json;

    const el = document.createElement(type);
      if(className){
          el.classList.add(className);
      }
      if(children){
          children = Array.isArray(children)?children : [children];
          for (const child of children){
          if(typeof child === 'string') {
              el.append(document.createTextNode(child));
          } else {
              el.append(render(child));
          }
          }
      }
      if(restProps){
          for (const [name,value] of Object.entries(restProps)) {
              el.setAttribute(name,value);
          }
      }

      return el;
}
