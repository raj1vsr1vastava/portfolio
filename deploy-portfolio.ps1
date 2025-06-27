#!/usr/bin/env pwsh
# Script to deploy the portfolio to GitHub Pages

Write-Host "Starting deployment process..." -ForegroundColor Cyan

# Check if gh-pages package is installed
Write-Host "Checking if gh-pages package is installed..." -ForegroundColor Cyan
$nodeModulesPath = ".\node_modules\gh-pages"
if (-not (Test-Path $nodeModulesPath)) {
    Write-Host "Installing gh-pages package..." -ForegroundColor Yellow
    npm install --save-dev gh-pages
}

# Build and deploy the site
Write-Host "Building and deploying the site to GitHub Pages..." -ForegroundColor Cyan
npm run deploy

Write-Host "Deployment completed!" -ForegroundColor Green
Write-Host "Your site should be available at: https://raj1vsr1vastava.github.io/portfolio" -ForegroundColor Green
Write-Host "Note: It might take a few minutes for the changes to be visible." -ForegroundColor Yellow
