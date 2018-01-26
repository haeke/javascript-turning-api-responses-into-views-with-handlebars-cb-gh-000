//initialize a new XMLHttpRequest and make a GET request to the URI for the list user repositories API
function getRepositories() {
  const req = new XMLHttpRequest();
  
  req.addEventListener('load', showRepositories);
  
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  
  req.send();
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText);
  const repoList = '<ul>' + repos.map(res => {
    return (`
      <li>
        <h2><a href="${res.html_url}">${res.name}</a></h2>
        <p>Watchers: ${res.watchers_count}</p>
        <p>Forks: ${res.forks_count}</p>
        <p>Issues: ${res.open_issues_count}</p>
      </li>`)}).join('') + "</ul>";
}