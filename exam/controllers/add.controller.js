import toDoItem from '../models/toDoItem.js'

export default async (req, res) =>{
    try{
        const { heading = null, description=null}=req.body;
        console.log(heading,description);
        if(!heading||!description){
            return res.status(400).json({message: "Некоторые поля не заполнены"})
        }
        if(!(typeof heading === 'string')|| !(typeof description === 'string')){
            return res.status(400).json({message:'Invalid format of heading or description'})
        }
        const candidate = await toDoItem.findOne({heading: heading, isFinished: false});
        
        if(candidate){
            return res.status(400).json({message:"Такая задача уже поставлена"})
        }
        let isFinished=false;
        const item=new toDoItem({
            heading,
            description,
            isFinished,
        })
        await item.save();
        res.json({message:'Success'});
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Емае трабл с серваком"})
    }
}