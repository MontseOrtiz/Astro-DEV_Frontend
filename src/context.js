import React, { Component, createContext } from 'react'
import MY_SERVICE from './services/apod_services'
export const MyContext = createContext()

class MyProvider extends Component {
  state={
    photoOfDay:{},
    photoByDay:{},
    today:{}
      }
     componentWillMount(){
        this.getPhotoOfDay();
      }
      componentDidMount(){
      this.getDateToday();
    }

    getPhotoOfDay=()=>{ 
    MY_SERVICE.getPhotoOfDay()
    .then(( {data} ) => {
      this.setState({photoOfDay:data.daily_photo});
     })
     .catch(err => console.log(err));
  }
  
 // getPhotoByDay=()=>{ 
   // MY_SERVICE.getPhotoByDay()
    //.then(( {data} ) => {
     // this.setState({photo:data});
     //})
     //.catch(err => console.log(err));
  //}
  getDateToday=()=>{
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
today = yyyy+'-'+mm+'-'+dd;
this.setState({today:today});

//let dateInput = document.getElementById("datefield")
//dateInput.setAttribute("max", today)
  }

    render() {
        return (
            <MyContext.Provider
              value={{
                photoOfDay: this.state.photoOfDay
              }}
            >
              {this.props.children}
            </MyContext.Provider>)
}
}
export default MyProvider;