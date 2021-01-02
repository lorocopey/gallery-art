const {Router}=require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.send('index page');
})

router.get('/upload',(req,res)=>{
    res.render('upload');
})

router.post('/upload',(req,res)=>{
    console.log(req.file)
    res.send('uploaded');
})

router.get('/image/:id', (req,res)=>{
    res.send('Image Profile')
})

router.get('/image/:id/delete/',(req,res)=>{
    res.send('image deleted');
})

module.exports=router;