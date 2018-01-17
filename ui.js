class UI {
  constructor (){
    this.profile = document.getElementById('profile')
  }

  showProfile(user) {
    console.log(user)
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a class="btn btn-info btn-block" href="${user.html_url}">View Profile</a>
        </div>
        <div class="col-md-9">
          <h3 class="text-white">${user.name}</h3>
          <span class="badge badge-primary">Public Repositories: ${user.public_repos}</span>
          <span class="badge badge-light">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-warning">Following: ${user.following}</span>
          <br><br>
          <div class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Sinse ${user.created_at}</li>
          </div>
        </div>
      </div>
    </div>
    <h4 class="page-heading mb-3">Latest Repositories</h3>
    <div id="repos"></div>
    `
  }

  clearProfile() {
    profile.innerHTML = ''
  }

  showAlert(message, className){
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    setTimeout(()=>{
      this.clearAlert()
    },3000)
  }

  clearAlert(){
    const currentAllert = document.querySelector('.alert');
    if (currentAllert) {
      currentAllert.remove()
    }
  }
}