const isAdult = confirm("Вам уже исполнилось 18 лет ?");

if (isAdult) {
    alert('Добро пожаловать!');
} else {
    alert("Будьте осторожны, в фильмах могут быть неприятные сцены.");
}

document.getElementById('WatchFilm').addEventListener('click', function() {
    window.location.href = 'https://kz4.kinogo-films.lol/2772-dobro-pozhalovat-v-zombiljend-2009.html';
})
document.getElementById('Watch1Film').addEventListener('click', function() {
    window.location.href = 'https://kinogo-films.vip/36789-poezd-v-pusan.html';
})
document.getElementById('Watch2Film').addEventListener('click', function() {
    window.location.href = 'https://main3.kinogo.news/65338-skauty-protiv-zombi.html';
})
document.getElementById('Watch3Film').addEventListener('click', function() {
    window.location.href = 'https://kz4.kinogo-films.lol/2682-zhivoj-2020.html';
})
document.getElementById('Watch4Film').addEventListener('click', function() {
    window.location.href = 'https://kz4.kinogo-films.lol/1575-vojna-mirov-z-2013.html';
})
document.getElementById('WatchAd').addEventListener('click', function() {
    window.location.href = 'https://kz4.kinogo-films.lol/92127-ziam.html';
})
document.getElementById('Watch1Ad').addEventListener('click', function() {
    window.location.href = 'https://s5.kinogotv.cc/97459-kolonija.html';
})
