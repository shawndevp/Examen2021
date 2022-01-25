import React, {useState} from 'react'
import Calendar from "react-calendar";
import server from "../Global/Server";
import axios from 'axios';
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../Global/Footer'
function Available({
    dates,
    hasBooked
}) {

console.log(dates)

const css = `
.calendar-test {
    display: inline-block;

    

}

// .container .navbar-brand{
//     color: green;
    
// }

// .navbar-toggler  {
//     background-color: green;
// }

// .nav-item .nav-link .text-white {
//     color: green;
// }

body {
    background-image: url('https://images.unsplash.com/photo-1622668459907-f1fa3113bbcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2904&q=80');
    background-repeat: no-repeat;
  background-size: 100% 100%;
}


`;

// setting css for <style> just for Available.js

const image1 =
    "https://images.unsplash.com/photo-1531819318554-84abdf082937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2246&q=80";
    const [showData, setShowdata] = useState([]);
    const userId = localStorage.getItem("user_id");


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
        'minute': splitTime[1],
        'id': dates.data[i].id,
        'isBooked': dates.data[i].attributes.isBooked
    }
  
    arrayObj.push(dateObject);
}

  console.log(arrayObj);


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

  const [value, onChange] = useState(new Date());

  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  // Preset and adjustments for the calendar extension -> setting current date as display and not dates that have passed. 
  
   
    return (
        <>
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      />
             <div className="mt-5" >
             <style>{css}</style>
        <h1 className="text-secondary"><strong>🎾 Boka din tid här 🎾</strong></h1>
        <Calendar
          className="calendar-test"
          onChange={onChange}
          onClickDay={handleOnClick}
          defaultView="month"
          minDate={today}
          value={value}
        />
        
        {showData.length > 0 ? showData.map((date => {
             function handleSubmitBooking(e) {
                 console.log(date)
                e.preventDefault();
                if(hasBooked) {
                    return(
                        alert('Du har redan en bokad tid.')
                    )
                }
                const addBooking = async () => {
                  await axios.post(`${server}/api/Bookings`, {
                    'data':{
                        'users_permissions_user': userId,
                        'available': date.id
                    }
                  });
                  await axios.put(`${server}/api/Availables/${date.id}`, {
                    'data':{
                        'isBooked': true
                    }
                  });
                  await axios.put(`${server}/api/users/${userId}`, {
                    
                        'hasBooked': true
                    
                  })
                  .then(window.location.reload())
                };
                
                addBooking();
              }
            console.log(date.isBooked)
              // Submit the booking of the available time that the user have selected.
              // Function in the map to correctly specify available time and not selecting "all" available times.
              // Put into DB isbooked -> hasBooked to prevent multiple bookings ug... 1 bookping per person.

              {/* // 1. Save selected date to a new state e.g. selectedDate
                  // 2. If selectedDate isn't null, show book button */}
              if(date.isBooked === false) {

              
            return(
                <div className="m-3">
               <button type="button" className="btn btn-success" onClick={handleSubmitBooking}>Boka ledig tid → {date.hour}:{date.minute}</button>
                </div>
            )
        } else {
            return(
                false,
                <div className="m-3">
                <button type="button" className="btn btn-danger disabled" >Upptagen tid → {date.hour}:{date.minute}</button>
                </div>
            )
        }
        })) : <h4 className="text-danger pt-3">Inga tillgängliga tider 😞 </h4>}
      </div>
      <Footer/>
        </>
    )
}

export default Available
