if('geolocation' in navigator) {
    navigator.geolocation.
    getCurrentPosition(function
    (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude
        console.log('latitude',lat,'longitude', long)
    });
} else {
    
}