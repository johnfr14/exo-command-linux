const fs = require('fs')


/* this switch will check if the user has well wrote at least 2 parameters the origin path and the new path */
switch (process.argv.length) {
  case 2:
    console.log('cp: Veuillez mettre le fichier/dossier à copier ainsi que la destination où il sera copié\n')
    console.log('Example: node copyFile.js leFichierCopié.js ./nouveauxFile.js')
    process.exit(1)
  case 3:
    console.log('cp: Veuillez mettre la destination où il sera copié\n')
    console.log('Example: node copyFile.js leFichierCopié.js ./nouveauxFile.js')
    process.exit(1)
  default:
}


/* check if the first path really exist */
fs.existsSync(process.argv[2]) ? "" : console.log(`Désoler votre fichier/dossier '${process.argv[2]}' n'existe pas`)


/* si notre fichier copié n'a pas de chemin alors il sera créée dans le repertoir courant */
let newPath = ''
if (process.argv[3][0] >= '0' && process.argv[3][0] <= '9' || process.argv[3][0] >= 'A' && process.argv[3][0] <= 'Z' || process.argv[3][0] >= 'a' && process.argv[3][0] <= 'z') {
  newPath = './' + process.argv[3]
}


/* si notre fichier existe déjà dans le repertoir selectioné alors message d'erreur il y aura */
if (fs.existsSync(newPath)) {
  console.log('CP: Ce fichier/dossier existe déjà')
  process.exit(1)
} 


/* ETTTT ZÉÉÉÉÉÉÉÉÉ BARTIIIIIIIII */
fs.copyFileSync(process.argv[2],process.argv[3])