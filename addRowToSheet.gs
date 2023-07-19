function addRowToSheet(data) {

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);
    sheet.appendRow(data);

    return true;

}