//initialize a new XMLHttpRequest and make a GET request to the URI for the list user repositories API
function getRepositories() {
  const req = new XMLHttpRequest();
  
  req.addEventListener('load', showRepositories);
  
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  
  req.send();
}

function showRepositories(event, data) {
  //JSON.parse() to make a proper JSON object with this.responseText
  const repos = JSON.parse(this.responseText);
  //map over the repolist object
  //add each repo name as a list item
  //use join so there are no commas
  const repoList = `<ul>${repos.map(res => '<li>' + res.name + '</li>').join('')} </ul>`;
  //show the data in the div with id named repositories
  document.getElementById("repositories").innerHTML = repoList;
}