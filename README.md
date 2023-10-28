This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Guide to install and run the project
**GitHub Setup :**
- Fork the repository 
- Check the forked repository in your profile 
- Clone the project

**Local Setup :**

 - Create a folder and open it
 - For windows: Open git bash / For Linux: Open terminal and cd to that folder 
 - Clone the repository from link :  
```git clone https://github.com/neha067/PrepMeUp.git```
- setup a virtual environment and install the requirements : 
```npm install```
- Now, run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Guide to contribute :
- Set original repo as your upstream remote : 
```git remote add upstream https://github.com/neha067/PrepMeUp.git```
- Pull updates from upstream : 
```git pull upstream```
- Make changes locally and push it your forked copy of the project 
- Create a pull request in GitHub

### Guide to use the project

 - Upon running you'll be shown a Homepage which will show a button start chatting
 - On clicking "start chatting", you'll be taken a panel with a random job seeker on the internet.
 - If there is no current job seeker available, your room will be in waiting state untill the other job seeker matches your room
 - On clicking "next" you can skip the current chat window and move to next one
 - Text messages can be sent in the text window