import React, { Component, createContext } from 'react'
import MY_SERVICE from './services/apod_services'
export const MyContext = createContext()

class MyProvider extends Component {
  state={
    photoOfDay:{},
    message:"empty",
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
      this.setState({ message: data.message });
      this.setState({photoOfDay:data.daily_photo});
     })
     .catch(err => console.log(err));
  }
  
  getDateToday=()=>{
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
  today = yyyy+'-'+mm+'-'+dd;
  this.setState({today:today});
  }

    render() {
        return (
            <MyContext.Provider
              value={{
                photoOfDay: this.state.photoOfDay,
                message:this.state.message,
                today: this.state.today
              }}
            >
              {this.props.children}
            </MyContext.Provider>)
}
}
export default MyProvider;