let timing = 0
let debut = 0
let TimingDebut = 0

function UpdateTimer() {
    time = time -1
    timer.textContent = time

    if (time == 0) {
        clearInterval(timing)
        timer.textContent = "temps écoulé"
        affichage.textContent = "Le jeux est finit"
        start.textContent = "reload"
        InputJoueur.disabled = true
        start.addEventListener("click", (event)=> {
            location.reload()
        })
    }
}


function debutJeuMots() {
    debut = debut - 1
    affichage.textContent = debut

    if (debut == 0) {
        clearInterval(TimingDebut)
        clearInterval(timing)
        time = 30
        Jeu("mots")
        InputJoueur.focus()
        timing = setInterval(UpdateTimer, 1000)
    }
}

function debutJeuPhrases() {
    debut = debut - 1
    affichage.textContent = debut

    if (debut == 0) {
        clearInterval(TimingDebut)
        time = 30
        Jeu("phrases")
        InputJoueur.focus()
        timing = setInterval(UpdateTimer, 1000)
    }
}



ChoixDuMode()





start.addEventListener("click", (event) => {
    if (choix[0].checked == true) {
        debut = 3
        affichage.textContent = 3
        TimingDebut = setInterval(debutJeuMots,1000)
        
    }
    else if (choix[1].checked == true){
        debut = 3
        affichage.textContent = 3
        TimingDebut = setInterval(debutJeuPhrases,1000)
    }
    else{
        alert("veuillez choisir un mode de jeu")
    }        
})


