const createManager = function (manager){
return `
<div class="col-12 col-sm-6 mb-3">
          <div class="card">
            <div class="row no-gutters">
              <div class="col-12 col-md-4">
                <img src="https://via.placeholder.com/400" alt="The placeholder image helps demonstrate this card component"
                  class="card-img">
              </div>
              <div class="col-12 col-md-8">
                <div class="card-body">
                  <h3 class="card-title">${manager.name}</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  <button class="btn btn-success">Read more.</button>
                </div>
              </div>
            </div>
          </div>
        </div>`

}