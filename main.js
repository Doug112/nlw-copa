function creategame(player1, hour,player2) {
  return`
  <li>
    <img src="./assets/${player1}.svg" alt="">
    <strong>${hour} </strong>
    <img src="./assets/${player2}.svg" alt=" ${player2} ">
    </li>
                  
  `
}

let delay = -0.4;

function createcard(date, day, games) {
 delay = delay + 0.4;
return `
<div class="card" style="animation-delay: ${delay}s "> 

  <h2>${date} <span> ${day} </span></h2>
  <ul>
     ${games}  
  </ul>
 </div>
`
}

document.querySelector("#cards").innerHTML =
  createcard(
    "24/11",
    "quinta",
    creategame("suiça", "07:00", "camarões") +
      creategame("suiça", "07:00", "camarões") +
      creategame("suiça", "07:00", "camarões")
  ) +
  createcard(
    "28/11",
    "segunda",
    creategame("servia", "20:00", "Brasil") +
      creategame("servia", "20:00", "Brasil") +
      creategame("servia", "20:00", "Brasil")
  ) +
  createcard(
    "02/12",
    "sexta",
    creategame("servia", "20:00", "Brasil") +
      creategame("servia", "20:00", "Brasil") +
      creategame("servia", "20:00", "Brasil")
  ) +
  createcard(
    "24/11",
    "quinta",
    creategame("suiça", "07:00", "camarões") +
      creategame("suiça", "07:00", "camarões") +
      creategame("suiça", "07:00", "camarões")
  ) 