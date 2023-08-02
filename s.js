let element=document.getElementById("heading");
function input() {
    
    let start= document.getElementById("start").value;
    let heading ='';

    for (let i = 1; i <=start; i++) {
        let row = `${i}`;

        for (let j = 0; j < start; j++) {
            row +=  "*";

            
           
        }
        heading += row + '<br>';
    }
    element.innerHTML= heading ;
            
}

let element2=document.getElementById("heading2");
function input2() {
    
    let start2= document.getElementById("start2").value;
    let heading2 ='';

   
    for (let i = 1; i <=start2; i++) {
        let row = `*`;
    

        for (let j = 1; j < i; j++) {
            row +=  "*";


         
           
        }
        heading2 += row + '<br>';
    }
    element2.innerHTML= heading2 ;
            
}