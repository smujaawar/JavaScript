// Here’s a **comprehensive, structured Git guide**—from **beginner to advanced**, including **most-used commands**, **best practices**, and **industry standards**. Let’s break it down into clear sections so you can teach, learn, and apply Git effectively:

// ---

// ##  **1. What is Git?**

// * **Git** is a **distributed version control system (DVCS)** that helps developers track code changes, collaborate, and maintain project history.
// * Every developer has a **full copy** of the repository locally.
// * **Main purpose**: Version control, collaboration, branching, merging.

// ---

// ##  **2. Core Concepts**

// * **Repository (Repo)**: Project folder tracked by Git.
// * **Commit**: A snapshot of your changes.
// * **Branch**: A separate line of development.
// * **Merge**: Combining changes from one branch into another.
// * **Remote**: A version of your repo hosted on GitHub, GitLab, etc.
// * **HEAD**: The current branch and commit you are on.
// * **Staging area (Index)**: Where files are prepared before committing.

// ---

// ##  **3. Git Workflow**

// **Working Directory → Staging Area → Local Repository → Remote Repository**

// * **Working Directory**: Your local files.
// * **Staging**: `git add` moves changes to staging.
// * **Commit**: `git commit` saves changes in local repo.
// * **Push**: `git push` sends commits to remote.
// * **Pull**: `git pull` fetches + merges from remote.

// ---

// ##  **4. Installation & Setup**

// ```bash
// # Install Git
// sudo apt-get install git   # Linux
// brew install git           # macOS
// # Verify
// git --version

// # Configure user
// git config --global user.name "Your Name"
// git config --global user.email "you@example.com"
// git config --global core.editor "code --wait" # VS Code as editor
// ```

// ---

// ##  **5. Creating & Initializing a Repo**

// ```bash
// git init              # Initialize local repo
// git clone <url>       # Clone an existing remote repo
// ```

// ---

// ##  **6. Basic Commands (Beginner Level)**

// ### **Check Status & History**

// ```bash
// git status            # Show changed files, staged files
// git log               # Show commit history
// git log --oneline     # Compact history
// ```

// ### **Adding & Committing**

// ```bash
// git add file.txt      # Stage a file
// git add .             # Stage all changes
// git commit -m "Message" # Commit changes
// git commit -am "Msg"  # Add & commit tracked files
// ```

// ### **Viewing Changes**

// ```bash
// git diff              # Compare working directory with staging
// git diff --staged     # Compare staging with last commit
// ```

// ---

// ##  **7. Branching & Merging (Intermediate Level)**

// ### **Create & Switch Branch**

// ```bash
// git branch                 # List branches
// git branch new-feature     # Create branch
// git checkout new-feature   # Switch branch
// git checkout -b feature    # Create & switch
// git switch feature         # (New alternative)
// ```

// ### **Merge**

// ```bash
// git merge feature          # Merge 'feature' into current branch
// git merge --abort          # Abort a conflicted merge
// ```

// ### **Delete Branch**

// ```bash
// git branch -d feature      # Delete branch locally
// git push origin --delete feature # Delete remote branch
// ```

// ---

// ##  **8. Remote Repositories**

// ### **Connecting to Remote**

// ```bash
// git remote add origin <url>    # Add remote
// git remote -v                  # View remotes
// ```

// ### **Push & Pull**

// ```bash
// git push origin main           # Push to main branch
// git push -u origin main        # Set upstream (first time)
// git pull origin main           # Fetch + merge from remote
// git fetch                      # Fetch without merge
// ```

// ---

// ##  **9. Undoing Changes**

// ### **Unstage / Restore**

// ```bash
// git restore file.txt          # Undo changes in working dir
// git restore --staged file.txt # Unstage a file
// ```

// ### **Reset Commits**

// ```bash
// git reset --soft HEAD~1       # Undo commit, keep changes staged
// git reset --mixed HEAD~1      # Undo commit, keep changes unstaged
// git reset --hard HEAD~1       # Undo commit & delete changes
// ```

// ### **Revert Commit**

// ```bash
// git revert <commit-id>        # Create new commit that undoes previous
// ```

// ---

// ##  **10. Advanced Features (Expert Level)**

// ### **Stash (Save Work Temporarily)**

// ```bash
// git stash                 # Save uncommitted changes
// git stash list            # Show stashes
// git stash pop             # Apply & remove stash
// git stash apply           # Apply stash but keep in stash list
// ```

// ### **Cherry-Pick**

// ```bash
// git cherry-pick <commit-id> # Apply specific commit to current branch
// ```

// ### **Rebase**

// ```bash
// git rebase main            # Reapply commits on top of another branch
// git rebase -i HEAD~3       # Interactive rebase (edit history)
// ```

// ### **Tagging**

// ```bash
// git tag v1.0              # Create tag
// git push origin v1.0      # Push tag
// ```

// ---

// ##  **11. Collaboration (Industry Practices)**

// ### **Pull Requests (PR) Workflow**

// * Create feature branch → Push → Open PR → Review → Merge → Delete branch.

// ### **Forking Workflow**

// * Fork repo → Clone → Make changes → Push → Create PR.

// ---

// ##  **12. Best Practices & Must-Follow Standards**

// ✔ **Use meaningful commit messages**
// *Format:* `type(scope): message` (e.g., `feat(auth): add JWT login`)

// ✔ **Commit often, but logically grouped changes**
// ✔ **Never commit secrets (.env, API keys)**
// ✔ **Use `.gitignore`** to exclude unnecessary files
// ✔ **Keep `main` or `master` clean**
// ✔ **Always pull before push** to avoid conflicts
// ✔ **Use branches for features, bug fixes, hotfixes**
// ✔ **Use `git status` before committing**
// ✔ **Avoid `git push --force` on shared branches**
// ✔ **Rebase for clean history, merge for safety**

// ---

// ##  **13. Common `.gitignore` Example**

// ```
// node_modules/
// .env
// *.log
// dist/
// ```

// ---

// ##  **14. Git Command Cheatsheet (Quick Reference)**

// | Purpose       | Command                                |
// | ------------- | -------------------------------------- |
// | Init Repo     | `git init`                             |
// | Clone Repo    | `git clone <url>`                      |
// | Status        | `git status`                           |
// | Add Changes   | `git add .`                            |
// | Commit        | `git commit -m "message"`              |
// | Log           | `git log --oneline --graph --decorate` |
// | Branch        | `git branch <name>`                    |
// | Switch Branch | `git checkout <name>` or `git switch`  |
// | Merge         | `git merge <branch>`                   |
// | Stash         | `git stash`                            |
// | Reset         | `git reset --hard HEAD~1`              |
// | Rebase        | `git rebase main`                      |

// ---

// ##  **15. Real-World Workflow Example**

// ```bash
// # Start new project
// git init
// git add .
// git commit -m "Initial commit"
// git remote add origin <repo-url>
// git push -u origin main

// # Create feature branch
// git checkout -b feature/login
// # Work, then:
// git add .
// git commit -m "feat(login): added login page"
// git push origin feature/login

// # Merge via PR on GitHub (best practice)
// ```
