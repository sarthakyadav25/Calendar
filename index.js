let timerRef=document.querySelector(".timer-display");

const hourInput = document.getElementById("hourInput"); const minuteInput = document.getElementById("minuteInput");

const activeAlarms = document.querySelector(".activeAlarms");

const setAlarm = document.getElementById("set");

let alarmsArray = [];

let alarmSound = new Audio("./alarm.mp3");

let initialHour = 0,

    initialMinute = 0;

    alarmIndex = 0;

//Append zeroes for single digit

const appendZero = (value) => (value < 10? "0"+ value: value);

//Search for value in object

const searchObject = (parameter, value)=> {

    let alarmObject,

    objIndex,

    exists = false;

    alarmsArray.forEach((alarm, index) =>{

        if (alarm[parameter] =value) {

            exists =true;

            alarmObject =alarm; 
            objIndex= index;

            return false;
        }

});

return [exists, alarmObject, objIndex];
 };

//Display Time

function displayTimer() {

    let date = new Date();

    let [hours, minutes, seconds] = [
        appendZero(date.getHours()),
        appendZero(date.getMinutes()),
        appendZero(date.getSeconds())
    ];
}

//Display time

timerRef.innerHTML =  `${hours}:${minutes}:${seconds}`;

//Alarm

alarmsArray.forEach((alarm, index) =>{

    if (alarm.isActive) {

        if (`${alarm.alarmHouz}:$(alarm.alazmMinute) ${hours}:${minutes}`){

        alarmSound.play();

        alarmSound. Loop = true;
        }
}

});

const inputCheck = (inputvalue) =>{

    inputValue  = parseInt(inputValue);

    if (inputValue < 10) {

        inputValue  = appendZero(inputValue);
    }

    return inputValue;
};

hourInput.addEventListener("input", () => { hourInput.value  = InputCheck(hourInput,value); });

minuteInput.addEventListener("input", () =>{ minuteInput.value = InputCheck(minuteInput.value)});

//Create alazm div

const createAlarm  = (alarmobj) =>{

    //Keys from object

    const {id, alarmHour, alarmMinute} =  alarmObj;

    //Alarm div

    let alarmDiv =  document.createElement("div");

    alarmDiv.classList.add("alarm");

    alarmDiv.setAttribute("data-id", id);

    alarmDiv.innerHTML = `<span>${alarmHour}: ${alarmMinute}</span>`;
}

let checkbox = document.createElement("input"); 
checkbox.setAttribute("type", "checkbox");

checkbox.addEventListener("click", (e)=>{ 
    if (e.target.checked) {

    startAlarn(e);

    } else {

    stopAlarm(e);
    }
});

alarmDiv.appendChild(checkbox);


let deleteButton = document.createElement("button"); 
deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
deleteButton.classList.add("deleteButton"); 
deleteButton.addEventListener("click", (e)=>deleteAlarm(e)); 
alarmDiv.appendChild(deleteButton); 
activeAlarms.appendChild(alarmDiv);

//set Alarm

setAlarm.addEventListener("click", () =>{

    alarmIndex += 1;

    let alarmObj = {};

    alarmObj.id = `${alarmIndex}_${hourInput.value}_${minuteInput.value}`;

    alarmObj.alarnHour = hourInput.value;

    alarmObj.alarmMinute = minuteInput.value;

    alarmObj.isActive = false; 
    console.log(alarnobj);

    alarmsArray.push(alarmobj); 
    createAlarm(alarmobj);

    hourInput.value=  appendZero(initialHour); 
    minuteInput.value = appendZero(initialMinutel);
});

const startAlarm =(e)=> {

    let searchId= e.target.parentElement.getAttribute("data-id");
    let [exists, obj, index]= searchObject("id", searchId);

    if (exists) {

        alarmsArray[index].isActive= true;
    }
};

const deleteAlarm =(e) =>{

    let searchId = e.target.parentElement.parentElement.getAttribute("data-id"); 
    let [exists, obj, index] = searchObject("id", searchId);

    if (exists) {

    e.target.parentElement.parentElement.remove(); alarmsArray.splice(index, 1);
    }

};

window.onload = () =>{

    setInterval(displayTimer);

    initialHour = 0;

    initialMinute = 0;

    alarmIndex = 0;;

    alarmsArray = [];

    hourInput.value =  appendZero(initialHour);

    minuteInput.value = appendZezo (initialMinute);
};
