// This code should add behavior to the "dots" that make up the letters
// in "indeed": clicking on a blue dot should turn it orange. Once all
// dots in a letter are orange, then the dots in that letter should be changed
// back to blue in the reverse order that the user changed them to orange, with
// a 200ms delay between changing each dot from orange to blue.

class LetterAnimator {
    constructor(root) {
        const queue_ = [];
        const root_ = root;
        const nChild = root.querySelectorAll('.ltr-box').length;
        const self = this;

        this.intervals = [];

        let enqueue = function(ltrBox) {
            queue_.push(ltrBox);
            console.log(queue_,nChild)
            // animate if finished
            if (queue_.length == nChild) {
                console.log(self.interval)
                animate();
            }
        };

        let tick = function() {
            let next = queue_.pop();
            console.log('ga',self.interval)
            if (next) {
                console.log(next)
                next.classList.remove('ltr-box-selected');
            }
            if (queue_.length == 0) {
                animateComplete();
            } else {
                console.log(self.interval,queue_.length)
              if(!self.interval) {
                self.interval = setInterval(tick, 200);
           }
            }
        };

        let animateComplete = function() {
            console.log('haha')
            root_.classList.remove('ltr-animating');
            console.log(self.interval)
       
            clearInterval(self.interval);
            self.interval=null;
            console.log(self.interval)
            //clear interval and set inteval to be null
       
        };

        let animate = function() {
            root_.classList.add('ltr-animating');
            tick();
        };

        let onClick = function(ev) {
            let target = ev.target;
            if (target.classList.contains('ltr-box')) {
                if (!root_.classList.contains('ltr-animating') && !target.classList.contains('ltr-box-selected')) {
                    target.classList.add('ltr-box-selected');
                    enqueue(target);
                }
                ev.preventDefault();

                return false;
            }

            return true;
        };

        [].forEach.call(root_.querySelectorAll('.ltr-box'), (ltr) => {
            ltr.addEventListener('click', onClick, false);
        });

        return {
            dispose() {}
        };
    }
}

const ltrs = document.querySelectorAll('.ltr');

[].forEach.call(ltrs, (ltr) => {
    new LetterAnimator(ltr);
});