import toDoItem from '../models/toDoItem.js'

export default async (req, res)=>{
    try{
        const result = toDoItem.find({isFinished: false},function(err, docs){
            // mongoose.disconnect();
             
            if(err) return console.log(err);
             
            console.log(docs);
            res.send(
                docs
            )
        });
        
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Емае трабл с серваком"})
    }
    
}