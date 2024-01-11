const motoList = [
	{
		marque: "BMW",
		logo: "https://i.pinimg.com/474x/0e/de/d0/0eded09eadc70325957d7f9693c89358.jpg",
		year: 2022,
		model: "S 1000 RR",
		imageUrl: "http://www.lerepairedesmotards.com/img/essais/bmw/s1000rr/bmw-s1000-rr-statique-avant_hd.jpg",
		prix: "20 740 €",
		consommation: "6.3 L",
		autonomie: "262 km",
		couple: "11.5 mKg",
		puissance: "210 ch",
		Rapport_poids_puissance : "0.83 kg/ch",
		vitesse : "303 km/h",
	},
	{
		marque: "Ducati",
		logo : "https://upload.wikimedia.org/wikipedia/fr/a/ae/Ducati_logo.png",
		year: 2019,
		model : "Panigale V4 R",
		imageUrl:
			"http://www.lerepairedesmotards.com/img/essais/ducati/panigale-v4/ducati-panigale-v4-r-profil_hd.jpg",
		prix: "16 740 €",
		consommation: "4.3 L",
		autonomie: "262 km",
		couple: "11.5 mKg",
		puissance: "210 ch",
		Rapport_poids_puissance : "0.83 kg/ch",
		vitesse : "303 km/h",
	},
	{
		marque: "Kawazaki",
		logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kawasaki_Logo_vert.svg/2560px-Kawasaki_Logo_vert.svg.png",
		year: 2022,
		model : "H2R",
		imageUrl:
			"https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2014/10/359333-kawasaki-ninja-h2r-presenta-300-cv-turbo.jpg?tf=1200x",
		prix: "55 000 €",
		consommation: "8 L",
		autonomie: "/ km",
		couple: "16.8 mKg",
		puissance: "310 ch",
		Rapport_poids_puissance : "0.65 kg/ch",
		vitesse : "400 km/h",
	},
	{
		marque: "Suzuki",
		logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/2560px-Suzuki_logo_2.svg.png",
		year: 2021,
		model : "GSX 1300 R Hayabusa",
		imageUrl:
			"https://www.motoplanete.com/suzuki/zoom-700px/Suzuki-GSX-1300-R-Hayabusa-2023-700px.webp",
		prix: "18 499 €",
		consommation: "7.1 L",
		autonomie: "282 km",
		couple: "15.3 mKg",
		puissance: "190 ch",
		Rapport_poids_puissance : "1.30 kg/ch",
		vitesse : "299 km/h",
	},
	{
		marque: "Aprilia",
		logo: "https://cdn.worldvectorlogo.com/logos/aprilia-2.svg",
		year: 2021,
		model: "RSV4-1100",
		imageUrl:
			"http://www.lerepairedesmotards.com/img/essais/aprilia/rsv4/aprilia-rsv4-factory-static.jpg",
		prix: "55 000 €",
		consommation: "/ L",
		autonomie: "/ km",
		couple: "/ mKg",
		puissance: "225 ch",
		Rapport_poids_puissance : "0.73 kg/ch",
		vitesse : "310 km/h",
	},
	{
		marque: "Yamaha",
		logo: "https://automarken-liste.com/wp-content/uploads/2021/02/Yamaha-Logo.png",
		year: 2021,
		model: "R1M 1000",
		imageUrl:
			"https://live.staticflickr.com/65535/48283568557_ce484a9535_h.jpg",
		prix: "25 999 €",
		consommation: "7.2 L",
		autonomie: "236 km",
		couple: "11.60 mKg",
		puissance: "200 ch",
		Rapport_poids_puissance : "0.94 kg/ch",
		vitesse : "300 km/h",
	},
	{
		marque: "Triumph",
		logo: "https://media.cdnws.com/_i/46016/m1440-6444/2014/48/stickers-triumph-logo-ref23triumph-autocollant-triumph-sticker-pour-moto-sport.jpeg",
		year: 2023,
		model: "Speed triple 1200 rs",
		imageUrl:
			"https://static1.wrs.it/1316504-thickbox_default/akrapovic-titanium-slip-on-silencer-triumph-speed-triple-1200-rs-rr-2020-2023.jpg",
		prix: "17 999 €",
		consommation: "/ L",
		autonomie: "224 km",
		couple: "12.74 mKg",
		puissance: "180 ch",
		Rapport_poids_puissance : "0.99 kg/ch",
		vitesse : "260 km/h",
	},
	{
		marque: "Honda",
		logo: "https://www.1min30.com/wp-content/uploads/2017/09/logo-honda-moto.jpg",
		year: 2023,
		model: "CBR1000RR-R",
		imageUrl:
			"https://images.caradisiac.com/images/3/4/4/0/183440/S0-rappel-general-pour-la-honda-cbr1000rr-r-631360.jpg",
		prix: "21 999 €",
		consommation: "6.25 L",
		autonomie: "256 km",
		couple: "11.60 mKg",
		puissance: "217 ch",
		Rapport_poids_puissance : "0.86 kg/ch",
		vitesse : "300 km/h",
	},
	{
		marque: "KTM",
		logo: "https://cdn.worldvectorlogo.com/logos/ktm-logo-1.svg",
		year: 2024,
		model: "1390 Super Duke R",
		imageUrl: "https://kickstart.bikeexif.com/wp-content/uploads/2023/11/2024-ktm-1390-super-duke-r-2.jpg",
		prix: "21 449 €",
		consommation: "5.9 L",
		autonomie: "297 km",
		couple: "14.80 mKg",
		puissance: "190 ch",
		Rapport_poids_puissance : "1.05 kg/ch",
		vitesse : "290 km/h",
	},
	
]


const gameContainer = document.querySelector(".row")
const modalMarque = document.querySelector(".modal-marque")
const modalBody = document.querySelector(".modal-body")
const modalFooter = document.querySelector(".modal-footer")

const cardShow = () => {
	// Boucle pour afficher les motos
	motoList.forEach((game) => {
		gameContainer.innerHTML += `
        <article class="col">
           <div class="card shadow-sm">
              <img src="${game.imageUrl}" class="card-img-top" alt="...">
               <div class="card-body">
                   <h5 class="card-marque">${game.marque}</h5>
				   <img src="${game.logo}" class="card-img" alt="...">
				   <h5 class="card-marque">Modèle : ${game.model}</h5>
                   <p class="card-text">Creation Year: ${game.year}</p>
                   <div class="btn-group">

                        <button
                            type="button"
                            class="view btn btn-sm btn-outline-dark"
                            data-bs-toggle="modal"
				            data-bs-target="#modalGame"
                        >View
                        </button>
                        
						<button
                            type="button"
                            class="btn btn-sm btn-outline-dark edit"
                            data-bs-toggle="modal"
				            data-bs-target="#modalGame"
                        >Edit
                        </button>

						<button
							type="button"
							class="spec btn btn-sm btn-outline-dark"
							data-bs-toggle="modal"
							data-bs-target="#modalGame"
						>Specification
						</button>
                    </div>
               </div>
           </div>
        </article>
    `
	})
}

cardShow()

// ratraper le button "views"
const viewBtnArray = document.querySelectorAll(".view")

// ratraper le button "edit"
const editBtnArray = document.querySelectorAll(".edit")

// ratraper le button "spec"
const specBtnArray = document.querySelectorAll(".spec")

viewBtnArray.forEach((btn, index) => {
	btn.addEventListener("click", () => {
		modalMarque.textContent = motoList[index].marque
		modalBody.innerHTML = `<img class="img-fluid" src="${motoList[index].imageUrl}" >`
		modalBody.innerHTML += `<p>Year: ${motoList[index].year}</p>`
		modalFooter.innerHTML = `
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Close
            </button>
        `
	})
})

const addEditClick = () => {
	editBtnArray.forEach((btn, indx) => {
		btn.addEventListener("click", () => {
			console.log(indx)
			modalMarque.textContent = "Edit mode !"
			modalBody.innerHTML = `
            <form>
                <div class="mb-3">
                    <label for="marque" class="form-label">Marque</label>
                    <input type="text" class="form-control" id="marque" aria-describedby="marque"  value="${motoList[indx].marque}">
                    <div class="d-none form-text">We'll never share your email with anyone else.</div>
                </div>        
                
                 <div class="mb-3">
                    <label for="year" class="form-label">Year</label>
                    <input type="number" class="form-control" id="year" aria-describedby="year"  value="${motoList[indx].year}">
                    <div class="d-none form-text">We'll never share your email with anyone else.</div>
                </div>    
				
				<div class="mb-3">
					<label for="modele" class="form-label">Modele</label>
					<input type="text" class="form-control" id="modele" aria-describedby="modele"  value="${motoList[indx].model}">
					<div class="d-none form-text">We'll never share your email with anyone else.</div>
				</div>  

                <div class="mb-3">
                    <label for="image" class="form-label">Image URL</label>
                    <input type="text" class="form-control" id="image" aria-describedby="image"  value="${motoList[indx].imageUrl}">
                    <div class="d-none form-text">We'll never share your email with anyone else.</div>
                    <img class="img-thumbnail w-50 mt-2" src="${motoList[indx].imageUrl}" >
                </div>     
        `
			modalFooter.innerHTML = `
            <button
                type="button" class="btn btn-secondary" data-bs-dismiss="modal"
            >
                Close
            </button>
            <button type="submit" class="btn btn-primary" id="sub-btn" data-bs-dismiss="modal">
                Save changes
            </button>
            </form>
        `

			/*  form handling   */
			const submitBtn = document.querySelector("#sub-btn")

			submitBtn.addEventListener("click", () => {
				const formulaire = document.querySelector("form")
				let newMarque = formulaire["marque"].value
				let newYear = formulaire["year"].value
				let newmodele = formulaire["modele"].value
				var newImage = formulaire["image"].value

				/*  form validation  */
				/*  empty fields  */
				if (newMarque === "" || newYear === "" || newImage === "") {
					alert("Certaines parties de votre formulaire sont vides")
					return
				}
				/*  odd characters  */
				const alphanumericRegex = /^[a-zA-Z0-9/.:-_ 'éùçà()]+$/
				if (
					!alphanumericRegex.test(newMarque) ||
					!alphanumericRegex.test(newYear)
				) {
					alert("Certaines characters sont pas variable")
					return
				}
				/*  tout ok, on enregistre  */

				// console.log(newMarque, newImage, newModele, newYear, indx)
				motoList[indx].marque = newMarque
				motoList[indx].year = newYear
				motoList[indx].modele = newmodele
				motoList[indx].imageUrl = newImage

				const cardList = document.querySelectorAll(".card")
				document.querySelectorAll(".card-marque")[indx].innerHTML = newMarque
				document.querySelectorAll(".card-text")[indx].innerHTML = `Year: ${newYear} `
				document.querySelectorAll(".card-img-top")[indx].src = newImage
			})
		})
	})
}

specBtnArray.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        modalMarque.textContent = "Spécifications";
        // Réinitialiser le contenu de modalBody à une chaîne vide
        modalBody.innerHTML = "";
        // Ajouter les nouvelles spécifications
        modalBody.innerHTML += `<p>Prix : ${motoList[index].prix}</p>`;
        modalBody.innerHTML += `<p>Consommation : ${motoList[index].consommation}</p>`;
        modalBody.innerHTML += `<p>Autonomie : ${motoList[index].autonomie}</p>`;
        modalBody.innerHTML += `<p>Couple moteur : ${motoList[index].couple}</p>`;
        modalBody.innerHTML += `<p>Rapport poids/Puissance : ${motoList[index].Rapport_poids_puissance}</p>`;
        modalBody.innerHTML += `<p>Puissance : ${motoList[index].puissance}</p>`;
        modalBody.innerHTML += `<p>Vitesse : ${motoList[index].vitesse}</p>`;
        modalFooter.innerHTML = `
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
            Close
            </button>
        `;
    });
});

addEditClick()
