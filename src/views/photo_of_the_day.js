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
<h1>{context.photoOfDay.daily_photo}</h1>
</div>
}
</div>
    )}
    </MyContext.Consumer>
  );
}

export default photoOfTheDay;
