#!/usr/bin/env pwsh
# Script to deploy the portfolio to GitHub Pages with .nojekyll flag

Write-Host "Starting enhanced deployment process..." -ForegroundColor Cyan

# Check if gh-pages package is installed
Write-Host "Checking if gh-pages package is installed..." -ForegroundColor Cyan
$nodeModulesPath = ".\node_modules\gh-pages"
if (-not (Test-Path $nodeModulesPath)) {
    Write-Host "Installing gh-pages package..." -ForegroundColor Yellow
    npm install --save-dev gh-pages
}

# Clean and rebuild the project
Write-Host "Building the React application..." -ForegroundColor Cyan
npm run build

# Create special files for GitHub Pages
Write-Host "Creating special files for GitHub Pages..." -ForegroundColor Cyan
# Create .nojekyll file to prevent Jekyll processing
New-Item -Path ".\build\.nojekyll" -ItemType "file" -Force

# Create a temporary placeholder README.md in the build folder 
# This will be deployed instead of the main README.md but won't affect the site
$placeholderContent = @"
# Portfolio Website
This is a placeholder README file to prevent GitHub Pages from displaying it as the index.
The actual website is at index.html.
"@
Set-Content -Path ".\build\README.md" -Value $placeholderContent

# Deploy with gh-pages (include dot files and force)
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Cyan
npx gh-pages -d build -t true --dotfiles true --message "Deploy React app to GitHub Pages [skip ci]"

Write-Host "Deployment completed!" -ForegroundColor Green
Write-Host "Your site should be available at: https://raj1vsr1vastava.github.io/portfolio" -ForegroundColor Green
Write-Host "Note: It might take a few minutes for the changes to be visible." -ForegroundColor Yellow
Write-Host "If you still see the README content, try clearing your browser cache or opening in an incognito window." -ForegroundColor Yellow
