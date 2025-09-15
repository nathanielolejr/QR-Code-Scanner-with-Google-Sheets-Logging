function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('QR Code Scanner');
}

function processScannedData(data, userName, site, location) {
  var ss = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID_HERE");
  var scanSheet = ss.getSheetByName("Scanned Data");

  Logger.log("Scanned Code: " + data);
  Logger.log("User Name: " + userName);
  Logger.log("Site: " + site);
  Logger.log("Location: " + location);
  
  scanSheet.appendRow([new Date(), data, userName, site, location]);
}

function getDropdownData() {
  var ss = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID_HERE");
  var lovSheet = ss.getSheetByName("LoV");

  var sites = lovSheet.getRange("A2:A").getValues().flat().filter(String);
  var locations = lovSheet.getRange("B2:B").getValues().flat().filter(String);

  return { sites: sites, locations: locations };
}
