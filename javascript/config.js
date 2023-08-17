let score = 0
let MotCorrect = true
let MotUtilisateur = ""
let mots = ["compote", "fourchette", "chien","voiture"]
let phrases = ["Pas de panique !", "La vie, lunivers et le reste", "Merci pour le poisson"]
let InputJoueur = document.getElementById("InputRep")
let validation = document.getElementById("validation")
let affichage = document.querySelector(".ennonce .affichage")
let ScoreAffichage = document.querySelector("#score span")
let choix = document.querySelectorAll(".Choix input")
let start = document.getElementById("start")
let timer = document.querySelector(".timer")
let time = 60
console.log("MAJUSCULE".toLowerCase())


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
        affichage.textContent = mots[i]
        InputJoueur.value = ""

        document.addEventListener("keypress", (event) => {
            if (event.key == "Enter"){
                console.log(event.target)
            if (InputJoueur.value.toLowerCase() == mots[i].toLowerCase()) {
                score = score + Math.round(mots[i].length*(time/10))
            }
            i++
            if(i>=mots.length) {
                affichage.textContent = "Le jeux est finit"
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
            }
        
                
                
            InputJoueur.value = ""
            ScoreAffichage.textContent = score
            }
        
        })
        validation.addEventListener("click", (event) => {
            console.log(event.target)
            if (InputJoueur.value.toLowerCase() == mots[i].toLowerCase()) {
                score = score + Math.round(mots[i].length*(time/10))
            }
            i++
            if(i>=mots.length) {
                affichage.textContent = "Le jeux est finit"
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
            }
        
                
                
            InputJoueur.value = ""
            ScoreAffichage.textContent = score
        })

            
        
    }
    else if (choixUtilisateur == "phrases") {
        let i = 0
        affichage.textContent = phrases[i]
        InputJoueur.value = ""

        document.addEventListener("keypress", (event) => {
            if (event.key == "Enter"){
                console.log(event.target)
            if (InputJoueur.value.toLowerCase() == phrases[i].toLowerCase()) {
                score = score + Math.round(phrases[i].length*(time/10))
            }
            i++
            if(i>=phrases.length) {
                affichage.textContent = "Le jeux est finit"
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
            }
        
                
                
            InputJoueur.value = ""
            ScoreAffichage.textContent = score
            }
        
        })
        validation.addEventListener("click", (event) => {
            console.log(event.target)
            if (InputJoueur.value.toLowerCase() == phrases[i].toLowerCase()) {
                score = score + Math.round(phrases[i].length*(time/10))
            }
            i++
            if(i>=phrases.length) {
                affichage.textContent = "Le jeux est finit"
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
            }
        
                
                
            InputJoueur.value = ""
            ScoreAffichage.textContent = score
        })
    }

}


