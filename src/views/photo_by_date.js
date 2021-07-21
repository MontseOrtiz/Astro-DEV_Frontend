import React from 'react';
import Search from './components/Search';
import MY_SERVICE from '../services/apod_services'

class photoByDay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photo: {}
    };
  }

  sendSearch = (date) => {
    MY_SERVICE.getPhotoByDay(date)
    .then(({ data, status}) => {
      this.setState({ photoUrl: data.date });
    })
    .catch((error) => {
      console.log(error);
    });
  };

  render() {
    return (
    <div>
      <Search emitSearch={this.sendSearch} />
      <div>
      <img src={this.state.photo.hdurl} alt={this.state.photo.date}></img>
      <h1>{this.state.photo.date}</h1>
      <p>{this.state.photo.explanation}</p>
      </div>
      </div>);
  }
}

export default photoByDay;