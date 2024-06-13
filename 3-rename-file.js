/**
 * Renombra el fichero "bird.jpg" a "pajaro.jpg"
 */

const fs = require("fs");

fs.rename("bird.jpg", "pajaro.jpg", (err) => {
    if (err) throw err
    console.log("Renamed!")
})