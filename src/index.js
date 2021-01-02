const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const uuid = require('uuid');

const app = express();


//Settings
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
const storage = multer.diskStorage({
  destination:path.join(__dirname,'public/arts/uploads'),
  filename:(req,file,cb,filename)=>{
    cb(null,uuid.v4() + path.extname(file.originalname));
  }
})
app.use(multer({storage:storage}).single('image'));

//Routes
app.use(require('./routes/index'))

//Starting Server
app.listen(app.get('port'), () => {
  console.log('SERVER ON PORT ', app.get('port'));
})