window.addEventListener('load', ()=> {
    if(navigator.geolocation){
        var options ={
            enableHighAccuracy:true,
            timeout: 5000,
            maximunAge:0
        };

        function succes(pos){
            var crd= pos.coords;

            console.log('Your current position is: ');
            console.log('Latitud: ' + crd.latitude);
            console.log('Longitude: '+ crd.longitude);
            console.log('More or less '+ crd.accuracy + 'meters.');
        };

        function error(err){
            console.warn('Error (' + error.code +  '): ' + err.message);
        };


    }
})