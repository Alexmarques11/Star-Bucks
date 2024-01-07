import { Monster } from './monster.js';

export const getGreenMonster = () => {
    return new Monster('./src/monsters/space-monsters-purple.png', 'blaster');
};

export const getBlueMonster = () => {
    return new Monster('./src/monsters/space-monsters-blue.png', 'saber');
};

export const getOrangeMonster = () => {
    return new Monster('./src/monsters/space-monsters-orange.png', 'cuteness');
};

const monsterGenerators = [getGreenMonster, getBlueMonster, getOrangeMonster];
let activeMonsters = [];
let hasStarted = false;

// Get a random monster and place it in the DOM
export const generateMonster = () => {

    // log
    console.log('Generating monster... (active monsters: ' + activeMonsters.length + ')');

    const monsterContainer = document.getElementById('EnemiesContainer'+activeMonsters.length);

    const monster = getRandomMonster();
    const monsterImage = document.createElement('img');
    monsterImage.src = monster.image;
    monsterImage.classList.add('MonsterImage');
    monsterContainer.appendChild(monsterImage);
    return monster;
};

// Start the game, generate 3 monsters
export const startGameMonsters = () => {

    if (hasStarted) return;
    hasStarted = true;
    
    for (let i = 0; i < 4; i++) {
        const monster = generateMonster();
        addActiveMonster(monster);
    }

};

// add monster to list of active monsters
export const addActiveMonster = (monster) => {
    if (activeMonsters.length >= 3)
        return;

    activeMonsters.push(monster);
};

// Function to get a random monster
const getRandomMonster = () => {
    const randomIndex = Math.floor(Math.random() * monsterGenerators.length);
    return monsterGenerators[randomIndex]();
};
