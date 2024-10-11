# web-app-deployment
Deploying a web application inspired by "The 50 Best Fantasy Manhwa You Must Read Now" on AWS. The steps are as follows:

1. Create the web application
2. Set up AWS infrastructure
3. Configure auto-scaling
4. Implement security measures
5. Deploy the application

Step 1: Create the web application
A basic Express.js (you can find the code in this repository) application that serves a list of manhwa titles, genres, and descriptions. The front-end is a simple HTML page with JavaScript that fetches the data from the server and displays it.


Step 2: Set up AWS infrastructure

a. EC2 instance:

Launch an EC2 instance (e.g., t2.micro for a small app)

Choose an Amazon Linux 2 AMI

Configure security group to allow inbound traffic on port 80 (HTTP) and 22 (SSH)

b. S3 for storing images:

Create an S3 bucket for storing manhwa cover images

Set up appropriate bucket policies for public read access

c. RDS for the database:

Create an RDS instance (e.g., Amazon Aurora or MySQL)

Configure security group to allow inbound traffic from your EC2 instance


Step 3: Configure auto-scaling

a. Create a Launch Template:

AMI: Select the AMI of your configured EC2 instance

Instance type: t2.micro (or as needed)

Security group: Use the same security group as your original EC2 instance

User data: Include a script to install and start your application


b. Create an Auto Scaling Group:

Use the Launch Template created in step 1

Configure network settings (VPC and subnets)

Set desired, minimum, and maximum capacity (e.g., 1, 1, 3)

c. Configure Scaling Policies:

Create a "Target tracking scaling" policy

Set the metric type to "Average CPU Utilization"

Set the target value to 70%


d. Configure Application Load Balancer:

Create an Application Load Balancer

Configure listeners (HTTP on port 80)

Create a target group and associate it with your Auto Scaling group

Auto-scaling triggers:

The application will scale out (add instances) when the average CPU utilization across all instances exceeds 70% for a sustained period.
It will scale in (remove instances) when the average CPU utilization drops below 70% for a sustained period.


Step 4: Implement security measures

a. Enable HTTPS:

Request a certificate from AWS Certificate Manager

Configure your load balancer to use the certificate

Set up a listener rule to redirect HTTP traffic to HTTPS

b. Configure firewall rules:

Update the EC2 security group to allow inbound traffic only on necessary ports:

80 (HTTP) and 443 (HTTPS) from anywhere

22 (SSH) from your IP address only

3306 (MySQL/Aurora) from the EC2 security group to the RDS security group


Step 5: Deploy the application

SSH into your EC2 instance

Install Node.js and npm

Clone your application repository or upload your files

Install dependencies with npm install

Start the application with node server.js

Set up a process manager like PM2 to keep your application running

(Find the script in this repository - deploy.sh)
To use this script:

Save it as deploy.sh
Make it executable with chmod +x deploy.sh
Run it on your EC2 instance with ./deploy.sh
