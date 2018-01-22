var yasque = YASQE(document.getElementById("codeeditor"), {sparql:{showQueryButton: true}});
yasque.setValue("PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n" +
    "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
    "SELECT * WHERE {\n" +
    "  ?sub ?pred ?obj .\n" +
    "} \n" +
    "LIMIT 10");
// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
} else {
    alert('The File APIs are not fully supported in this browser.');
}
