const boton = document.querySelector("#calculo")
const divRes = document.querySelector("#auto")
let costeTotal ;


boton.addEventListener('click', calcularCoste);


function calcularCoste() {
    divRes.classList.remove('auto');
    const hotel = document.querySelector("#hotel")
    const viaje = document.querySelector("#viaje")
    const coche = document.querySelector("#coche")
    const total = document.querySelector("#total")
    
    
    const numNights = document.querySelector("#night").value
    const allCity = document.querySelector("#city")
    const city= allCity.options[allCity.selectedIndex].text
    costeTotal=(costeHotel(numNights)+costeAvion(city,numNights)+costeAlquilerCoche(numNights))
    if (costeTotal>0 && costeTotal<199) {
        total.style.color="green";
    }else if (costeTotal>=200 && costeTotal<499) {
        total.style.color="yellow";
    }else if (costeTotal>=500) {
        total.style.color="red";
    }
    hotel.innerHTML=`Coste hotel: ${costeHotel(numNights)}`
    viaje.innerHTML=`Coste viaje: ${costeAvion(city,numNights)}`
    coche.innerHTML=`Coste alquiler coche: ${costeAlquilerCoche(numNights)}`
    total.innerHTML=`Coste total: ${costeTotal}`

}


function costeHotel(numNights) {
    return numNights*140;
}


function costeAvion(city,numNights) {
    let res;
    if (city=="Oviedo") {
        if (numNights>2) {
            res= 12-12*0.10
        }else{
            res= 12;
        }
    }else if (city=="Tokyo") {
        if (numNights>2) {
            res= 700-700*0.10
        }else{
            res= 700;
        }
    }else if (city=="Madrid") {
        if (numNights>2) {
            res= 90-90*0.10
        }else{
            res= 90;
        }
    }else if (city=="Barcelona") {
        if (numNights>2) {
            res= 90-90*0.10
        }else{
            res= 90;
        }
    }

    return res;
}


function costeAlquilerCoche(numNights) {
    let res;
    if (numNights<3) {
        res = numNights * 40 
    }else if (numNights>=3 && numNights<7) {
        res =  (numNights * 40) -20 
    }else if (numNights>=7) {
        res =  (numNights * 40) -50
    }
    return res;
}