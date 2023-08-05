$.getJSON("https://api.ipify.org?format=json", function(data){
    $("#IP").html(data.ip);
})

const nextButton = document.getElementById('get-info');

nextButton.addEventListener("click", function() {
    location.href = './nextPage/ipInfo.html';
});