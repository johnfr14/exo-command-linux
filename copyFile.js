const fs = require('fs')

console.log(process.argv[3])

const isAlreadyExist = (path) => {
let pathPasted = process.argv[2].split('/')  
nameFile = pathPasted.pop()
pathPasted = pathPasted.join("/")
pathPasted = fs.readdirSync(path)
console.log(pathPasted)
pathPasted = pathPasted.filter(word => word === nameFile).length
return pathPasted > 0 ? true : false
}

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

fs.existsSync(process.argv[2]) ? "" : console.log(`Désoler votre fichier/dossier '${process.argv[2]}' n'existe pas`)

if (isAlreadyExist(process.argv[3])) {
  console.log('CP: Ce fichier/dossier existe déjà')
  process.exit(1)
} 

fs.copyFileSync(process.argv[2],process.argv[3])