var res =  fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
var box = document.createElement("div");
box.setAttribute("class", "box");
var box1 = document.createElement("div");
box1.setAttribute("class", "container");
var row = document.createElement("div");
row.setAttribute("class", "row");
    for(var i=0; i<=data1.length; i++){
       // console.log(data1[i].name);

        var div=document.createElement("div");
        div.className='col col-md-4';
      /* div.innerHTML = `${data1[i].name}`;*/
      
      div.innerHTML =  ` 
    
            
                        <div class="card text-center text-white bg-dark" >
                        <div class="card-header">${data1[i].name}</div>
                                <img class="card-img-top" src="${data1[i].flag}" height=200px; alt="Card image cap">
                            <div class="card-body">
                               
                                <h5 class="card-title"><b>Capital: </b>${data1[i].capital}</h5>
                                <h5 class="card-title"><b>Region: </b>${data1[i].region}</h5>
                                <h5 class="card-title"><b>SubRegion: </b>${data1[i].subregion}</h5>
                                <!--<h5 class="card-title"><b>LatIng: </b>${data1[i].callingCodes}</h5>-->
                                <h5 class="card-title"><b>LatIng: </b>${data1[i].latlng}</h5>
                                <button onclick = "foo('${data1[i].name}')" class="btn btn-dark btn-outline-light">Click for Weather</button>
                            </div>
                        </div>
                   
       
      `;
      row.append(div);
      box1.append(row);
      box.append(box1);
      
      document.body.append(box);
        
}});
function foo(country) {
  
    var apiKey = '2070338bdfe63e07dd44727eb5c85c05';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`)
      .then((data) => data.json())
      .then((data) => {
      
        alert(`Weather in ${country}: ${data.weather[0].main}, ${data.weather[0].description}`);
      })
      .catch((error) => {
        alert('Error');   
      });
  }