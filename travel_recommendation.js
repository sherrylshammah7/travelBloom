function searchPlaces() {
    console.log("hello");
    fetch('./travel_recommendation_api.json')
.then(res=>res.json())
.then((data) => {
   // console.log(data.countries[0].name)
    const placeInfo = document.getElementById('travellist');
    placeInfo.innerHTML =  `<ul>
    <li>Countries: ${data.countries[0].name}</li>
    
    </ul>`;
   // data.forEach(function(data){

       
   // });
    document.getElementById('searchVacation');

})
}
function showVacationDetails(event) {
    event.preventDefault();
}
/*fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
})
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

`
    <ul>
    <li>Countries: ${data.countries}</li>
    
    </ul>
    `;
*/
