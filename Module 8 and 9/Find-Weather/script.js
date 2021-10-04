$(document).ready(function(){

   
    var typed = new Typed('.typed', {
        strings: ['Hello,', ' You Can Find Some Weather Info!!'],
        smartBackspace: true ,
        loop: true,
        typeSpeed: 10,
        backSpeed: 10,
      });

$("#search").on("change",function(e){

   var cityname=e.target.value  //let only inside the function
   console.log(cityname)
   const apikey="5e543c67fa42841b54a5440d3135a83a"

//    fetch('https://api.openweathermap.org/data/2.5/weather?q=bhind&appid=5e543c67fa42841b54a5440d3135a83a')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(err=>alert("wrong city"))

//    axios({
//     method: 'get',
//     url:"api.openweathermap.org/data/2.5/weather?q=bhind&appid=5e543c67fa42841b54a5440d3135a83a",
//     responseType: 'JSON'
//   })
//     .then(function (response) {
//      console.log(response)
//     });


$.ajax({
url:"https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=5e543c67fa42841b54a5440d3135a83a",
}).done(function(data){
    console.log(data)
    console.log(data.weather[0].main);
    $("#profile").html(`
    <div class="card" style="width: 28rem",height="26rem">
  <img class="card-img-top" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Card image cap">
  <div class="card-body">
    <h1 class="card-title">Weather Report</h1>
    <h3>Weather : ${data.weather[0].main}</h3>
    <p class="card-text">The temprature of ${cityname} is ${data.main.temp}F</p>
    <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn more about this City</a>
  </div>
</div>
    `)
})



 })

})
