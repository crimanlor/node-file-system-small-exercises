/**
 * Crea una función que lea un fichero que remplaze todos los textos de un fichero. Se debe generar un nuevo fichero resultante de nombre "result.html" .
 * 
 * Resultado esperado tras la primera llamada a la función: https://oscarm.tinytake.com/msc/OTcyMDYyOV8yMzM1NjM3Mg
 * 
 * @param {string} htmlFilePath Ruta al fichero a modificar
 * @param {string} textToSearch Texto a buscar
 * @param {string} textToReplace Texto a reemplazar     
 */


const fs = require("fs");

function replaceTextInFile(htmlFilePath, textToSearch, textToReplace) {
    
    // 1. Leer el fichero que me pasan de htmlFilePAth
    fs.readFile(htmlFilePath, "utf-8", (err, data) => {
        // 2. Usar el método de string adecuado para cambiar un texto por otro
        const replacedContent = data.replaceAll(textToSearch, textToReplace)
        // 3. Escribir el nuevo fichero de nombre "result.html"
        fs.writeFile("result.html", replacedContent, "utf-8", (err) => {
            if(err) throw err
            console.log(err)
        })
    })
}

replaceTextInFile("./index.html", "FFC371", "ADD8E6");
//replaceTextInFile("./index.html", "Aaron", "Caballero Oscuro");
//replaceTextInFile("./index.html", "El Horno de Leña", "La Pizzería Feliz");

