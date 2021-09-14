var AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-1'});

var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;

var ec2 = new AWS.EC2();

var devicefarm = new AWS.DeviceFarm();

var params = {
};

exports.describeRegion =  function(req,res) {

    ec2.describeRegions(params, function(err, data) {
        if (err) res.send(err, err.stack); // an error occurred
        else     res.send(data);           // successful response
      });
}


exports.getdefaultVpc = function(req,res) {

    ec2.describeVpcs(params, function(err, data) {
        if (err) res.send(err, err.stack); // an error occurred
        else     res.send(data); 
    });
}


exports.getVpc = function(req,res) {
    reg = req.params.region
    AWS.config.update({region: reg});
    ec2New = new AWS.EC2();

    ec2New.describeVpcs(params, function(err, data) {
        if (err) res.send(err, err.stack); // an error occurred
        else     res.send(data); 
    });
}


exports.getdefaultSubnets = function(req,res) {

    ec2.describeSubnets(params, function(err, data) {
        if (err) res.send(err, err.stack); // an error occurred
        else     res.send(data);           // successful response
      });  
}   

exports.getSubnets = function(req,res) {
    VpcId = req.params.vpcId

    var params1 = {
        Filters: [
            {
           Name: "vpc-id", 
           Values: [
              VpcId
           ]
          }
         ]
        };

    ec2.describeSubnets(params1, function(err, data) {
        if (err) res.send(err, err.stack); // an error occurred
        else     res.send(data);           // successful response
      });  
}   
