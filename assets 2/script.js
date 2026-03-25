
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// sezione DOM - selezione nodi del dom 
const cardsJs = document.getElementById('cards')
const formJs = document.getElementById('form') // form
const nameJs = document.getElementById('name') // form
const roleJs = document.getElementById('role') // form
const emailJs = document.getElementById('email') // form
const imageJs = document.getElementById('image') // form

// FUNZIONI
function createCard(name, role, email, img){
    const string = `

    <div class="col-md-4 bg-dark p-3 m-3 align-items d-flex" id="card">

      <!-- immagine -->
      <div class="col-4" id="img">
        <img style="width: 100%" src="./assets 2/${img}" alt="${name}">
      </div>

      <div class="col-8 w-100 ms-3">
         <!-- nome -->
         <div class="text-white text-uppercase" id="name">
           <strong>${name}</strong>
         </div>
         <!-- ruolo -->
         <div class="text-white fw-light small" id="role">${role}</div>
         <!-- email -->
         <div class="link-info" id="email">${email}</div>
      </div>

    </div>
  `
  return string
}
function addCardInList(arrayMember, listJs){
  let cardString = '' // da concatenare

  for (let i = 0; i < arrayMember.length; i++){

    const member = arrayMember[i] // objects {}
    const {name, role, email, img} = member

    cardString += createCard(name, role, email, img)
 }

// console.log(cardString);
listJs.innerHTML = cardString
}

// sezione FOR - cicliamo l'array teamMembers
let cardString = '' // da concatenare

for (let i = 0; i < teamMembers.length; i++){

  const member = teamMembers[i] // objects {}
  const {name, role, email, img} = member

  cardString += createCard(name, role, email, img)
}
// console.log(cardString);
cardsJs.innerHTML = cardString
// fine sezione FOR

// oppure usiamo la funzione addCardInList - invece che la sezione FOR sopra 
// addCardInList(teamMembers, cardsJs)


formJs.addEventListener('submit', function(e){
  e.preventDefault()

  console.log('sono dentro event listeners')
  let name = nameJs.value 
  let role = roleJs.value
  let email = emailJs.value
  let img = imageJs.value

  // creiamo un nuovo oggetto 
  let newMember = {
    name, // name: nameJs.value
    role, // role: roleJs.value
    email, // email: emailJs.value
    img // img: imageJs. value
  }
  // pushiamo il nuovo oggetto nell'array di partenza (teamMembers)
  teamMembers.unshift(newMember)

  // aggiungiamo la nuova card in lista
  addCardInList(teamMembers, cardsJs)

})


