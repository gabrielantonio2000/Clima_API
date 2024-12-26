window.addEventListener('load', ()=> {

    let lon
    let lat
    //caja1
    let temperaturaValor= document.getElementById('temperatura-valor')
    let temperaturaDescripcion= document.getElementById('temperatura-descripcion')
    //caja2
    let ubicacion= document.getElementById('ubicacion')
    let iconoAnimado= document.getElementById=('icono-animado')

    //caja3
    let vientoVelocidad= document.getElementById('viento-velocidad')


    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(posicion =>{
        console.log(posicion.coords.latitude);

        lon= posicion.coords.longitude
        lat= posicion.coords.latitude
        //ubicacion actual
        //const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e89a76f7d63f4fdf3bf683f33b7d184d`
        
        
        //ubicacion exacta por ciudad
        const url= `https://api.openweathermap.org/data/2.5/weather?q=Guatemala&lang=es&units=metric&appid=e89a76f7d63f4fdf3bf683f33b7d184d`
        //console.log(url);


        fetch(url)
        .then(response => {return response.json()})
        .then(data => {
            console.log(data)
        })

        .catch(error =>{
            console.log(error)
        })
        
    })
    }
})