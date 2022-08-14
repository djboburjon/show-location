function qayerdaman() {
    if (!navigator.geolocation) {
        alert("Unable to determine.");
        return false;
    }
    function topdi(joy) {
        location.href = "https://google.com/"
            + "maps/?q=" + joy.coords.latitude 
            + "," + joy.coords.longitude;
    }
    function xato() {
        alert("Location could not be determined.");
    }
    navigator.geolocation
        .getCurrentPosition(topdi, xato);
}