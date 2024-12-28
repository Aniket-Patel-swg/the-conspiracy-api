# Deployment Instructions

## Step 1: Install NodeJS and NPM using nvm

1. **Install Node Version Manager (nvm)**  
   Run the following command in the terminal:
   ```bash
   sudo su -
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
   ```

2. **Activate nvm**  
   Type the following command:
   ```bash
   . ~/.nvm/nvm.sh
   ```

3. **Install the latest version of Node.js**  
   Use nvm to install Node.js:
   ```bash
   nvm install node
   ```

4. **Verify Node.js and npm installation**  
   Check that Node.js and npm are installed correctly:
   ```bash
   node -v
   npm -v
   ```

## Step 2: Install Git and Clone Repository from GitHub

1. **Install Git**  
   Run the following commands in the terminal:
   ```bash
   sudo apt-get update -y
   sudo apt-get install git -y
   ```

2. **Verify Git Installation**  
   Check if Git is installed:
   ```bash
   git --version
   ```

3. **Clone the Code Repository**  
   Clone the repository from GitHub:
   ```bash
   git clone https://github.com/yeshwanthlm/nodejs-on-ec2.git
   ```

4. **Navigate to the Directory and Install Packages**  
   Change to the project directory and install the required packages:
   ```bash
   cd nodejs-on-ec2
   npm install
   ```

5. **Start the Application**  
   To start the application, run:
   ```bash
   npm start
   ```
7. **install pm2 to run the application**   
   ```bash
   npm install -g pm2
   ```

8. **navigate to the directory and run the application using pm2**  
   ```bash
   cd nodejs-on-ec2
   pm2 start src/index.ts --name "nodejs-on-ec2"
   ```

9. **check the application is running or not**  
   ```bash
   pm2 list
   ```

10. **check logs of the application**  
    ```bash
    pm2 logs
    ```

