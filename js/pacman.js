let maGrille = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,2,0,0,2,0,2,0,0,0,0],
    [2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2],
    [0,0,0,0,2,0,2,0,0,2,0,0,2,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],
    [0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

let score = 0

let pacman = {
        
    //position de départ de Pacman sur la grille
     y:5, 
     x:5,
    //direction de départ de pacman (haut :4 , bas : 2, gauche : 3, droite : 1)
     direction:1
   }

function afficheGrille() {
document.getElementById('grille').innerHTML = ''

for (let i in maGrille) {

    for (let j in maGrille[i]) {

        //  ajoute un élément HTML de type div avec une classe dépendant de la valeur de la case sur le conteneur grid CSS
        // creer un element puis mettre classlist       
        let monElem = document.createElement('div')
        if (maGrille[i][j] == 0) {
            monElem.classList.add("mur")

        }

        else if (maGrille[i][j] == 1) {

            monElem.classList.add("sol")

        }


        else if (maGrille[i][j] == 2) {

            monElem.classList.add("bonbon")

        }
        monElem.style.gridColumn = parseInt(j) + 1;
        monElem.style.gridRow = parseInt(i) + 1;
        document.getElementById('grille').appendChild(monElem)

    }
}
}


function affichePacman() {
    let monPacman = document.createElement('div');// creation de la div 
    monPacman.classList.add('pacman');//nom de la class div
    monPacman.style.gridRow = pacman.y; // écrire en css
    monPacman.style.gridColumn = pacman.x;
    document.getElementById('grille').appendChild(monPacman)// ajout du pacman
}


function bougePacman() {

    if(pacman.direction == 1) {
        pacman.x++
    }

    if(pacman.direction == 2) {
        pacman.y++
    }

    if(pacman.direction == 3) {
        pacman.x--
    }

    if(pacman.direction == 4) {
        pacman.y--
    }

    if(maGrille[pacman.y-1][pacman.x-1]==0) {
    // là on a un mur
    
    if(pacman.direction == 1) {
        pacman.x--
    }

    if(pacman.direction == 2) {
        pacman.y--
    }

    if(pacman.direction == 3) {
        pacman.x++
    }

    if(pacman.direction == 4) {
        pacman.y++
    }


    }

    if(maGrille[pacman.y-1][pacman.x-1]==2) {
        maGrille[pacman.y-1][pacman.x-1]=1
        score++
    }

}

function appuieTouche(e) {
    console.log(e.key)
    document.body.addEventListener("keydown",appuieTouche)


    if(e.key=="z") {
        pacman.direction = 4
      
    }

    if(e.key=="s") {
        pacman.direction = 3
      
      }

      if(e.key=="q") {
        pacman.direction = 2
      
      }

      if(e.key=="d") {
        pacman.direction = 1
      
      }
}

function afficheScore() {
    document.getElementById('score').innerHTML=score
    
    
}

function refresh() {
    // là on mets le code a afficher toutes les secondes
    bougePacman()
    afficheGrille()
    affichePacman()
    afficheScore()
    
    setTimeout(refresh, 1000)
}
refresh()
