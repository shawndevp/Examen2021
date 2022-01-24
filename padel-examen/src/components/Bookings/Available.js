import React, {useState} from 'react'
import Calendar from "react-calendar";
import server from "../Global/Server";
import axios from 'axios';
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Available({
    dates
}) {

console.log(dates)

const css = `
.calendar-test {
    display: inline-block;

    

}

.container .navbar-brand{
    color: green;
}

.navbar-toggler  {
    background-color: green;
}




`;


    const [showData, setShowdata] = useState([]);


  const dateArray = [];
  const arrayObj = [];
  for(let i = 0; i < dates.data.length; i++) {
      dateArray.push(dates.data[i].attributes.Date)
  }
  for(let i = 0; i < dates.data.length; i++) {
      const splitT = 
    dateArray[i].split('T');
      const splitDate =
      splitT[0].split('-');
      const splitTime = 
      splitT[1].split(':');
      console.log(splitTime)
    const dateObject = {
        'year': splitDate[0],
        'month': splitDate[1],
        'day': splitDate[2],
        'hour': splitTime[0],
        'minute': splitTime[1]
    }
  
    arrayObj.push(dateObject);
}

  console.log(arrayObj);
  const [value, onChange] = useState(new Date());

  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  const valueArray = [];
  let showArray = [];
//   const [selectedTimes, setSelectedTimes] = useState([]);

  function handleOnClick(value) {
      const isoString = value.toISOString().slice(0.19);
      const splitIso = isoString.split('T');
      const splitIsoDate = splitIso[0].split('-');
      const splitIsoTime = splitIso[1].split(':');
      const chosenYear = splitIsoDate[0];
      const chosenMonth = splitIsoDate[1];
      const chosenDay = splitIsoDate[2];
      const realDay = (Number(chosenDay)+1).toString();
      const chosenHour = splitIsoTime[0];
      const chosenMinute = splitIsoTime[1];
      const chosenDate = {
        'year': chosenYear,
        'month': chosenMonth,
        'day': realDay,
        // 'hour': chosenHour,
        // 'minute': chosenMinute
    }

      valueArray.push(isoString);
      console.log(chosenDate);
      console.log(arrayObj[0]);
      let counter = 0;
      for(let i = 0; i< arrayObj.length; i++) {
        if(chosenDate.year === arrayObj[i].year && 
            chosenDate.month === arrayObj[i].month && 
            chosenDate.day === arrayObj[i].day
            ){
            // console.log(arrayObj[i])
            // setSelectedTimes([...arrayObj[i]]);
             showArray.push(arrayObj[i]);
             console.log(showArray)
            // setShowdata(arrayObj[i]);
            // setShowdata([arrayObj[i]]);
            setShowdata(showArray);
            console.log(showArray)
            // console.log(showData)
        }
        
      }
      if(showArray.length === 0 ) {
        setShowdata([]);
      }
      
      console.log(showArray)
  }

  console.log(showArray)

  const isDateEnabled = (date) => {
    return date >= today;
  };

  const disableFutureDt = (current) => {
    return current.isBefore(today);
  };
   
    return (
        <>
             <div className="mt-5">
             <style>{css}</style>
        <h1 className="text-success">🎾 Boka din tid här 🎾</h1>
        <Calendar
          className="calendar-test"
          onChange={onChange}
          onClickDay={handleOnClick}
          defaultView="month"
          minDate={today}
          value={value}
        />
        <h1>hello</h1>
        
        {showData.length > 0 && showData.map((date => {
            return(
                <div>
{/* // 1. Save selected date to a new state e.g. selectedDate

// 2. If selectedDate isn't null, show book button */}
               <span >{date.hour} {date.minute}</span>
                
               
                </div>
            )
        }))}
        {/* {showArray.length !== 0 ? showArray.map((time,key)=> {
            return(
                <div>
                    {time.hour}
                </div>
            )
        }): <></> 
        } */}
      </div>
        </>
    )
}

export default Available
