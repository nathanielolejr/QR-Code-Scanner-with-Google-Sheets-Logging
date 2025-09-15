# 📲 QR Code Scanner with Google Sheets Logging  

## Overview  
A Google Apps Script web app that scans QR or barcodes through a lightweight HTML/JS frontend. Scanned data (barcode, user, site, location) is logged in Google Sheets for easy tracking and reporting.  

## ✨ Features  
- Responsive HTML/CSS UI with Poppins font  
- Dynamic dropdowns for **Sites** and **Locations** from Sheets  
- Barcode scan input with modal interface  
- User name prompt before saving  
- Data logged to **Google Sheets** for reporting  

## 📂 Project Structure  
- `Code.gs` – Backend logic for logging scans and dropdown data  
- `index.html` – Frontend with site/location inputs, QR modal, and scripts  

## 🚀 Setup  
1. Create a Google Sheet with:  
   - **Scanned Data** (for logs)  
   - **LoV** (with Sites in column A, Locations in column B)  
2. Replace `YOUR_SPREADSHEET_ID_HERE` in `Code.gs` with your sheet ID.  
3. Deploy as a **Web App** in Google Apps Script.  
4. Open the web app link and start scanning.  

## 📸 UI Preview  
![QR Code Scanner Preview](screenshot.png)  
*(Add a screenshot of your form UI here)*  

## 📜 License  
MIT License.  
