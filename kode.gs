const ss = SpreadsheetApp.getActiveSpreadsheet();
let totalTransJual = ss.getSheetByName("Transaksi_Jual").getLastRow()-1;
const transJualPerPage = 10;

function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}

function allProduk(){

  let ws = ss.getSheetByName("Produk");
  let all_produk = {};
  all_produk = ws.getRange(2,1, ws.getLastRow()-1, 9).getDisplayValues();
  // Logger.log(all_produk);
  return all_produk;
}

function allTransJual(){

  let ws = ss.getSheetByName("Transaksi_Jual");
  let all_trjual = {};
  all_trjual = ws.getRange(2,1, ws.getLastRow()-1, 4).getDisplayValues();
  // Logger.log(all_trjual);
  return all_trjual;
}

function getTransJual(halaman){
  
  let startId = ((halaman-1)*transJualPerPage)+1; 
  let cs = ss.getSheetByName("Transaksi_Jual");  
  
  let trjual = {};
  trjual = cs.getRange(1+startId,1, transJualPerPage, 4).getDisplayValues();
  // Logger.log(trjual);
  return trjual;
}
