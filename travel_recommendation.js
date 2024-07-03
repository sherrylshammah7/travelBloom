const btnSearch = document.getElementById('btnsearch');

function searchPlaces() {
    console.log("hello");

    const input = document.getElementById('searchbar').value.toLowerCase();
    const resultDiv = document.getElementById('travellist');
    resultDiv.innerHTML = '';

    fetch('./travel_recommendation_api.json')
.then(res=>res.json())
.then((data) => {
   // console.log(data.countries[0].name)
   const condition = data.countries.find(item => item.name.toLowerCase() === input);
   console.log('condition',condition)
    const placeInfo = document.getElementById('travellist');

    const countries = data.countries.name;
    console.log('condition1',countries)
        const temples = data.temples;
        console.log('condition2',temples)
        const beachs = data.beaches;
        console.log('condition3',beachs)

    if (condition) {
        const countries = data.countries.name;
        const temples = data.temples;
        const beachs = data.beaches;

        resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
        resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

        resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
        resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
        resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
      } else {
        resultDiv.innerHTML = 'Condition not found.';
      }    
    placeInfo.innerHTML =  `<ul>
    <li>Countries: ${data.countries[0].name}</li>
    <li><img src="${data.countries[0].imageUrl}" alt="hjh"></li>
    
    </ul>`;
   // data.forEach(function(data){

       
   // });
   btnSearch.addEventListener('click', searchPlaces);

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

