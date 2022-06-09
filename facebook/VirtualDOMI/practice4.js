
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
    const {type, props: className, children, ...restProps} = json;
    const element = document.createElement(type);
    if(className){
        element.classList.add(className);
    }
    children = Array.isArray(children)?children: [children];
    for( const child of children){
        if(typeof child ==='string'){
            element.append(document.createTextNode(child));

        }else {
            element.append(render(child));
        }
    }
    if(restProps){
        for(const [ name, value]of Object.entries(restProps)){
            element.setAttribute(name,value);
        }
    }

    return element;
  }


  render(json);