# README

## Daily Git

```bash
git status                      # see what changed
git add .                       # stage everything
git commit -m "Describe change" # commit
git push                        # push to remote
```

Useful extras:

```bash
git diff                        # review unstaged changes before committing
git log --oneline -5            # last 5 commits
git pull                        # get the latest changes
```

## Deploying

```bash
pnpm run deploy
```

Builds the site and uploads `dist/` to Cloudflare Pages (production).
Deploy is independent from git: run it after pushing, or whenever you want the live site updated.

## Checks after deploy

```bash
curl -s https://metalogrom.com | grep -oE '<link rel="canonical"[^>]*>'
curl -sI https://metalogrom.pages.dev | grep -i x-robots
```