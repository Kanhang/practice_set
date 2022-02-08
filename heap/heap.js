
class BinaryHeap {

    constructor(  ){

        this.values=[];
    }


    add(value){
        this.values.push(value);
        let index= this.values.length-1;
        let current =value;
        while (index>0){
            let parentIndex =Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
         //this is max heap ,bubble ups parent;
           if(current >=parent){  // this <= determines min heap or max heap
                //swap             // if current > parent then it is 
                this.values[index]= parent;
                this.values[parentIndex]= current;
                index =parentIndex;
            }
            else{
                break;
            }
        }
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();

        this.values[0]= end;
        let current= this.values[0]; 
        let index= 0; 
        //current will the last element in the heap tree , 
        //and we need to place it at right index
        while (true){
           // start from 0 and 
            let leftChildIndex= index*2 +1;
            let rightChildIndex= index*2 +2;
            let swap =null;
            //swap will be the index that we have determine to bubble up
            // need to also check if this is greater than total length ,
            //because you keep getting leftchildindex*2+1, it will out of stack
            if( leftChildIndex<this.values.length && this.values[leftChildIndex]>current){
                
                swap =leftChildIndex;
            }
            // condition whether to set swap with rightchild
            if(rightChildIndex<this.values.length && this.values[rightChildIndex]>current){
            if (swap && this.values[rightChildIndex]> swap  || (!swap && this.values[rightChildIndex]>current)){
                swap =rightChildIndex;
            }}
            //break the loop if nothing to swap
            if (!swap){
                break;
            }
            // place the current
            //swap will be leftchild or right childIndex, 
            // we need swap the left child or right child with current  
            this.values[index]= this.values[swap]; 
            this.values[swap] =current;
            index = swap; // we move the index to its child, which is still the  current ,
        // because  we change index of current, 
        // and we keep track of this, until it is placed in right index;

        }
  
       return max;
    }
}

const BH = new BinaryHeap();

 //build tree takes o(nlogn);
BH.add(3);
BH.add(45);
BH.add(27);
BH.add(33);
BH.add(9);          
BH.add(35);    
BH.extractMax();                                    
// [ 45, 33, 27, 3, 9 ] this is corrent order
console.log(BH.values);

/*   45 
    33  27  
3    9     */