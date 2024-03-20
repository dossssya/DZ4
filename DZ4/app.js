function fetchCharacters() {
    fetch('persons.json')
        .then(response => response.json())
        .then(data => displayCharacters(data))
        .catch(error => console.error('Error fetching characters:', error));
}

function displayCharacters(characters) {
    const charactersContainer = document.getElementById('characters');

    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h2');
        name.textContent = character.name;

        const age = document.createElement('p');
        age.textContent = `Age: ${character.age}`;

        const occupation = document.createElement('p');
        occupation.textContent = `Occupation: ${character.occupation}`;

        const photo = document.createElement('img');
        photo.src = character.person_photo;
        photo.alt = character.name;

        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(occupation);
        card.appendChild(photo);

        charactersContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', fetchCharacters);



const xhr = new XMLHttpRequest();

xhr.open('GET', 'persons.json', true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log('JSON файл успешно загружен:', xhr.responseText);
    } else {
        console.error('Ошибка при загрузке JSON файла:', xhr.statusText);
    }
};

xhr.onerror = function() {
    console.error('Ошибка сети при загрузке JSON файла.');
};

xhr.send();

