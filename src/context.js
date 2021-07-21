import React, { Component, createContext } from 'react'
import MY_SERVICE from './services/apod_services'
export const MyContext = createContext()

class MyProvider extends Component {
  state={
    photoOfDay:{},
    photoByDay:{}
      }
     componentWillMount(){
        this.getPhotoOfDay();
          }

    getPhotoOfDay=()=>{ 
    MY_SERVICE.getPhotoOfDay()
    .then(( {data} ) => {
      console.log(data.daily_photo)
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