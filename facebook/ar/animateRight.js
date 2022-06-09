
  let animate = (el, milliseconds, distance) => {
    let element = document.getElementById(el);
    element.style.transitionDuration=`${milliseconds}ms`;
    element.style.transform =`translateX(${distance}px)`;
  };
  animate('haha', 2000, 500)

  function animate(el,time,distance){
    let startTime = null;
    const speed = distance / time;
    const move = (currentTime) => {
      if(!startTime) startTime= currentTime;
      const timeSpent = currentTime - startTime;
      if( timeSpent >time) return;
      el.style.transform = `translateX(${timeSpent*speed}px)`;
      window.requestAnimationFrame(move);
    };
    window.requestAnimationFrame(move);
    }
  
  animate(document.getElementById('haha'),2000,1000);

  //difference between setinterval and requestAnimationFrame
//   setTimeout attaches a handler to the base event loop, always attaching to the next iteration of the event loop, which is almost 10ms from current time, but the exact delay depends on browser implementation.

// setInterval attaches to the next iteration and all iterations thereafter, but this handler can get triggered more times than event loop iterations if event loop is going slowly, which can happen due to cpu spikes and what not.

// requestAnimationFrame attaches handler to the next “render” loop iteration, instead of event loop. If you want to update UI in every iteration, then this is the most efficient place to update DOM because browser renders the DOM right after.

// Show 