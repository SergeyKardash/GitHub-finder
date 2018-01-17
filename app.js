// Init GitHub
const github = new GitHub;
// Init UI
const ui = new UI;
// Search input
const searchUser = document.getElementById('searchUser');

// Search input event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if ( userText !== '') {
    github.getUser(userText)
      .then (data => {
        if (data.profile.message === 'Not Found') {
          // Show allert
          ui.showAlert ('User not found', 'alert alert-danger')
        } else {
          // Show profile
          ui.showProfile(data.profile)
        }
      })
  } else {
    // Clear profile
    ui.clearProfile()
  }
})