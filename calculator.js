let string = "";
let buttons = document.querySelectorAll(".button");
let memory = 0;


Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == 'C')
        {
            string = "";
            document.querySelector("input").value = string;
        }
        else if (e.target.innerHTML == '%') 
        {
            string = (parseFloat(string) / 100).toString();
            document.querySelector("input").value = string;
        } 
        else if (e.target.innerHTML == 'm+') 
        {
            memory += parseFloat(string);
            string = "";
            document.querySelector("input").value = string;
        }
         else if (e.target.innerHTML == 'm-') 
        {
            memory -= parseFloat(string);
            string = "";
            document.querySelector("input").value = string;
        }
        else
        {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
        
    })
})