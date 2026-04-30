# Deploying Example Site to GitHub Pages

This repository includes a GitHub Actions workflow that automatically deploys the example site to GitHub Pages.

## Setup Instructions

### 1. Update the Base URL

Edit `exampleSite/hugo.toml` and update the `baseURL`:

```toml
baseURL = 'https://YOUR-USERNAME.github.io/clean-hugo/'
```

Replace `YOUR-USERNAME` with your actual GitHub username or organization name.

### 2. Enable GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"

### 3. Trigger Deployment

The site will automatically deploy when you:
- Push to the `main` branch
- Manually trigger the workflow from the Actions tab

### 4. Access Your Site

Once deployed, your site will be available at:
```
https://YOUR-USERNAME.github.io/clean-hugo/
```

## Local Development

To run the example site locally:

```bash
cd exampleSite
npm install
hugo server -D
```

The site will be available at `http://localhost:1313/`

## Workflow Details

The workflow (`.github/workflows/deploy.yml`):
- Runs on every push to `main` branch
- Installs Hugo (extended version) and Node.js dependencies
- Builds the site from the `exampleSite` directory
- Deploys to GitHub Pages automatically
- Uses the dynamic base URL from GitHub Pages configuration

## Troubleshooting

### Build Fails
- Check that `package-lock.json` is committed in the `exampleSite` directory
- Verify that all dependencies are properly listed in `package.json`

### Assets Not Loading
- Ensure `baseURL` in `hugo.toml` matches your GitHub Pages URL
- Check that the repo name in the URL matches your actual repo name

### 404 Errors
- Verify GitHub Pages is enabled in repository settings
- Check that the workflow completed successfully in the Actions tab

