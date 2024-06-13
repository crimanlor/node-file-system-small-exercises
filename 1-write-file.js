/**
 * Escribe un fichero de nombre "test.txt" con el texto "Hello World!".
 * 
 */

const fs = require("fs");

fs.writeFile("test.txt", "Hello Word!", (err) => {
    if (err) throw err;
    console.log("Saved!")
})