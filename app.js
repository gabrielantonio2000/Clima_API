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
        



        //ESTO ES PARA ICONOS ANIMADOS EN FORMATO SVG EN LA PAGINA AMCHARTS
            console.log(data.weather[0].main)
            
           
        switch (data.weather[0].main) {
            case 'Thunderstorm':
                iconoAnimado.src='animated/thunder.svg'
                console.log('Tormenta');
                break;

            case 'Drizzle':
                iconoAnimado.src='animated/rainy-2.svg'
                console.log('Llovizna');
                break;

            case 'Rain':
                iconoAnimado.src='animated/rainy-7.svg'
                console.log('Lluvia');
                break;

            case 'Snow':
                iconoAnimado.src='animated/rainy-6.svg'
                console.log('Nieve');
                break;
            case 'Clear':
                        iconoAnimado.src = 'animated/day.svg'
                        console.log('LIMPIO');
                      break;
            case 'Atmosphere':
                iconoAnimado.src = 'animated/weather.svg'
                 console.log('Atmosfera');
                 break;        
            case 'Clouds':
                      iconoAnimado.src = 'animated/cloudy-day-1.svg'
                      console.log('Nubes')
                      break;   
            default:
                          iconoAnimado.src='animated/cloudy-day-1.svg'
                          console.log('Por defecto');
        }
    
    })
        .catch(error =>{
            console.log(error)
        })
        
    })
    }
})