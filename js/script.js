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

/*var query;

function queryFileHandler() {
    var input = document.getElementById("file");
    input.addEventListener("change", function () {
        Array.prototype.forEach.call(input.files, function (file) {
            var reader = new FileReader();
            reader.addEventListener("load", function () {
                console.log("File", file.name, "starts with", reader.result.slice(0,20));
                yasque.setValue(reader.result.toString());
                query = reader.result.toString();
                // By lines
                var lines = query.split('\n');
                window.alert(lines.length);
                for(var line = 0; line < lines.length; line++){
                    retrievePrefixRegion(lines[line]);
                }

            });
            reader.readAsText(file);
        });
    });
}

function retrievePrefixRegion(str) {
    debugger;
    var pattern = /PREFIX\s([^>]+)>/;
    var matching = str.match(pattern)+ ">";
    document.getElementById("textarea").value += matching[1];
//}*/