let score = 0
let MotCorrect = true
let MotUtilisateur = ""
let mots = ["livre", "maison", "voiture", "fleur", "soleil", "arbre", "montagne", "mer", "riviere", "pont", "chien", "chat", "oiseau", "poisson", "souris", "stylo", "papier", "crayon", "tableau", "lampe", "chapeau", "velo", "train", "avion", "ecole", "musique", "sport", "television", "ordinateur", "telephone"]
let phrases = ["La vie est belle", "Il fait beau aujourd'hui", "J'aime les chiens", "Le travail est important", "La musique me transporte", "Je prépare un délicieux repas", "Le soleil se couche lentement", "Les fleurs embellissent le jardin", "La mer est calme ce matin", "Le temps passe trop vite"]
let InputJoueur = document.getElementById("InputRep")
let validation = document.getElementById("validation")
let affichage = document.querySelector(".ennonce .affichage")
let ScoreAffichage = document.querySelector("#score span")
let choix = document.querySelectorAll(".Choix input")
let start = document.getElementById("start")
let timer = document.querySelector(".timer")
let time = 30
let nombre_mots = mots.length
let nombre_phrases = phrases.length


function nombreAléatoire(nombre){
    return Math.floor(Math.random() * (nombre))
}

function ChoixDuMode(){
    choix[0].addEventListener("click", (event) => {
        choix[1].checked = false
    })

    choix[1].addEventListener("click", (event) => {
        choix[0].checked = false
    })
}

function Jeu(choixUtilisateur) {
    if (choixUtilisateur == "mots") {
        let i = 0
        i = nombreAléatoire(nombre_mots)
        affichage.textContent = mots[i]
        InputJoueur.value = ""
        nombre_mots=nombre_mots-1

        document.addEventListener("keypress", (event) => {
            if (event.key == "Enter"){
            if (InputJoueur.value.toLowerCase() == mots[i].toLowerCase()) {
                score = score + Math.round(mots[i].length*(time/10))
            } 
            mots.splice(i,1)
            i = nombreAléatoire(nombre_mots)
            nombre_mots=nombre_mots-1
            if(mots.length == 0) {
                affichage.textContent = "Le jeux est fini"
                start.textContent = "reload"
                InputJoueur.disabled = true
                clearInterval(timing)
                timer.textContent = "finit"
                start.addEventListener("click", (event)=> {
                    location.reload()
                })
            }
            else{
                affichage.textContent = mots[i]
                InputJoueur.focus()
            }
        
                
                
            InputJoueur.value = ""
            ScoreAffichage.textContent = score
            }
        
        })
        validation.addEventListener("click", (event) => {
            if (InputJoueur.value.toLowerCase() == mots[i].toLowerCase()) {
                score = score + Math.round(mots[i].length*(time/10))
            } 
            mots.splice(i,1)
            i = nombreAléatoire(nombre_mots)
            nombre_mots=nombre_mots-1
            if(mots.length == 0) {
                affichage.textContent = "Le jeux est fini"
                start.textContent = "reload"
                InputJoueur.disabled = true
                clearInterval(timing)
                timer.textContent = "finit"
                start.addEventListener("click", (event)=> {
                    location.reload()
                })
            }
            else{
                affichage.textContent = mots[i]
                InputJoueur.focus()
            }
        
                
                
            InputJoueur.value = ""
            ScoreAffichage.textContent = score
        })

            
        
    }
    else if (choixUtilisateur == "phrases") {
        let i = 0
        i = nombreAléatoire(nombre_phrases)
        affichage.textContent = phrases[i]
        InputJoueur.value = ""
        nombre_phrases=nombre_phrases-1

        document.addEventListener("keypress", (event) => {
            if (event.key == "Enter"){
                if (InputJoueur.value.toLowerCase() == phrases[i].toLowerCase()) {
                    score = score + Math.round(phrases[i].length*(time/10))
                } 
                phrases.splice(i,1)
                i = nombreAléatoire(nombre_phrases)
                nombre_phrases=nombre_phrases-1
                if(phrases.length == 0) {
                    affichage.textContent = "Le jeux est fini"
                    start.textContent = "reload"
                    InputJoueur.disabled = true
                    clearInterval(timing)
                    timer.textContent = "finit"
                    start.addEventListener("click", (event)=> {
                        location.reload()
                    })
                }
                else{
                    affichage.textContent = phrases[i]
                    InputJoueur.focus()
                }
            
                    
                    
                InputJoueur.value = ""
                ScoreAffichage.textContent = score
            }
        
        })
        validation.addEventListener("click", (event) => {
            if (InputJoueur.value.toLowerCase() == phrases[i].toLowerCase()) {
                score = score + Math.round(phrases[i].length*(time/10))
            } 
            phrases.splice(i,1)
            i = nombreAléatoire(nombre_phrases)
            nombre_phrases=nombre_phrases-1
            if(phrases.length == 0) {
                affichage.textContent = "Le jeux est fini"
                start.textContent = "reload"
                InputJoueur.disabled = true
                clearInterval(timing)
                timer.textContent = "finit"
                start.addEventListener("click", (event)=> {
                    location.reload()
                })
            }
            else{
                affichage.textContent = phrases[i]
                InputJoueur.focus()
            }
        
                
                
            InputJoueur.value = ""
            ScoreAffichage.textContent = score
        })
    }

}


