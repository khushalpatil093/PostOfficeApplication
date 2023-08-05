$.getJSON("https://api.ipify.org?format=json", function(data){
    $("#IP").html(data.ip);
})

var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: LATITUDE, lng: LONGITUDE },
    zoom: 15
});

var marker = new google.maps.Marker({
    position: { lat: LATITUDE, lng: LONGITUDE },
    map: map,
    title: 'User Location'
});

var timeZone = "TIME_ZONE";

var userTime = luxon.DateTime.now().setZone(timeZone);

$("#user-time").text("User's Local Time: " + userTime.toFormat('yyyy-MM-dd HH:mm:ss'));


var pincode = "PINCODE";
var postOfficeApiUrl = `https://api.postalpincode.in/pincode/${pincode}`;

$.get(postOfficeApiUrl, function(response) {
    var postOffices = response[0].PostOffice;
}, "json");


$("#search-box").on("input", function() {
    var searchText = $(this).val().toLowerCase();
    var postItems = $(".post-item");

    postItems.each(function() {
        var postText = $(this).text().toLowerCase();
        if (postText.includes(searchText)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});
