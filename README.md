# Dynamic Team Profile Generator

  ### Content table:
  - #### [About](#about)
    - #### [Technology Stack](#technology-stack)
  - #### [Installation](#installation)
    - #### [Setting Up the Project](#setting-up-the-project)
  - #### [Using the Application](#using-the-application)
  - #### [Video](#video)
  - #### [License](#license)
  - #### [Contribution](#collaborators)
  - #### [Question](#questions)

## About
<p id="about">
This Node.js command-line application is a comprehensive solution designed for software engineering teams to manage and display employee information efficiently. The project's completion has resulted in a robust application that takes in specific details of team members and generates a well-organized HTML webpage. Each team member's summary is presented in a clear and concise manner, allowing for quick and easy access to individual profiles.

Throughout the development process, a test-driven development (TDD) approach was adopted to ensure the maintainability and reliability of the codebase. Every functional component of the application has been meticulously tested, with all units passing their respective tests, signifying the high quality and stability of the application.

As the application is designed for internal use and does not require deployment, its functionality and the successful results of the testing process have been demonstrated in a walkthrough video. This video serves as both a visual guide to the application's features and a testament to its seamless operation and effectiveness.
</p>

<p align="center">
  <img width="560" height="auto" src="https://github.com/alex-bahena/Dynamic-team-profile-generator/blob/master/Assets/img/10-object-oriented-programming-homework-demo.png"> <br/>
 <p>
   <img width="auto" height="200" src="https://github.com/alex-bahena/Dynamic-team-profile-generator/blob/master/Assets/img/jest-pass.jpg">
</p>

## Technology Stack

<p id="technology-stack">
 
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
  
</p>


## Installation:

### Getting Started with Node.js Installation

Node.js is an essential part of our development environment. Depending on your operating system, the installation steps differ. Below are the instructions for both macOS and Windows.

### For macOS Users:

We recommend installing Node.js via Homebrew, which is a package manager for macOS. Here's how you can do it:

#### 1. **Install Homebrew**: 
Visit the [official Homebrew website](https://brew.sh/) and follow the installation instructions. At the time of this guide, the installation command is:

   
 ``/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)``
 
Copy and paste this command into your macOS Terminal.

#### 2. **Install Node.js:**
Once Homebrew is installed, enter the following command to install Node.js and NPM (Node Package Manager):


Copy code

``brew install node``

#### 3. **Verify Installation:**

Confirm that Node.js is installed successfully by checking its version:

Copy code

``node -v``

You should see the installed version of Node.js displayed in the terminal.

### For Windows Users:
The installation process on Windows involves using the official Node.js installer.

#### 1. **Download the Installer:**
Go to the Node.js [Downloads page](https://nodejs.org/en/download). Click on the "Windows Installer" to download the latest default version. As of this guide, the latest LTS version is 16.15.0.

#### 2. **Run the Installer:**
Once the download is complete, execute the installer and follow the prompts to install Node.js.

#### 3. **Verify Installation:**
After installation, check that Node.js is installed properly:

Copy code

``node -v``

Run this command in your Command Prompt, and it should display the Node.js version installed on your system.

By following these instructions, you should have Node.js up and running on your machine, ready for development!

## Setting Up the Project

### 1. Cloning the Repository

Firstly, you need to clone the repository to your local machine. Choose a directory where you want to store the project. Open your Command Line Interface (CLI) on macOS or Windows and execute the following command:

``
git clone https://github.com/alex-bahena/Dynamic-team-profile-generator.git``

Ensure you are in the directory where you want to clone the repository before running the command.

### 2. Navigating to the Repository

After cloning, move into the project directory with this command:

``cd team-profile-generator/``

### 3. Installing Dependencies

Within the directory, you need to install the necessary Node packages. Run the following command:

``npm install``

This will install all required dependencies, including Inquirer and Jest, into a new node_modules/ folder within your project directory.

### Running the Application

To launch the application, simply start the index.js file with this command:

``node index.js``

##  Using the Application

**Initial Steps**

When you run the application, you'll be greeted with a welcome message and some brief instructions. Immediately after, you'll start by entering the manager's details.

**Adding the Manager**

You'll be prompted to answer four questions about the manager:

- What is the manager's name?

- What is the manager's employee ID?

- What is the manager's email address?

- What is the manager's office number?

**Building Your Team**

Once the manager's information is set, you can add engineers and interns to your team. After each addition, you'll have the option to continue adding team members or finish.

**For Engineers**

When adding an engineer, answer the following:

- What is the engineer's name?

- What is the engineer's employee ID?

- What is the engineer's email address?

- What is the engineer's GitHub username?

**For Interns**

When adding an intern, provide the following information:

- What is the intern's name?

- What is the intern's employee ID?

- What is the intern's email address?

- What is the intern's school?

### Completion

After you've finished building your team or choose to exit the program, a index.html file will be generated in the /dist directory, where you'll find your newly created webpage displaying your team's profiles.

  ## License:
  ### MIT 
  ### Copyright (c) <year> <copyright holders>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    
  ## Collaborators:
  `Alejandro Bahena`.

  ## Video:
  ### [Visual guide](https://drive.google.com/file/d/1vbW5DFR0WPc9xNLEWIrcepT_kDaYzKoZ/view?usp=sharing)
  
  ## Questions:
  
  - Github Profile: https://github.com/alex-bahena
  - If you run into any questions, please don't hesitate to contact me: alex.bahena@gmail.com
