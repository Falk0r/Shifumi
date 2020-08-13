# Electron-Shifumi

![Shifumi](https://billetsdemissacacia.files.wordpress.com/2017/11/expo-spacejunk.jpg?w=840)

## Projet de découverte d'ElectronJS

TP effectué lors de ma formation à l'IT-Akademy pour renforcer nos connaissances sur __javascript__. Le TP consistait à mettre en place une application du célébre jeu SHIFUMI et d'utiliser le framework __ElectronJS__ pour découvrir la programmation logiciel avec des technologies issus du web.

## Structuration d'Electron

L'application __Electron__ s'articule dans notre cas dans une seule fenêtre, celle de notre jeu du Shifumi.

La fenêtre principale est donc appelée dans le fichier main.js à partir du code suivant :

```javascript
function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
}
```
On demande à __Electron__ de charger le fichier index.html où se déroule le jeu du Shifumi au travers de quelques balises

```html
    <div class="battle" hidden>
      <div class="player1">
        <img src="./assets/pierre.png" id="pierre" data-choice="1" class="img">
        <img src="./assets/papier.png" id="papier" data-choice="2" class="img">
        <img src="./assets/ciseaux.png" id="ciseaux" data-choice="3" class="img">
      </div>
      <div class="player2">
        <img id="player2" src="">
      </div>
    </div>
    <h2 id="result"></h2>
```
Une balise pour le champ de bataille suffit à gérer le gameplay.
Tout est ensuite gérée par le code __javascript__ présent dans le fichier renderer.js et appelé par le fichier index.html.

## Déroulement du jeu

Tout le gameplay repose sur le fichier renderer.js. Les différentes combinaisons gagnantes sont gérées à l'aide d'un switch et de l'attribution d'un numéro par figure :
```javascript
switch (true) {
    case player1 == 1 && player2 == 3: 
        result = "win";
        break;
    case player1 == 2 && player2 == 1: 
        result = "win";
        break;
    case player1 == 3 && player2 == 2: 
        result = "win";
        break;
    default:
        result = "loose"
        break;
}
```
Le reste du code sert à compter les tours et réinitialiser les images. A la fin du jeu, si le joueur remporte la victoire après 3 tentatives, un message de succès apparait dans la fenêtre et petite spécificté d'__Electron__, une notification est envoyé par le système :
```javascript
let myNotification = new Notification('Shifumi', {
            body: 'TU AS GAGNE OMG !!!, va te reposer...',
            urgency: "critical"
          })
```
## Aperçu de l'application :

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6689930564289523712" height="741" width="504" frameborder="0" allowfullscreen="" title="Post intégré"></iframe>

## Pour l'utiliser :

Pour faire fonctionner ce repo, vous aurez besoin de [Git](https://git-scm.com) et [Node.js](https://nodejs.org/en/download/) (qui inclus [npm](http://npmjs.com)) d'installer sur votre ordinateur. Puis taper les lignes de commande suivante :

```bash
# Clone this repository
git clone https://github.com/Falk0r/Shifumi.git
# Go into the repository
cd Shifumi
# Install dependencies
npm install
# Run the app
npm start
```
<p align="center">
  <img width="100" height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png">
</p>


