let slides = [
	{
		"image":"image/slide1.jpg",
		"tagLine":"Un seul être vous manque et tout est dépeuplé",
        "auteur": "Lamartine"
	},
	{
		"image":"image/slide2.jpg",
		"tagLine":"Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction",
        "auteur": "Antoine De Saint-Exupéry"
	},
	{
		"image":"image/slide3.jpg",
		"tagLine":"L'amour d'une mère c'est comme l'air : c'est tellement banal qu'on ne le remarque même pas. Jusqu'à ce qu'on en manque",
        "auteur": "Pam Brown"

	},
]


// Création des bullet des images
let bullet = `<div class="dot"></div>`;


let dots = document.querySelector(".dots"); 
dots.innerHTML=`${bullet.repeat(slides.length)}`;
dots.firstChild.className= "dot dot_selected";


// // fonction qui permet de gérer les dot
let bulletSelected = 0;
function ChangeDot(sens){
	bulletSelected = bulletSelected + sens;
	bulletPrecedent = bulletSelected - sens

	if(bulletSelected > dots.childNodes.length -1){
		bulletSelected = 0;
	}
	if(bulletSelected < 0 ){
		bulletSelected = dots.childNodes.length -1
	}

	console.log(dots.childNodes[bulletSelected]);
	dots.childNodes[bulletPrecedent].className="dot"
	dots.childNodes[bulletSelected].className="dot dot_selected"
}

// fonction qui permet de gérer le carousel

// memorise la slide en cours
let numero = 0;
function ChangeSlide(sens){
	// Lors du clique la variable numero et incrementer de 1 ou décrementer de -1
	numero = numero + sens;

    // si numero est supérieur à 0 on le remet à 0 afin de pouvoir boucler sur le tableau
    if(numero > slides.length -1){
        numero = 0;
    }

    // Permet de ne pas dépasser la longueur du tableau cela va parcourir les items du tableau
    if(numero < 0){
        numero = slides.length -1;
    }

	// Permet de changer la source de la class banner-img 
	document.querySelector(".banner-img").src = slides[numero].image;
	document.querySelector(".texte").innerHTML= `${slides[numero].tagLine}`;	
    document.querySelector(".auteur").innerHTML= `${slides[numero].auteur}`;	

}

// Initilisation de l'affichage par rapport au tableau

let left = document.querySelector(".arrow_left");
let right = document.querySelector('.arrow_right')


left.addEventListener("click",()=>{
	ChangeSlide(-1);
	ChangeDot(-1)
})

right.addEventListener("click",()=>{
	ChangeSlide(1);
	ChangeDot(1)

})