class UI {
  constructor (){
    this.profile = document.getElementById('profile')
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a class="btn btn-info btn-block" href="${user.html_url}" target="_blank">View Profile</a>
        </div>
        <div class="col-md-9">
          <h3 class="text-white">${user.login}</h3>
          <h5>${user.name}</h4>
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

  showRepose(repos) {
    let output ='';
    console.log(repos)
    repos.forEach(function(repo){
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" class="list-group-item text-white" target=_blank> ${repo.name} </a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-warning">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
            <span class="badge badge-info"> ${repo.language}</span>
            </div>
          </div>
        </div>
      `
    });
    document.getElementById('repos').innerHTML = output
  }
}