exports.crow = (req,res)=>{
    res.send("hi "+req.user)
}

exports.user =(req,res,next)=>{
    req.user="log";
    next();
}

exports.op =(req,res,next)=>{
    if(req.user=="lohg"){
        next();    }
    res.send("failed");
}