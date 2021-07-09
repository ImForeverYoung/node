import toDoItem from '../models/toDoItem.js'

export default async (req, res)=>{
    try{
        const { heading = null}=req.body;
        if(!heading){
            return res.status(400).json({message: "Некоторые поля не заполнены"})
        }
        toDoItem.findOneAndUpdate({heading: heading},{isFinished:true}, {new: true}, function(err, user){
     
            
            if(err) return console.log(err);
            console.log("Обновленный объект", user);
        });
        res.json({message:'Success'});
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Емае трабл с серваком"})
    }
    //res.json({message:'Login works'})
}