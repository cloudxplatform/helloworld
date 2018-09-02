require('@google/cloud-debug');

exports.helloworld=function helloworld(req,res){
    let name=req.query.name||'Roma';
    let mood=req.query.mood='Happy';
    let weather=false;
    if(!weather){
        console.error('Too bad for me!');
    }
    console.log('Great to have my first cloud function');
    res.status(200).send('Hi from ${name}.');
}
