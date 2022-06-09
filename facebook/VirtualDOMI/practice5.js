
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

  const render = (json)=>{
    let {type, props:{ className, children, ...restProps}}= json;
    const element = document.createElement(type);
    if(className){
        element.classList.add(className);
    }
    children = Array.isArray(children)?children: [children];
        children.forEach((child)=>{
        if(typeof child ==='string'){
            element.append(document.createTextNode(child));

        }else {
            element.append(render(child));
        }
 
    if(restProps){
        for(const [ name, value]of Object.entries(restProps)){
            element.setAttribute(name,value);
        }
    }
   })
    return element;
  }

const html = render(json);

const virtualize= (html) => {
    const result = {
        type: html.tagName.toLowerCase(),
        props:{}
    }
    let props = {};
    if (html.hasAttributes()){
      console.log(html)
        for(let {name, value } of html.attributes){
            if(name === 'class'){
                props['className'] =value;
            } else {
                props[name]= value;
            }
        }
    }

    const children =[];
    if ( html.hasChildNodes()){
        for(let child of html.childNodes){
            if( child.nodeType ===1){
                children.push(virtualize(child))
            }
            else if ( child.nodeType ===3){
                children.push(child.textContent);
            }
        }
    }
    if(children.length >0){
        if(children.length ===1){
            props.children = children[0];
        }
        else{
            props.children = children;
        }
    }
    result.props = props;
        return result;
}

console.log(virtualize(html));