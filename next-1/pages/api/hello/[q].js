export default (req,res)=>{
     res.status(200).json({message:`i love ${req.query.q}`})
    }