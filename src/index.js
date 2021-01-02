const express =require( 'express');

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);


//Starting Server
app.listen(app.get('port'), () => {
  console.log('SERVER ON PORT ', app.get('port'));
})