# The Waiting Club

A content-first, editorial-style website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
npm install
```

## Google Sheets Setup

1. Create a Google Cloud Project and enable the Google Sheets API
2. Create a Service Account and download the JSON key file
3. Create a Google Sheet and share it with the service account email (give Editor access)
4. Create a `.env` file in the root directory with:

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id-here
```

The sheet should have columns: Email (A) and Address (B)

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```


