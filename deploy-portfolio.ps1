#!/usr/bin/env pwsh
# Script to deploy the portfolio to GitHub Pages using GitHub Actions technique

Write-Host "Starting deployment process..." -ForegroundColor Cyan

# Create .nojekyll file in public directory to prevent Jekyll processing
Write-Host "Creating .nojekyll file in public directory..." -ForegroundColor Cyan
New-Item -Path ".\public\.nojekyll" -ItemType "file" -Force | Out-Null

# Build the site
Write-Host "Building the React site..." -ForegroundColor Cyan
npm run build

# Create .nojekyll file in build directory
Write-Host "Creating .nojekyll file in build directory..." -ForegroundColor Cyan
New-Item -Path ".\build\.nojekyll" -ItemType "file" -Force | Out-Null

# Create a simple index.html file in the root of build directory
Write-Host "Creating a placeholder README in build directory..." -ForegroundColor Cyan
$readmeContent = @"
# Portfolio Website
This is just a placeholder README. The actual website is in index.html.
"@
Set-Content -Path ".\build\README.md" -Value $readmeContent

# Deploy with GitHub Pages
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Cyan
Write-Host "Method 1: Using GitHub Actions (preferred method)" -ForegroundColor Yellow
Write-Host "  - Push your changes to the main branch" -ForegroundColor Yellow
Write-Host "  - The GitHub Actions workflow will automatically deploy your site" -ForegroundColor Yellow
Write-Host ""
Write-Host "Method 2: Using gh-pages npm package (legacy method)" -ForegroundColor Yellow
Write-Host "  - Run: npm run deploy" -ForegroundColor Yellow

$choice = Read-Host "Would you like to use the legacy npm deploy method? (y/n)"
if ($choice -eq "y") {
    Write-Host "Running npm deploy command..." -ForegroundColor Cyan
    npm run deploy
    Write-Host "Legacy deploy completed!" -ForegroundColor Green
} else {
    Write-Host "Skipping legacy deploy. Push your changes to GitHub to trigger deployment via GitHub Actions." -ForegroundColor Cyan
    git status
}

Write-Host ""
Write-Host "Your site should be available at: https://raj1vsr1vastava.github.io/portfolio" -ForegroundColor Green
Write-Host "Note: It might take a few minutes for the changes to be visible." -ForegroundColor Yellow
Write-Host "If you still see the README content, try clearing your browser cache." -ForegroundColor Yellow
