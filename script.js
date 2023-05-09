const bgImage = document.querySelector("#container");
let daysTag = document.querySelector(".daysList");
let _Date = new Date;
let _month = _Date.getMonth();
let _weekday = _Date.getDay();
let _year = _Date.getFullYear();

monthArray = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
weekArray = ["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday"];            

document.addEventListener('DOMContentLoaded', function () {
    gotoDate();
});

setInterval(timeUpdate, 1000);
function timeUpdate(){
    const dateTime = new Date();
    document.getElementById("time").innerText = "LOCAL TIME: " + dateTime.toLocaleTimeString();
} 

function gotoDate(){
    _month = _Date.getMonth();
    _weekday = _Date.getDay();
    _year = _Date.getFullYear();
    datex = _Date.getDate();

    document.querySelector(".month").value = monthArray[_month];
    document.querySelector(".weekDay").value = weekArray[_weekday];
    document.querySelector("#year").value = _year;

    let lastDateOfMonth = new Date(_year, _month + 1, 0).getDate();
    let liTag = "";
    for (let j=1; j<=lastDateOfMonth; j++){
        liTag += `<li id= ${100+j} onclick="selectday(this)">${j}</li>`;
        
    }
    daysTag.innerHTML = liTag;

    document.getElementById(100+datex).style.color="red";
    document.getElementById(100+datex).style.backgroundColor="yellow";

    if (_weekday == 0){
        document.querySelector(".weekDay").style.color="lime"; 
     }
     else{
        document.querySelector(".weekDay").style.color="white";
     }

    MyF_month(_month);

    if (_month == 3 && datex == 24){
        bgImage.style.backgroundImage = "url(./images/April.jpg)";
        document.getElementById("content").style.visibility="visible";
    }
    else {
        let selection = document.getElementById("0").value;
        document.getElementById("content").style.visibility="hidden";
        MyF_month(selection);
    }
    if (_year == 1915){
        document.getElementById("year").style.color="red"
    }
    else{
        document.getElementById("year").style.color="white"
    }
}

function selectday(xID){
    let target = (document.getElementById(xID.id).id - 100);
    let lastDateOfMonth = new Date(_year, _month + 1, 0).getDate();

    for (let i=101; i<=(lastDateOfMonth+100); i++){
        document.getElementById(i).style.color="white";
        document.getElementById(i).style.backgroundColor="transparent";    
    }

    document.getElementById(xID.id).style.color="red";
    document.getElementById(xID.id).style.backgroundColor="yellow";

    const setDate = new Date(_year, _month, target);
   
    let newDay = setDate.getDay();
    document.querySelector(".weekDay").value = weekArray[newDay];

    if (newDay == 0){
        document.querySelector(".weekDay").style.color="lime"; 
     }
     else{
        document.querySelector(".weekDay").style.color="white";
     }

    if (_month == 3 && target == 24){
        bgImage.style.backgroundImage = "url(./images/April.jpg)";
        document.getElementById("content").style.visibility="visible";
    }
    else {
        let selection = document.getElementById("0").value;
        document.getElementById("content").style.visibility="hidden";
        MyF_month(selection);
    }
}

function calender(){
    if (_year == 1915){
        document.getElementById("year").style.color="red"
    }
    else{
        document.getElementById("year").style.color="white"
    }
    switch(document.getElementById("0").value){
        case "Jan":
            _month = 0;
            break;
        case "Feb":
            _month = 1;
            break; 
        case "Mar":
            _month = 2;
            break;
        case "Apr":
            _month = 3;
            break; 
        case "May":
            _month = 4;
            break; 
        case "Jun":
            _month = 5;
            break;
        case "Jul":
            _month = 6;
            break; 
        case "Aug":
            _month = 7;
            break;
        case "Sep":
            _month = 8;
            break; 
        case "Oct":
            _month = 9;
            break;
        case "Nov":
            _month = 10;
            break; 
        case "Dec":
            _month = 11;
            break; 
        default:
            _month = 0;
            break;        
    }
    
    _year = document.getElementById("year").value;
    let lastDateOfMonth = new Date(_year, _month + 1, 0).getDate();
    let liTag = "";
    for (let j=1; j<=lastDateOfMonth; j++){
        liTag += `<li id= ${100+j} onclick="selectday(this)">${j}</li>`;
    }
    daysTag.innerHTML = liTag;
}

function selectMonth(){
    let selection = document.getElementById("0").value;
    calender();
    MyF_month(selection);
}

function prevY(){
    _year--;
    if (_year < 1){
        _year = 1;
    }
    document.getElementById("year").value = _year;
    calender();
}

function nextY(){
    _year++;
    document.getElementById("year").value = _year;
    calender();
}

function MyF_month(selection){
    switch(selection){
        case "Jan":
        case 0:
            bgImage.style.backgroundImage = "url(./images/snow.jpg)";
            break;
        case "Feb":
        case 1:
            bgImage.style.backgroundImage = "url(./images/rain.jpg)";
            break;
        case "Mar":
        case 2:
            bgImage.style.backgroundImage = "url(./images/spring.jpg)";
            break; 
        case "Apr":
        case 3:    
            bgImage.style.backgroundImage = "url(./images/spring2.jpg)";
            break; 
        case "May": 
        case 4:
            bgImage.style.backgroundImage = "url(./images/spring3.jpg)";
            break;                   
        case "Jun": 
        case 5:
            bgImage.style.backgroundImage = "url(./images/summer.jpg)";
            break;  
        case "Jul":
        case 6:
            bgImage.style.backgroundImage = "url(./images/summer2.jpg)";
            break;          
        case "Aug":
        case 7:
            bgImage.style.backgroundImage = "url(./images/summer3.jpg)";
            break;        
        case "Sep":
        case 8:
            bgImage.style.backgroundImage = "url(./images/autumn.jpg)";
            break;   
        case "Oct":
        case 9:
            bgImage.style.backgroundImage = "url(./images/autumn2.jpg)";
            break;      
        case "Nov":
        case 10:
            bgImage.style.backgroundImage = "url(./images/autumn3.jpg)";
            break;      
        case "Dec":
        case 11:
            bgImage.style.backgroundImage = "url(./images/winter.jpg)";
            break;  
        default:
            alert("Error, image not found!!!");
            break;    
    }
    if (_month == 3 && datex == 24){
        bgImage.style.backgroundImage = "url(./images/April.jpg)";
        document.getElementById("content").style.visibility="visible";
    }
    else {
        let selection = document.getElementById("0").value;
        document.getElementById("content").style.visibility="hidden";
        MyF_month(selection);
    }
}