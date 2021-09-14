# AWS

RESTful application using NodeJs, ExpressJS and the AWS SDK. 

The application has 3 routes:

Route 1: Return a list of all available AWS regions

Route 2: Return a list of all VPCs within a specific region

Route 3: Return a list of all Subnets within a specific VPCUse RESTful best practices and structure routes appropriately. Please do not provide any AWS access key or secret key information in your code.

## How to run the service

How to run the service:

Step 1: Execute the command "npm install"
Step 2: Start the service "npm start" or "node server.js"
        The server is running on port 3000
Step 3: Use Postman or web console to make a API request to the endpoints.
        The three endpoints are:
        http://localhost:3000/getRegions (Returns the list of all available AWS Regions for an account)
        http://localhost:3000/getVPC/:region (Returns a list of all available VPC's for a region specified)
        http://localhost:3000/getVPC (Returns a list of all available VPC's for a default region of your account)
        http://localhost:3000/getSubnets/:vpcId (Returns a list of all Subnets within a specific VPCId)
        http://localhost:3000/getSubnets (Returns a list of all Subnets for a VPC in a default region)

File Structure:

server.js --> Starts the api service/endpoint
restapi/routes.js --> Defining routes for the RESTful application
restapi/aws.js --> Connection to aws sdk
package.json --> Metadata of project depedencies and scripts
