# Deployment Instructions for GitHub Pages

Follow these steps to deploy your portfolio to `phig0r.github.io`:

## Step 1: Create the GitHub Repository

1. Go to https://github.com/new
2. Repository name: **phig0r.github.io** (must be exactly this)
3. Description: "Personal Portfolio Website"
4. Set to **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

After creating the repository, run these commands in your terminal:

```bash
# Add the remote repository
git remote add origin https://github.com/phig0r/phig0r.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Or if you prefer SSH:
```bash
git remote add origin git@github.com:phig0r/phig0r.github.io.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/phig0r/phig0r.github.io
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**

## Step 4: Wait for Deployment

- GitHub Pages will build and deploy your site automatically
- It usually takes 1-2 minutes
- Your site will be live at: **https://phig0r.github.io**

## Future Updates

To update your site after making changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

Changes will be automatically deployed within a few minutes.

## Troubleshooting

- If the site doesn't appear after 5 minutes, check the "Actions" tab in your repository for deployment status
- Make sure your repository is public (required for free GitHub Pages)
- Ensure `index.html` is in the root directory

