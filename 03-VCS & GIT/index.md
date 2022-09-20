Git
Two ways to combine work from a different branch.
Merge and rebase.
Merge: Given two branches keeps them as is, creates a new common commit combining work
Rebase: git switch A; git rebase main takes branch A and puts it on top of main using diff algorithm. In the end we have 1 branch combining all work.
Target doesn't have to be a branch, it can also be a specific commit,which means we put all our diff on top of the commit

Branch
Branch is just a named pointer to last commit. If we create a new commit it will point branch to that commit.
"git branch foo" will create a new branch foo that will point to the current commit
HEAD
HEAD is a pointer to branch (or commit) we are currently working on. As by default branch is pointing to a last commit of that branch, so does HEAD.
To move HEAD around we use CHECKOUT
Deattached head 
We can make head point to a specific commit. When HEAD is not pointing to a branch is called de-attached head. If we create a new commit while our HEAD is de-attached it will create a commit using old HEAD value as a parent, and move HEAD to the latest commit. And so, only HEAD is pointing to the latest commit, if we attach HEAD to a different position then nothing references our commits and they will be targeted by a git garbage collector. 
In order to save our changes we need to reference it, by either creating a branch "git checkout -b foo", 'git branch foo' or attaching tag "git tag foo"
If we moved away already we can still find reference to that commit. 

Specifying commits:
Either using hash or relative refs. Relative refs allow us to move the HEAD around the commit tree. "commit^" (caret operator) moves up(towards parents) the tree, "commit~<num>" moves up num times 
We can use it to move branches around, using git branch -f branchName targetLocation, where we replace targetLocation with a relative path

Reversing changes - two main ways: git reset and git revert
Reset moves the branch where we point it o. git reset pointer. Last commit that branch was pointing to is alive and well, just not referenced. We are re-writing history. Ok to do it locally, not so much if ur changes were already shared remotely. 
Revert creates a new commit on the branch that basically reverts the changes done by the previous commit(s)
git revert HEAD~4 will create a commit reversing last 4 commits.

Moving things around 
Add changes from specific commits using cherry-pick
git cherry-pick C1 C3
If you don't know which commits you want specifically you can use interactive rebase, which is a rebase command with an option -i
Imagine you have a local branch, and you don't want to push certain commits(maybe they are debugging or useless) you have two options: checkout and cherry-pick needed commits or do an interactive rebase onto the target branch picking up only those commits you are interested in