const fs = require('fs')

if(process.argv[2] === 'echo'){
//lire un fichier dans ce cas là créer un fichier texte avec le texte precis
fs.writeFileSync(process.argv[3], process.argv[4])
}
if(process.argv[2] === 'cp'){
// fait une copie du fichier a dans le nouveau fichier B
fs.copyFileSync(process.argv[3], process.argv[4])
}
if(process.argv[2] === 'mkdir'){
//créer un nouveau dossier
mkdirSync(process.argv[3])
}