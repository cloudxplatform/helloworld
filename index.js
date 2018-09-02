require('@google/cloud-debug');

exports.helloworld=function helloworld(req,res){
    let name=req.query.name||'Roma';
    res.status(200).send('Hi from ${name}.');
}
