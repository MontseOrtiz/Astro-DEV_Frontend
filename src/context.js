import React, { Component, createContext } from 'react'
import MY_SERVICE from './services/index'
export const MyContext = createContext()

class MyProvider extends Component {
  state={
    photoOfDay:{},
    photo:{}
      }
      componentWillMount(){
        this.getPhotoOfDay();
          }

    getPhotoOfDay=()=>{ 
    MY_SERVICE.getPhotoOfDay()
    .then(( {data} ) => {
        console.log(data)
      this.setState({photoOfDay:data});
     })
     .catch(err => console.log(err));
  }
  
  getPhotoByDay=()=>{ 
    MY_SERVICE.getPhotoByDay()
    .then(( {data} ) => {
      this.setState({photo:data});
     })
     .catch(err => console.log(err));
  }

    render() {
        return (
            <MyContext.Provider
              value={{
                getPhotoOfDay: this.state.getPhotoOfDay,
                getPhotoByDay: this.state.getPhotoByDay
              }}
            >
              {this.props.children}
            </MyContext.Provider>)
}
}
export default MyProvider;