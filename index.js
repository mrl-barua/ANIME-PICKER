let btn =document.getElementById('btn');
let output = document.getElementById('output')
let anime = [
'Shingeki no Kyojin',
'Death Note',
'Fullmetal Alchemist: Brotherhood',
'One Punch Man',
'Sword Art Online',
'Boku no Hero Academia',
'Kimetsu no Yaiba',
'Naruto',
'Tokyo Ghoul',
'Hunter X Hunter',
'Spy X Family',
'Steins: Gate'
];

btn.addEventListener ('click', function(){
 var randomAnime = anime[Math.floor(Math.random() *anime.length)]
 output.innerHTML = randomAnime;
})
