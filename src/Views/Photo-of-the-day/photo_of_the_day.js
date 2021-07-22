import { MyContext } from '../../Context/context-Apod'

function photoOfTheDay() {
  return (
    <MyContext.Consumer>
{context =>(  
<div>
{
  context.message!=="error" && context.photoOfDay.media_type === "video" ?
  <div>
    <div>
    <div>
    <div className="container" style={{ height:'100vh'}}>
    <div className="row">
    <div className="row detail-photo-div my-3 ">
    <div className="col-12 col-md-6 text-white">
    <div className="py-5">
    <h2 className="text-center">
    Sorry, this is not a image click to see video: 
    </h2>             
    <a href={context.photoOfDay.url}><button>VIDEO</button></a>
    <p>
    <b>Select other date:</b>
    </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
</div>
:
    context.message==="error"?
    <div>
    <div>
    <div className="container" style={{ height:'100vh'}}>
    <div className="row">
    <div className="row detail-photo-div my-3 ">
    <div className="col-12 col-md-6 text-white">
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
:
context.message ==="empty" ?
<div>
<div>
<div className="container">
<div className="row">
<div className="row detail-photo-div my-3 ">
<div className="col-12 col-md-6 text-white">
      </div>
    </div>
  </div>
</div>
  </div>
</div>
:
    <div>
    <div className="container" style={{ height:'100%'}}>
    <div className="row p-5">
      <h3 className="text-white text-center pt-5">Foto del día</h3>
    <div className="row detail-photo-div my-4 ">
    <div className="col-12 col-md-4">
    <img src={context.photoOfDay.hdurl} className="img-photo-detail py-auto" alt={context.photoOfDay.date} />
    </div>
    <div className="col-12 col-md-6 text-white">
    <h2 className="text-center">
    {context.photoOfDay.title} 
    </h2>
    <div className="py-3">
    <p>
    <b>Fecha:</b>{context.photoOfDay.date}
    </p>
    <p>
    <b>Descripción:</b>{context.photoOfDay.explanation}
    </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    }
    </div>
    )}
    </MyContext.Consumer>
  );
}

export default photoOfTheDay;
