import React from 'react';
import Search from '../components/Search';
import MY_SERVICE from '../services/apod_services'

export default class PhotoByDay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photo: {},
      message:"empty"
    };
  }

  sendSearch = (date) => {
    this.setState({ photo: {}});
    MY_SERVICE.getPhotoByDay(date)
    .then(({ data}) => {
      this.setState({ message: data.message });
      this.setState({ photo: data.daily_photo });
    })
    .catch((error) => {
      console.log(error);
    });
  };

  render() {
    return (
 <div>
{
  this.state.message!=="error" && this.state.photo.media_type === "video" ?
  <div>
    <div>
    <div>
    <div className="container">
    <div className="row">
    <div className="row detail-photo-div my-3 ">
    <div className="col-12 col-md-6 text-white">
    <div className="py-5">
    <h2 className="text-center">
    Sorry, this is not a image click to see video: 
    </h2>             
    <a href={this.state.photo.url}><button>VIDEO</button></a>
    <p>
    <b>Select other date:</b>
    </p>
    <Search emitSearch={this.sendSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
</div>
:
    this.state.message==="error"?
    <div>
    <div>
    <div className="container">
    <div className="row">
    <div className="row detail-photo-div my-3 ">
    <div className="col-12 col-md-6 text-white">
    <div className="py-5">
    <h2 className="text-center">
    Sorry select other date: 
    </h2>             
    <Search emitSearch={this.sendSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
:
this.state.message ==="empty" ?
<div>
<div>
<div className="container">
<div className="row">
<div className="row detail-photo-div my-3 ">
<div className="col-12 col-md-6 text-white">
<div className="py-5">
<h2 className="text-center">
Select a date: 
</h2>             
<Search emitSearch={this.sendSearch} />
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
:
    <div>
    <div className="container">
    <div className="row">
    <div className="row detail-photo-div my-3 ">
    <div className="col-12 col-md-4">
    <img src={this.state.photo.hdurl} className="img-photo-detail py-auto" alt={this.state.photo.date} />
    </div>
    <div className="col-12 col-md-6 text-white">
    <h2 className="text-center">
    {this.state.photo.title} 
    </h2>
    <div className="py-3">
    <p>
    <b>Fecha:</b>{this.state.photo.date}
    </p>
    <p>
    <b>Descripción:</b>{this.state.photo.explanation}
    </p>
    <p>
    <b>Select other date:</b>
    </p>
    <Search emitSearch={this.sendSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    }
    </div>
      )
  }
}
