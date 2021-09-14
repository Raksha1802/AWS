'use strict';

module.exports = function(app) {
  var awsAction = require('./aws.js');

  app.route('/getRegions') //List all available regions for a AWS account
    .get(awsAction.describeRegion)

  app.route('/getVPC/:region') // List and describes VPCs for a region
    .get(awsAction.getVpc)

  app.route('/getSubnets') // Lists and describes Subnets for a VPC/all available VPC
    .get(awsAction.getdefaultSubnets)
    
  app.route('/getVPC') // List and describes VPCs for a region
    .get(awsAction.getdefaultVpc)

  app.route('/getSubnets/:vpcId') // Lists and describes Subnets for a VPC/all available VPC
    .get(awsAction.getSubnets)    
};
