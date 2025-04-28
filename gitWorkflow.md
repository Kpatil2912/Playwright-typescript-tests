# 🚀 Team Git Workflow Guide (Squash and Merge Strategy)

## ✏️ 1. Always Start from the Latest Main

Before you start any new work:

```bash
git checkout main
git pull origin main
```

---

## 🌿 2. Create a New Feature Branch

Branch names should be meaningful, for example:

```bash
git checkout -b feature/your-ticket-id-short-description
```

Examples:

- `feature/1234-login-api`
- `bugfix/5678-button-color`

---

## 💻 3. Work Locally and Commit Often

You can make multiple commits locally as needed:

```bash
git add .
git commit -m "your meaningful commit message"
```

*(Don't worry about too many commits — we'll squash later.)*

---

## 🔄 4. Sync with Latest Main Regularly (Rebase)

Before pushing your branch OR opening a PR, **always rebase**:

```bash
git fetch origin
git rebase origin/main
```

👉 If you get conflicts:

- Fix the conflicts manually.
- Then continue rebase:

```bash
git add .
git rebase --continue
```

If you need to abort during rebase:

```bash
git rebase --abort
```

---

## 🚀 5. Push Your Feature Branch

After rebasing and resolving any conflicts:

```bash
git push origin feature/your-ticket-id-short-description
```

*(If you get an error after rebasing: `git push --force` is needed because rebase rewrites history.)*

```bash
git push --force
```

---

## 🔥 6. Create a Pull Request (PR)

When you open a PR:

- Target branch = `main`
- Add reviewers.
- Write a **clear PR title and description**.

---

## 🛡️ 7. Before Merge (Update PR if Needed)

If your PR becomes "out of date" (main branch moved ahead), **rebase again**:

```bash
git fetch origin
git rebase origin/main
git push --force
```

✅ Always keep your PR up-to-date.

---

## ✅ 8. Squash and Merge

Once approved:

- Use **"Squash and Merge"**.
- Write a **final commit message** that summarizes the feature or bugfix.

Example:

> `feat: implement login page with email and password`

---

## 🧹 9. Clean Up Local Branch

After merge:

```bash
git checkout main
git pull origin main
git branch -d feature/your-ticket-id-short-description
```

Delete remote branch too (optional but clean):

```bash
git push origin --delete feature/your-ticket-id-short-description
```

---

# 🔥 Golden Rules

- **Small PRs** (1–3 days of work max)
- **Always Rebase** before pushing PR
- **Squash Merge Only**
- **Meaningful Commit Messages**
- **Clean Branches After Merge**

---

# 📋 Quick Commands Cheat Sheet

| Action | Command |
|:---|:---|
| Update local main | `git checkout main && git pull origin main` |
| Create new branch | `git checkout -b feature/branch-name` |
| Rebase with main | `git fetch origin && git rebase origin/main` |
| Continue after conflict | `git add . && git rebase --continue` |
| Abort rebase | `git rebase --abort` |
| Push branch | `git push origin feature/branch-name` |
| Force push after rebase | `git push --force` |
| Delete local branch | `git branch -d feature/branch-name` |
| Delete remote branch | `git push origin --delete feature/branch-name` |

---

# 🎯 Result

✅ Clean git history  
✅ Fewer conflicts  
✅ Easy rollback of any feature  
✅ Happier, faster-moving team!
