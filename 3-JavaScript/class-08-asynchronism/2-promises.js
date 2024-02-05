const API = 
"https://api.github.com/users/MatheusBarrosLima";

const userGitHub = fetch(API)
 .then((res) => res.json())
 .then((data) => data );
console.log(userGitHub);