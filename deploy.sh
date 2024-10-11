# Update system
sudo yum update -y

# Install Node.js and npm
curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum install -y nodejs

# Install PM2
sudo npm install pm2 -g

# Clone the application 
git clone https://github.com/JESHLIN/web-app-deployment.git

# Navigate to the application directory
cd manhwa-app

# Install dependencies
npm install

# Start the application with PM2
pm2 start server.js

# Save the PM2 process list and set it to start on boot
pm2 save
pm2 startup