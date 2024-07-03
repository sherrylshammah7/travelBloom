//const btnSearch = document.getElementById('btnsearch');

/*function searchPlaces() {
    console.log("inside js file")
    //const input = document.getElementById('conditionInput').value.toLowerCase();
    const input = document.getElementById('conditionInput').ariaValueMax.toLowerCase();
    const resultDiv = document.getElementById('travellist');
    resultDiv.innerHTML = '';

    fetch('./travel_recommendation_api.json')
.then(res=>res.json())
.then((data) => {
   const condition = data.countries.find(item => item.name.toLowerCase() === input);

   //console.log("data",input)
   
    const placeInfo = document.getElementById('travellist');

    if (condition) {
        const countries = condition.countries.join(', ');
        const temples = condition.temples.join(', ');
        const beaches = condition.beaches;

        console.log('inside country')
        resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
        resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;
      } else {
        resultDiv.innerHTML = 'Condition not found.';
      }    
    placeInfo.innerHTML =  `<ul>
    <li>Countries: ${data.countries[0].name}</li>
    <li><img src="${data.countries[0].imageUrl}" alt="hjh"></li>
    
    </ul>`;
   // data.forEach(function(data){

       
   // });
   

        <li><img src="${data.beaches[0].imageUrl}" alt="hjh"></li>
});
}
//btnSearch.addEventListener('submit', searchPlaces);
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


function searchPlaces(){
    console.log("hey")
    const input = document.getElementById('conditionInput');

  const filter = input.value.toLowerCase();

    const resultDiv = document.getElementById('travellist');
    resultDiv.innerHTML = '';

    fetch('./travel_recommendation_api.json')
.then(res=>res.json())
.then((data) => {
    console.log("beaches",data.beaches[0].name)
    for (var key in data) {
        for (var i = 0; i < data[key].length; i++) {
            var name = data[key][i].name;
            var desc = data[key][i].description;
            var pic = data[key][i].imageUrl;
            if(filter == "beaches"){

                resultDiv.innerHTML =  `<ul>
                <li>${name}</li>
                <li>${desc}</li>
                
                </ul>`
            }
        }
    }
   
    

});
}