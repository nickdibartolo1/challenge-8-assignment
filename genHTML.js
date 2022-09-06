const createManager = function (manager) {
  return `
<div class="col-4 mt-4">
            <div class="card h-100">
                    <h5 class="card-title">Manager: ${manager.name}</h5>
                    <div class="card-body">
                        <p class="card-text id">ID: ${manager.id}</p>
                        <p class="card-text email">Email: ${manager.email}</p>
                        <p class="card-text officeNumber">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
            `;
}

const createEngineer = function (engineer) {
  return `
  <div class="col-4 mt-4">
              <div class="card h-100">
                      <h5 class="card-title">Engineer: ${enginner.name}</h5>
                      <div class="card-body">
                          <p class="card-text id">ID: ${engineer.id}</p>
                          <p class="card-text email">Email: ${engineer.email}</p>
                          <p class="card-text github">Github Username: ${engineer.github}</p>
                      </div>
                  </div>
              </div>
              `;
}

const createIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
              <div class="card h-100">
                      <h5 class="card-title">Intern: ${intern.name}</h5>
                      <div class="card-body">
                          <p class="card-text id">ID: ${intern.id}</p>
                          <p class="card-text email">Email: ${intern.email}</p>
                          <p class="card-text school">School: ${intern.school}</p>
                      </div>
                  </div>
              </div>
              `;

}


// function genHTML(data){
//   const HTMLArray = [];

// for (let i = 0; i < team.length; i++){
//   const teamMember = team[i]
//   const role = teamMember.role;
  


//  if (role === 'Manager'){
//    const manager = managerCard(teamMember)
//    cards.push(manager)
//  }

//  if (role === 'Engineer'){
//   const engineer = engineerCard(teamMember)
//   cards.push(engineer)
//  }

//  if (role === 'Intern'){
//   const intern = internCard(teamMember)
//   cards.push(intern)
//  }

 
 
// }
// const teamCards = cards.join('')
// return teamCards;
// }








module.exports = genHTML;