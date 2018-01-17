class GitHub {
  constructor () {
    this.client_id = '94e4a1d4fcd694e71e7a';
    this.client_secret = '24791bb8ed4e37997ef2e33e7c0852f67ce2ce03';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user){
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();
    return {
      profile: profileData,
      repos: reposData
    }
  }
}