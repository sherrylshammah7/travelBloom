function searchPlaces(){
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
