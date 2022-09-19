Git
Two ways to combine work from a different branch.
Merge and rebase.
Merge: Given two branches keeps them as is, creates a new common commit combining work
Rebase: git switch A; git rebase main takes branch A and puts it on top of main using diff algorithm. In the end we have 1 branch combining all work.

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