require('@google/cloud-debug');

exports.helloworld=function helloworld(req,res){
    res.status(200).send('Hi from Rome Italy.');
}
