import { Monster } from './monster.js';

export const getGreenMonster = () => {
    return new Monster(1, './src/monsters/space-monsters-purple.png', 'blaster');
};

export const getBlueMonster = () => {
    return new Monster(2, './src/monsters/space-monsters-blue.png', 'saber');
};

export const getOrangeMonster = () => {
    return new Monster(3, './src/monsters/space-monsters-orange.png', 'cuteness');
};

const monsterGenerators = [getGreenMonster, getBlueMonster, getOrangeMonster];
let activeMonsters = [];
let hasStarted = false;

export const shift = () => {
    activeMonsters.shift();
};

// Get a random monster and place it in the DOM
export const generateMonster = (index) => {

    const monster = getRandomMonster();
    placeMonster(monster, index);

    return monster;
};

export const placeMonster = (monster, index) => {

    // log
    console.log('Generating monster... (active monsters: ' + index + ')');

    const monsterContainer = document.getElementById('EnemiesContainer'+index);
    const monsterImage = document.createElement('img');
    monsterImage.src = monster.image;
    monsterImage.classList.add('MonsterImage');
    monsterContainer.appendChild(monsterImage);
    
    if (index === 0) {
        const weakness = document.createElement('img');
        weakness.id = 'Weakness';
        weakness.src = './src/symbols/' + monster.weakness + '.png';
        const monsterWeaknessContainer = document.getElementById('MonsterWeaknessContainer');
        monsterWeaknessContainer.appendChild(weakness);
    }

    return monster;
};

export const placeMonsterInList = (index) => {

    // log
    console.log('Generating monster... (active monsters: ' + index + '/'+activeMonsters.length+')');

    const monsterContainer = document.getElementById('EnemiesContainer'+index);
    const monsterImage = document.createElement('img');
    monsterImage.src = activeMonsters[index].image;
    monsterImage.classList.add('MonsterImage');
    monsterContainer.appendChild(monsterImage);
    
    if (index === 0) {
        const weakness = document.createElement('img');
        weakness.id = 'Weakness';
        weakness.src = './src/symbols/' + activeMonsters[index].weakness + '.png';
        const monsterWeaknessContainer = document.getElementById('MonsterWeaknessContainer');
        monsterWeaknessContainer.appendChild(weakness);
    }

};

// Start the game, generate 3 monsters
export const startGameMonsters = () => {

    if (hasStarted) return;
    hasStarted = true;
    
    if (activeMonsters.length >= 3)
        return;
    
    for (let i = 0; i <= 3; i++) {
        addActiveMonster();
    }

};

// add monster to list of active monsters
export const addActiveMonster = () => {
    const monster = generateMonster(activeMonsters.length);
    activeMonsters.push(monster);
};

export const addActiveMonsterToList = () => {
    const monster = getRandomMonster();
    activeMonsters.push(monster);
};

// Function to get a random monster
export const getRandomMonster = () => {
    const randomIndex = Math.floor(Math.random() * monsterGenerators.length);
    return monsterGenerators[randomIndex]();
};

export const getActiveMonster = () => {
    return activeMonsters[0];
}