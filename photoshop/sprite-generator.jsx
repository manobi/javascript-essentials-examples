

function start(doc){
  alert(doc);
  // No final faz barulho
  var originalLayer = doc.artLayers[0] //|| doc.artLayers.getByName('Name') || doc.doc.artLayers
  doc.resizeCanvas(doc.width, doc.height * 2, AnchorPosition.TOPCENTER);

  /*
  * @method duplicate - Create a duplicate of object on screen
  * @param relativeObject {ArtLayer || SetLayer}
  * @param insertionLocation {ElementPlacement}
  */
  var duplicatedLayer = originalLayer.duplicate(originalLayer, ElementPlacement.PLACEAFTER);

  /*
  * @constructor UnitValue - The UnitValue constructor creates a new UnitValue object. The keyword new is optional
  * @description - The value is a number, and the unit is specified with a string in abbreviated, singular, or plural form, as shown in the following table
  * @examples
  * myVal = new UnitValue (value, unit);
  * myVal = new UnitValue ("value unit");
  * myVal = new UnitValue (value, "unit");
  * @link https://wwwimages2.adobe.com/content/dam/acom/en/devnet/scripting/pdfs/javascript_tools_guide.pdf
  */
  duplicatedLayer.translate(new UnitValue(0, 'px'), new UnitValue(100, '%'));
  duplicatedLayer.desaturate();
  duplicatedLayer.adjustBrightnessConstrast(-100, 100);


  var path = new File(doc.path + '/' + doc.name + '-sprite');
  app.beep();
  //doc.saveAs();
  doc.exportDocument(path + '.png', Exporttype.SAVEFORWEB, ExportOptionsSaveForWeb);
}


if (app.documents.length > 1) {
  app.documents.forEach(function(doc){
    start(doc);
  });
} else {
  start(app.activeDocument);
}
