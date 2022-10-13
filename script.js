/*fetch("https://digimon-api.vercel.app/api/digimon")
.then(result => {
  console.log(result);
  return result.json()
})
.then(result => {
  console.log(result)
})
.catch(err => {
  console.log(err)
})*/
//short syntax
/*fetch("https://digimon-api.vercel.app/api/digimon")
.then(result => result.json())
.then(result => {
  console.log(result)
})*/
const apikey = 'api_key=2fee52316107b423a1328cfa289d2fbb';
const base = 'https://api.themoviedb.org/3';
const apiurl = base + '/discover/movie?sort_by=popularity.desc&'+apikey;
const imageurl = 'https://image.tmdb.org/t/p/w500';
const searchurl = base + '/search/movie?'+apikey
const main = document.getElementById('main');

/*
//async
let containerDigimon = document.getElementById("list-digimon")
//let digimons =[]
let getDataDigimon = async () => {
let response = await fetch(apiurl)
let digimons = await response.json()

digimons.forEach((item,index) => {
 // if (index < 10) {
  console.log(item)
  containerDigimon.innerHTML += 
  `<h3>${item.name}</h3>`
  //}
 console.log(item)
})
}
getDataDigimon()
*/
//let digimons=["agumon","patamon"]
//let containerDigimon = document.getElementById("list-digimon")
/*
digimons.forEach(item => {
  //containerDigimon.innerHTML += '<h3>${item}</h3>'
console.log(item)
})
*/
/*
getfilm(apiurl);

function getfilm(url) {
  lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
      console.log(data.results)
      showfilm(data.results);
    })

}


*/



//let containerDigimon = document.getElementById("list-film")
getfilm(apiurl)
async function getfilm(url) {
  let response = await fetch(url);
  let result = await response.json()

  let data=result.results
  showfilm(data)
 
}

function showfilm(data) {
    main.innerHTML = '';

    data.slice(0,10).forEach(item => {
        const {title, poster_path, vote_average, overview, id,release_date} = item;
        const film = document.createElement('div');
        film.classList.add('movie');
        film.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${vote_average}">${vote_average}</span>
               
            </div>
        `
        main.appendChild(film);


    })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if(searchTerm) {
      getfilm(searchurl+'&query='+searchTerm)
  }else{
      getfilm(apiurl);
  }
})