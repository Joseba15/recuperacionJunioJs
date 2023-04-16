let wishlist = document.querySelector('#wishlist')
let products= document.querySelectorAll('li')
let bottonAdd = document.querySelectorAll('.add-to-wishlist');
let arraynew =[]
    
    
    for (var i = 0 ; i < bottonAdd.length; i++) {

        let span = products[i].querySelector("span").textContent
        
        // console.log(products[i].querySelector("button").getAttribute('data-id'))
        console.log(bottonAdd[i].getAttribute('data-id'));
        
        bottonAdd[i].addEventListener('click', (e) =>{
            
            let newLi= document.createElement('li');
            let newSpan = document.createElement('span');
            newSpan.textContent = span;

            let removeButton = document.createElement("button");
            removeButton.innerHTML = "Remove";
            if (!arraynew.includes(bottonAdd[i].getAttribute('data-id'))) {
                newLi.appendChild(newSpan)
                newLi.appendChild(removeButton)
                wishlist.appendChild(newLi)
                arraynew.push(bottonAdd[i].getAttribute('data-id'))

                // console.log(arraynew);
            }
            
        
            removeButton.onclick = () => {
                newLi.remove();
                arraynew.pop(bottonAdd[i].getAttribute('data-id'));

            }
        })
    }