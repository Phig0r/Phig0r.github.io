# PowerShell script to deploy to GitHub Pages
# Make sure you've created the repository on GitHub first!

Write-Host "🚀 Deploying to GitHub Pages..." -ForegroundColor Green
Write-Host ""

# Check if remote exists
$remoteExists = git remote get-url origin 2>$null

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Remote 'origin' not found. Adding remote..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Please run this command with your preferred method:" -ForegroundColor Cyan
    Write-Host "  HTTPS: git remote add origin https://github.com/phig0r/phig0r.github.io.git" -ForegroundColor White
    Write-Host "  SSH:   git remote add origin git@github.com:phig0r/phig0r.github.io.git" -ForegroundColor White
    Write-Host ""
    Write-Host "Then run this script again." -ForegroundColor Yellow
    exit 1
}

Write-Host "✓ Remote configured" -ForegroundColor Green
Write-Host ""

# Rename branch to main if needed
git branch -M main 2>$null

# Stage all changes
Write-Host "📦 Staging files..." -ForegroundColor Cyan
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "💾 Committing changes..." -ForegroundColor Cyan
    git commit -m "Update portfolio website"
} else {
    Write-Host "✓ No changes to commit" -ForegroundColor Green
}

# Push to GitHub
Write-Host ""
Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your site will be live at: https://phig0r.github.io" -ForegroundColor Cyan
    Write-Host "(It may take 1-2 minutes for changes to appear)" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Push failed. Make sure:" -ForegroundColor Red
    Write-Host "  1. You've created the repository on GitHub" -ForegroundColor Yellow
    Write-Host "  2. You have push access" -ForegroundColor Yellow
    Write-Host "  3. GitHub Pages is enabled in repository settings" -ForegroundColor Yellow
}

