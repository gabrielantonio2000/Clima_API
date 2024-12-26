window.addEventListener('load', ()=> {

    let lon
    let lat
    //caja1
    let temperaturaValor= document.getElementById('temperatura-valor')
    let temperaturaDescripcion= document.getElementById('temperatura-descripcion')
    //caja2
    let ubicacion= document.getElementById('ubicacion')
    let iconoAnimado= document.getElementById('icono-animado')

    //caja3
    let vientoVelocidad= document.getElementById('viento-velocidad')


    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(posicion =>{
        console.log(posicion.coords.latitude);

        lon= posicion.coords.longitude
        lat= posicion.coords.latitude
        //ubicacion actual
        //const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=e89a76f7d63f4fdf3bf683f33b7d184d`
        
        
        //ubicacion exacta por ciudad
        const url= `https://api.openweathermap.org/data/2.5/weather?q=Guatemala&lang=es&units=metric&appid=e89a76f7d63f4fdf3bf683f33b7d184d`
        //console.log(url);


        fetch(url)
        .then(response => {return response.json()})
        .then(data => {
            //console.log(data.main.temp)
        let temp= Math.round(data.main.temp)
        temperaturaValor.textContent= `${temp} °C`
        //console.log(data.weather[0].description)
        let desc= (data.weather[0].description)
        temperaturaDescripcion.textContent=desc.toUpperCase()
        
        console.log(data.name)
        ubicacion.textContent = data.name

        console.log(data.wind.speed)
        vientoVelocidad.textContent = `${data.wind.speed} m/s`


        //PARA TRABAJAR LOS ICONOS ESTATICOS DE LA API 
        // console.log(data.weather[0].icon)
        // let iconCode= data.weather[0].icon
        // const urlIcon= `https://openweathermap.org/img/wn/${iconCode}.png`
        // console.log(urlIcon)
        
    
    })
        .catch(error =>{
            console.log(error)
        })
        
    })
    }
})