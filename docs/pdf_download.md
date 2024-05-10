# PDF Documentation Generation

## Overview
This workflow generates PDF documentation for the frontend using **typedoc** and the converting tool **md-to-pdf**.

## Workflow Steps
### Checkout Repository
Clones the repository to the workflow runner.

### Install dependencies
Installs all the needed dependencies using the command `yarn install`

### Generate docs to markdown
Generate docs in markdown format using `yarn run typedoc`

### Convert md to pdf files
CConvert md files to pdf using a custom script with `yarn run convert-md-to-pdf`

### Upload PDF Artifact
Uploads the generated PDF files as an artifact using [actions/upload-artifact@v3]

## How to Download the generated PDF file
1. After the workflow completes, navigate to the "Actions" tab of your repository.
2. Select the latest workflow run for "Generate documentation for the frontend".
3. Click on the "Artifacts" dropdown menu.
4. Choose "documentations" to download the generated PDF documentations.