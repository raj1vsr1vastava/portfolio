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

# Create .nojekyll file to prevent Jekyll processing
Write-Host "Creating .nojekyll file in build directory..." -ForegroundColor Cyan
npm run build
New-Item -Path ".\build\.nojekyll" -ItemType "file" -Force

# Deploy with gh-pages
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Cyan
npx gh-pages -d build -t true

Write-Host "Deployment completed!" -ForegroundColor Green
Write-Host "Your site should be available at: https://raj1vsr1vastava.github.io/portfolio" -ForegroundColor Green
Write-Host "Note: It might take a few minutes for the changes to be visible." -ForegroundColor Yellow
