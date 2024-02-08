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