import { MyContext } from '../context'

function photoOfTheDay() {
  return (
    <MyContext.Consumer>
{context =>(  
  <div class="home">
    {
context.photoOfDay.length === 0?
<h1>cargando</h1>
: 
<div>
<img src={context.photoOfDay.hdurl} alt={context.photoOfDay.date}></img>
<h1>{context.photoOfDay.date}</h1>
<p>{context.photoOfDay.explanation}</p>
</div>
}
</div>
    )}
    </MyContext.Consumer>
  );
}

export default photoOfTheDay;
