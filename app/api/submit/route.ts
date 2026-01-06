import { readFileSync } from 'fs';
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Try to load credentials from sheets.json or use environment variables
    let credentials: any;
    
    try {
      // Try to read from sheets.json file
      const sheetsJsonPath = join(process.cwd(), 'sheets.json');
      const sheetsJson = readFileSync(sheetsJsonPath, 'utf8');
      credentials = JSON.parse(sheetsJson);
    } catch (error) {
      // Fall back to environment variables
      if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
        return NextResponse.json(
          { error: 'Google Sheets credentials not found. Please add sheets.json or configure .env file' },
          { status: 500 }
        );
      }
      
      let privateKey = process.env.GOOGLE_PRIVATE_KEY;
      // Remove quotes if present
      if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
        privateKey = privateKey.slice(1, -1);
      }
      // Replace \n with actual newlines
      privateKey = privateKey.replace(/\\n/g, '\n');

      credentials = {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: privateKey,
      };
    }

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId || spreadsheetId === 'YOUR_SHEET_ID_HERE') {
      return NextResponse.json(
        { error: 'Google Sheet ID not configured. Please update GOOGLE_SHEET_ID in .env file' },
        { status: 500 }
      );
    }

    // Google Sheets setup
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: credentials.client_email,
        private_key: credentials.private_key,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:A',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit data',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}

