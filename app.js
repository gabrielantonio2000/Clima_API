window.addEventListener('load', ()=> {

    let lon
    let lat
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(posicion =>{
        console.log(posicion.coords.latitude);

        lon= posicion.coords.longitude
        lat= posicion.coords.latitude
        //ubicacion actual
        //const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e89a76f7d63f4fdf3bf683f33b7d184d`
        
        
        //ubicacion exacta por ciudad
        const url= `https://api.openweathermap.org/data/2.5/weather?q=Guatemala&lang=es&units=metric&appid=e89a76f7d63f4fdf3bf683f33b7d184d`
        console.log(url);
    })
    }
})