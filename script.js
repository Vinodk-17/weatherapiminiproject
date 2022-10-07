function GetInfo() {

    var newName = document.getElementById("searchBar");
    var city = document.getElementById("city");
    city.innerHTML = "Weather in "+newName.value;
  
  
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
  .then(response => response.json())
  .then(data => {

    // for(i=0; i<5; i++){
    //   document.getElementById("Day" + (i+1)).innerHTML = ;
    // }
  
    for(i=0; i<5; i++){
      document.getElementById("temperature" + (i+1)).innerHTML =  Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°";
    }
  
    for(i=0; i<5; i++){
      document.getElementById("windSpeed" + (i+1)).innerHTML = "Wind: " +data.list[i].wind.speed+ " km/h";
    }
    //Getting the min and max values for each day
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
        //Number(1.3450001).toFixed(2); // 1.35
    }
  
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
    //------------------------------------------------------------
  
    //Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("icon" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    //------------------------------------------------------------
    console.log(data)
  
  
  })
  
  .catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
  }
  
  function DefaultScreen(){
    document.getElementById("searchBar").defaultValue = "Nagpur";
    GetInfo();
  }
  
  

  //--------------------------------- Date Function ---------------------//

  //------------Updating the Five days ---------------------------//
  var myDate = new Date();
        var myDay = myDate.getDay();
 var weekday = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];

     for(i=0; i<5; i++){
  if(myDay + i >6){
    document.getElementById("day" + (i+1)).innerHTML = weekday[myDay + i-7] ;
  }
  else{
    document.getElementById("day" + (i+1)).innerHTML = weekday[myDay + i] ;
  }
          
    }

//---------------updating the intial date-------------------//

var Months = ['January', 'February', 'March', 'April', 
                'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'];
          
        var currentDay = new Date();
          
        // Get the current day name
        var day = currentDay.getDate();
          
        // Get the current month name
        var month = Months[currentDay.getMonth()]; 
if(day<10){
        document.getElementById("date1").innerHTML = "0"+day +"  "+ month  ;
}
else{
  document.getElementById("date1").innerHTML = day +"  "+ month  ;
}




   