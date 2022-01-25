function run(){
    var option = document.getElementById('option');
    var checkboxes = document.querySelectorAll('input.subOption');
    
        // has 2 attibute, checked and  indeterminate;
      
        for ( let i= 0;i<checkboxes.length;i++){
            checkboxes[i].onclick= function(){
                var checkoutCount= document.querySelectorAll('input.subOption:checked').length;
                option.checkd= checkoutCount>0;
                option.indeterminate = checkoutCount>0 &&checkoutCount < checkboxes.length;
            }
        
     } 
     option.addEventListener('click',()=>{
         if (option.checked){
            for (var i=0;i<checkboxes.length;i++){
                checkboxes[i].checked =true;
            }
         }
         else{
            for (var i=0;i<checkboxes.length;i++){
                checkboxes[i].checked =false;
            }
         }
        
     })
};


run();