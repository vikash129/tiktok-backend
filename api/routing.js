import express from 'express'

const router = express.Router();

import videoModel from './dbModels.js'


    // api config
router.get("/", async (req, res) => {

    videoModel.find( (err , data) => {
        res.status(200).send(data);
    })

  
});





//api endpoints
router.post('/video/upload' , (req , res) => {
    const videoData = req.body ;

    videoModel.create( videoData , (err , data) => {
        if(err){
            res.status(500).send( err) ;
        }
        else{
            res.status(201).send(data) ;
        }
    })
} 
)


export default router;
