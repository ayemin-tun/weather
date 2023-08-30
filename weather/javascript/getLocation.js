var lat="",long="";
var getLocation = ()=>{
    return new Promise((resolve,reject)=>{
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(
                function(position){
                    lat = position.coords.latitude;
                    long = position.coords.longitude;
                    resolve({lat,long});
                    
                },
                function(error){
                    reject(error.message);
                }
            );
        }else{
            reject("Geolocation is not support Your Computer");
        }
    });
   
}
window.onload = ()=>{
    getLocation()
    .then((location) => {
      const { lat, long } = location;
    })
   
}