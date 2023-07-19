function getFileAsBlob(exportUrl) {

     let response = UrlFetchApp.fetch(exportUrl, {
         muteHttpExceptions: true,
         headers: {
           Authorization: 'Bearer ' +  ScriptApp.getOAuthToken(),
         },
     });

     return response.getBlob();

}