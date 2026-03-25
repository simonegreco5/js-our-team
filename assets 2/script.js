
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

let cardString = ''

// sezione FOR - cicliamo l'array teamMembers
for (let i = 0; i < teamMembers.length; i++){

  const member = teamMembers[i] // objects {}
  const {name, role, email, img} = member

  const string = `

   <div class="col bg-dark" id="card">
      <!-- immagine -->
      <div class="" id="img">
        <img src="${img}" alt="${name}">
      </div>

      <!-- nome -->
      <div class="" id="name">
        <strong>${name}</strong>
      </div>

      <!-- ruolo -->
      <div class="" id="role">${role}</div>

      <!-- email -->
      <div class="" id="email">${email}</div>
    </div>

  `
  cardString += string
}
console.log(cardString);

