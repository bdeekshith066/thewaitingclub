# Google Sheets Setup Guide

Follow these steps to connect your form to Google Sheets:

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Give it a name (e.g., "Waiting Club")
4. Click "Create"

## Step 2: Enable Google Sheets API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 3: Create a Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Fill in:
   - **Service account name**: `waiting-club-sheets` (or any name)
   - **Service account ID**: (auto-generated)
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 4: Create and Download Key

1. In the Credentials page, find your service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" → "Create new key"
5. Choose "JSON" format
6. Click "Create" - this downloads a JSON file

## Step 5: Get Credentials from JSON File

Open the downloaded JSON file. You'll see something like:

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "waiting-club-sheets@your-project.iam.gserviceaccount.com",
  ...
}
```

You need:
- `client_email` → This is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `private_key` → This is your `GOOGLE_PRIVATE_KEY`

## Step 6: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it (e.g., "Waiting Club Submissions")
4. Add a header in cell A1: "Email"
5. Copy the **Sheet ID** from the URL:
   - URL looks like: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit`
   - The part between `/d/` and `/edit` is your Sheet ID

## Step 7: Share Sheet with Service Account

1. In your Google Sheet, click "Share" (top right)
2. Paste the **service account email** (from Step 5, the `client_email`)
3. Give it **Editor** access
4. Uncheck "Notify people" (optional)
5. Click "Share"

## Step 8: Create .env File

In your project root, create a file named `.env` (or `.env.local`):

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-sheet-id-here
```

**Important:**
- Replace the values with your actual credentials
- Keep the quotes around `GOOGLE_PRIVATE_KEY`
- The private key should include the `\n` characters (they represent newlines)

## Step 9: Test It

1. Make sure you've run `npm install` (to install googleapis package)
2. Start your dev server: `npm run dev`
3. Submit the form on your website
4. Check your Google Sheet - the email should appear in column A

## Troubleshooting

**Error: "Google Sheet ID not configured"**
- Make sure your `.env` file is in the root directory
- Restart your dev server after creating `.env`

**Error: "Failed to submit data"**
- Check that the service account email has Editor access to the sheet
- Verify the Sheet ID is correct
- Check the private key format (should include `\n` characters)

**Data not appearing in sheet**
- Make sure the sheet is shared with the service account email
- Check the browser console for errors
- Verify the API route is being called (check Network tab)

## Security Note

⚠️ **Never commit your `.env` file to Git!** It's already in `.gitignore`, but double-check before pushing to GitHub.

