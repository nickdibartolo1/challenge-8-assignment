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
                      <h5 class="card-title">Engineer: ${engineer.name}</h5>
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


function genHTML(data) {
    const HTMLArray = [];

    for (let i = 0; i < data.length; i++) {
        const teamMember = data[i]
        const job = teamMember.job;



        if (job === 'Manager') {
            const manager = managerCard(teamMember)
            cards.push(manager)
        }

        if (job === 'Engineer') {
            const engineer = engineerCard(teamMember)
            cards.push(engineer)
        }

        if (job === 'Intern') {
            const intern = internCard(teamMember)
            cards.push(intern)
        }



    }
    const profileCards = HTMLArray.join('')
    const genTeam = genTeamPage(profileCards);

    return genTeam;
}

const genTeamPage = function (profileCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Work Team Profiles</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="employee_cards">
                    ${profileCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;
}
  








module.exports = genHTML;