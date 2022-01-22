let inputAcceuil=document.querySelector('#menuAcceuil')
let inputPresentation=document.querySelector('#menuPresentation')
let inputFormation=document.querySelector('#menuFormation')
let inputProjets=document.querySelector('#menuProjets')
let inputContact=document.querySelector('#menuContact')
let inputbouton1=document.querySelector('#bouton1')
let inputbouton2=document.querySelector('#bouton2')
let inputbouton3=document.querySelector('#bouton3')
let inputbouton4=document.querySelector('#bouton4')
let inputbouton5=document.querySelector('#bouton5')
let inputlegend1=document.querySelector('#legend1')
let inputlegend2=document.querySelector('#legend2')
let inputlegend3=document.querySelector('#legend3')
let inputlegend4=document.querySelector('#legend4')
let inputlegend5=document.querySelector('#legend5')
let inputThemeSombre=document.querySelector('#themeSombre')
let inputThemeClaire=document.querySelector('#themeClaire')
const inputEmail = document.querySelector('#email')
const validFormButton = document.querySelector('button.submit')
const inputAutoText=document.getElementById('autotext')
const text="Développeur informatique"
var claire=true
let index=0


//met ou enlève la classe active des différents boutons de navigation pour les afficher en rouge ou non 
if(window.location.href.includes("index.html"))
{
    inputAcceuil.classList.add("actif")
}

else
{
    inputAcceuil.classList.remove("actif")
}

if(window.location.href.includes("projets"))
{
    inputProjets.classList.add("actif")
}

else
{
    inputProjets.classList.remove("actif")
}

//met ou enlève la classe active des différents boutons de navigation pour les afficher en rouge ou non (est appelé à chaque scroll)
function activeClass()
{
    if(window.location.href.includes("index.html"))
    {
        if(document.querySelector('#presentation').getBoundingClientRect().top<1 )
        {
            inputPresentation.classList.add("actif")
        }

        else
        {
            inputPresentation.classList.remove("actif")
        }

        if(document.querySelector('#formation').getBoundingClientRect().top<1)
        {
            inputFormation.classList.add("actif")
        }
        
        else
        {
            inputFormation.classList.remove("actif")
        }

        if(document.querySelector('#projets').getBoundingClientRect().top<1)
        {
            inputProjets.classList.add("actif")
        }
        
        else
        {
            inputProjets.classList.remove("actif")
        }
    
        if(document.querySelector('#contact').getBoundingClientRect().top<1 )
        {
            inputContact.classList.add("actif")
        }

        else
        {
            inputContact.classList.remove("actif")
        }
    }
}



//génère un nombre en min et max qui sert de temps entre deux appaition de lettre
const randomSpeed=(min,max)=>{
    return Math.floor(Math.random() * (max - min) + min)
}

//faite apparaitre une lettre
const play=()=>{
    if(window.location.href.includes("index.html"))
    {
    inputAutoText.innerHTML=text.slice(0,index)

    index++;

    if(index>text.length)
    {
        index=0
    }

    clearInterval(timer)
    timer =setInterval(play, randomSpeed(100,600))
}
}

let timer=setInterval(play,400)


//met ou enlève la classe legendActif des différentes legendes pour les afficher en chocolat ou non selon le bouton cliqué (est appelé à chaque clic) 
function clic(e)
{
    if(e.target==inputbouton1)
    {
        inputlegend1.classList.add("legendActif")
        inputlegend2.classList.remove("legendActif")
        inputlegend3.classList.remove("legendActif")
        inputlegend4.classList.remove("legendActif")
        inputlegend5.classList.remove("legendActif")
    }

    if(e.target==inputbouton2)
    {
        inputlegend2.classList.add("legendActif")
        inputlegend1.classList.remove("legendActif")
        inputlegend3.classList.remove("legendActif")
        inputlegend4.classList.remove("legendActif")
        inputlegend5.classList.remove("legendActif")
    }

    if(e.target==inputbouton3)
    {
        inputlegend3.classList.add("legendActif")
        inputlegend2.classList.remove("legendActif")
        inputlegend1.classList.remove("legendActif")
        inputlegend4.classList.remove("legendActif")
        inputlegend5.classList.remove("legendActif")
    }

    if(e.target==inputbouton4)
    {
        inputlegend4.classList.add("legendActif")
        inputlegend2.classList.remove("legendActif")
        inputlegend3.classList.remove("legendActif")
        inputlegend1.classList.remove("legendActif")
        inputlegend5.classList.remove("legendActif")
    }

    if(e.target==inputbouton5)
    {
        inputlegend5.classList.add("legendActif")
        inputlegend2.classList.remove("legendActif")
        inputlegend3.classList.remove("legendActif")
        inputlegend4.classList.remove("legendActif")
        inputlegend1.classList.remove("legendActif")
    }
}


//change le thème en sombre ou en clair en mettant ou enlevant la classe dark(est appélé quand l'utilisateur appuie sur le radio sombre ou claire)
function theme()
{
    console.log("test")
    if(inputThemeSombre.checked && claire==true)
    {
        console.log("sombre")
        inputP=document.querySelectorAll('p')
        inputP.forEach(p => 
        {
            p.classList.add("dark")
        })

        inputArticle=document.querySelectorAll('article')
        inputArticle.forEach(article => 
        {
            article.classList.add("dark")
        })

        inputLabel=document.querySelectorAll('label')
        inputLabel.forEach(label => 
        {
            label.classList.add("dark")
        })
        
        inputTd=document.querySelectorAll('td')
        inputTd.forEach(td => 
        {
            td.classList.add("dark")
        })

        inputTh=document.querySelectorAll('th')
        inputTh.forEach(th => 
        {
            th.classList.add("dark")
        })

        inputLegend=document.querySelectorAll('legend')
        inputLegend.forEach(legend => 
        {
            legend.classList.add("dark")
        })

        inputh2=document.querySelectorAll('h2')
        inputh2.forEach(h2 => 
        {
            h2.classList.add("dark")
        })

        inputh3=document.querySelectorAll('h3')
        inputh3.forEach(h3 => 
        {
            h3.classList.add("dark")
        }) 
        
        inputh4=document.querySelectorAll('h4')
        inputh4.forEach(h4 => 
        {
            h4.classList.add("dark")
        })
        
        if(window.location.href.includes("index.html"))
        {
        document.body.style.backgroundImage = "url('./img/fondSombre.png')";
        }
        else
        {
        document.body.style.backgroundImage = "url('../img/fondSombre.png')";
        }
        
        claire=false;
    }

    else if(inputThemeClaire.checked && claire==false)
    {
        console.log("claire")
        inputP=document.querySelectorAll('p')
        inputP.forEach(p => 
        {
            p.classList.remove("dark")
        })

        inputArticle=document.querySelectorAll('article')
        inputArticle.forEach(article => 
        {
            article.classList.remove("dark")
        })

        inputLabel=document.querySelectorAll('label')
        inputLabel.forEach(label => 
        {
            label.classList.remove("dark")
        })

        inputTd=document.querySelectorAll('td')
        inputTd.forEach(td => 
        {
            td.classList.remove("dark")
        })

        inputTh=document.querySelectorAll('th')
        inputTh.forEach(th => 
        {
            th.classList.remove("dark")
        })

        inputLegend=document.querySelectorAll('legend')
        inputLegend.forEach(legend => 
        {
            legend.classList.remove("dark")
        })

        inputh2=document.querySelectorAll('h2')
        inputh2.forEach(h2 => 
        {
            h2.classList.remove("dark")
        })

        inputh3=document.querySelectorAll('h3')
        inputh3.forEach(h3 => 
        {
            h3.classList.remove("dark")
        }) 

        inputh4=document.querySelectorAll('h4')
        inputh4.forEach(h4 => 
        {
            h4.classList.remove("dark")
        })

        if(window.location.href.includes("index.html"))
        {
        document.body.style.backgroundImage = "url('./img/fond.png')";
        }
        else
        {
        document.body.style.backgroundImage = "url('../img/fond.png')";
        }

        claire=true;

    }
}

try {
validFormButton.setAttribute('disabled', true);
} 
catch (error) {
}
        
const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//teste si le mail entré est valid ou non 
function validMail(e) 
        {

                if (regex.test(String(inputEmail.value).toLowerCase()))
                {
                    inputEmail.classList.remove('invalid')
                    inputEmail.classList.add('valid')
                }

                else
                {
                    inputEmail.classList.add('invalid')
                    inputEmail.classList.remove('valid')
                }

                if (regex.test(String(inputEmail.value).toLowerCase()))
                {
                    validFormButton.removeAttribute('disabled')
                }

                else
                {
                    validFormButton.setAttribute('disabled', true)
                }
        }

window.addEventListener('scroll', activeClass);
window.addEventListener('click', clic);
try {
inputThemeClaire.addEventListener('click', theme);
inputThemeSombre.addEventListener('click', theme);
inputEmail.addEventListener('keyup', validMail);
} catch (error) {
}
