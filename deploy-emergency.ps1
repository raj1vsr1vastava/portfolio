#!/usr/bin/env pwsh
# Script to manually deploy the portfolio to GitHub Pages with direct gh-pages branch creation

Write-Host "Starting emergency deployment process..." -ForegroundColor Cyan

# Step 1: Install dependencies if needed
if (-not (Test-Path ".\node_modules")) {
    Write-Host "Installing npm dependencies..." -ForegroundColor Yellow
    npm ci
}

# Step 2: Build the React app
Write-Host "Building the React application..." -ForegroundColor Cyan
npm run build

# Step 3: Prepare the build directory with special files
Write-Host "Creating special files for GitHub Pages..." -ForegroundColor Cyan

# Create .nojekyll file to prevent Jekyll processing
New-Item -Path ".\build\.nojekyll" -ItemType "file" -Force | Out-Null

# Step 4: Manually push to gh-pages branch
Write-Host "Preparing to deploy to gh-pages branch..." -ForegroundColor Cyan

# Save current branch to return to it later
$currentBranch = (git rev-parse --abbrev-ref HEAD)
Write-Host "Current branch: $currentBranch (will return here after deployment)" -ForegroundColor Gray

# Check if build directory exists
if (-not (Test-Path ".\build")) {
    Write-Host "Error: Build directory does not exist. Build failed." -ForegroundColor Red
    exit 1
}

# Create a temporary directory for gh-pages content
$tempDir = ".\temp-gh-pages"
if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
}
New-Item -Path $tempDir -ItemType Directory | Out-Null

# Copy build contents to temp directory
Copy-Item -Path ".\build\*" -Destination $tempDir -Recurse

# Initialize git in the temp directory
Push-Location $tempDir
git init
git checkout --orphan gh-pages
git add .
git config --local user.email "deployment@example.com"
git config --local user.name "Deployment Script"
git commit -m "Deploy React app to GitHub Pages"

# Force push to gh-pages branch
git remote add origin https://github.com/raj1vsr1vastava/portfolio.git
$pushResult = git push -f origin gh-pages 2>&1
$pushSuccess = $?

Pop-Location

# Clean up
Remove-Item -Recurse -Force $tempDir

# Return to original branch
git checkout $currentBranch

if ($pushSuccess) {
    Write-Host "Deployment completed successfully!" -ForegroundColor Green
    Write-Host "Your site should be available at: https://raj1vsr1vastava.github.io/portfolio" -ForegroundColor Green
    Write-Host "Note: It might take a few minutes for the changes to be visible." -ForegroundColor Yellow
} else {
    Write-Host "Deployment encountered an issue:" -ForegroundColor Red
    Write-Host $pushResult -ForegroundColor Red
    Write-Host "You may need to manually push the build folder to the gh-pages branch." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Troubleshooting tips:" -ForegroundColor Cyan
Write-Host " - Clear your browser cache or try an incognito window" -ForegroundColor Yellow
Write-Host " - Check GitHub repository settings to ensure GitHub Pages is enabled for the gh-pages branch" -ForegroundColor Yellow
Write-Host " - If the site is still blank, check the browser console for any errors" -ForegroundColor Yellow
