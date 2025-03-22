### Sharing Session git avalon

### Prepare & Installation

```bash
pnpm install husky
```

```bash
pnpm install eslint eslint-config-next eslint-config-prettier eslint-plugin-unused-imports @typescript-eslint/eslint-plugin @typescript-eslint/parser @eslint/eslintrc @eslint/js
```

avalon - pelatihan git

### Instalasi

git --version
git config --global user.name "your_name"
git config --global user.email "your_email@example.com"

### Repository

git init
git add .
git commit -m "commit message"
git branch -M main
git remote add origin https://github.com/your_name/your_repo.git
git remote add origin2 https://github.com/your_name2/your_repo2.git
git push -u origin main

### Branch

git branch
git branch -a
git checkout -b branch_name
git branch -d branch_name

### Commit

git commit -m "commit message"
git commit -am "commit message"
git commit --amend -m "commit message"

### Merge

git merge branch_name
git merge --abort

### STASH

git stash  
git stash pop  
git stash list  
git stash drop  
git stash clear

### CHECKOUT

git checkout branch_name  
git checkout -b new_branch

### LOG

git log  
git log --oneline  
git log --graph --oneline  
git log --author="your_name"  
git log --since="2 weeks ago"

### STATUS

git status

### PULL

git pull  
git pull origin main  
git pull --rebase origin main

### PUSH

git push  
git push origin branch_name  
git push origin --force

### FETCH

git fetch  
git fetch origin  
git fetch --all

### REBASE

git rebase branch_name  
git rebase -i HEAD~3  
git rebase --continue  
git rebase --abort
