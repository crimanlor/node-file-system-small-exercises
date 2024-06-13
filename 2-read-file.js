/**
 * Lee el fichero "test.txt" que acabas de crear y muestra su contenido por la consola
 */

const fs = require("fs");

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data)
})