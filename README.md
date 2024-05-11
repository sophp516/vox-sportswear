## Setting up git and cloning files
1. In your terminal and inside a folder you would like to store this file, type in the terminal of that folder: https://github.com/sophp516/vox-sportswear.git
2. Open the file in vs code, and check to ensure all the files like node_modules, package.json, and the public are there. If you don't have all the correct files, you may need to type this in your terminal: npm install


## How to get to the website
1. Type 'cd (directory name)' to get to the folder where you cloned the file.
2. Type 'npm run dev'


## Creating your own branch
When you start working on a new feature, it’s good to start a new branch because in case you mess up with can go back to your previous version. Working on a separate branch also ensures that the main branch won’t have as many merge issues. 

You can create a branch using: git checkout -b “enter-branch-name”
You can check the local branch using: git branch

Flow for saving your change：
1. 'git add .' : process all the edits you made 
2. 'git commit -m “include a message”' : Bbsically the save button
   
    If you’re ready to finalize the change, you can make a push on your branch which would end up showing on Git Hub. The        first time you want to push a new branch up to a remote repository, you will be asked to set it upstream. I usually just     copy the command it recommended me to use. 

3. 'git push' : submit your save changes to the git repository, meaning other people can also access
   
Once you are ready to finalize your changes, you can make a pull request on git up which helps ensure there are no merge errors before merging with the main branch


## Pulling from / merging with other people's branches
Pull from main
Make sure all your changes are saved on your branch using the git commands above 
1. 'git fetch'
2. 'git pull origin main' 

Merge from a different branch
1. Make sure all your changes are saved on your branch using the git commands above 
2. 'git merge origin/branch-name'



## List of Helfpul Git Commands
git add . to add contents of entire directory

git commit -am "message in quotes" to commit files all added files with a message

git status to check the status of files in the directory

git push to push all commits to the repository

git clone <url> to clone a repository

git checkout -b <branchname> to create a new branch with name <branchname>

git checkout <branchname> to checkout an existing branch

git branch -d <branchname> to delete the local branch
git branch to see what branch you are on and all of the other local branches in your project
git checkout <file> to discard changes to that file in the current branch
git help to get a list of git commands with short descriptions

