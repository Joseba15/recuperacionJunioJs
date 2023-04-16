const atributos = document.querySelector("button")

atributos.addEventListener('click', (event) =>{
    
    let web = document.getElementById("w3r").href;
    alert('The value of the href attribute of the link is : ' + web);
    let lang = document.getElementsByTagName("a").hreflang;   
    alert('The value of the hreflang attribute of the link is : '+lang);
    let rela = document.querySelector("p a").rel; 
     alert('The value of the rel attribute of the link is : '+rela);
    let tar = document.querySelector("a") .target; 
     alert('The value of the taget attribute of the link is : '+ tar);
    let ty = document.querySelector("a[id='w3r']") .type; 
     console.log('The value of the type attribute of the link is : '+ ty);  
})