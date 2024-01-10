import * as monsterGenerator from './monsterGenerator.jsx';
import * as questGenerator from './questGenerator.jsx';

export const killMonster = (attack) => {
    
    // check if weakness and attack match
    const monster = monsterGenerator.getActiveMonster();
    if (monster.weakness !== attack) {
        console.log('Wrong attack!');
        return;
    }

    // save data
    let attackQtd = sessionStorage.getItem(attack);
    if (attackQtd === null || isNaN(parseInt(attackQtd))) attackQtd = 0;
    attackQtd = parseInt(attackQtd) + 1;

    if (attack === 'blaster')
        document.getElementById('CharacterStats1').innerHTML = `🔫 Blaster: ${attackQtd}`;
    else if (attack === 'saber')
        document.getElementById('CharacterStats2').innerHTML = `🔦 Saber: ${attackQtd}`;
    else if (attack === 'cuteness')
        document.getElementById('CharacterStats3').innerHTML = `🐶 Charm: ${attackQtd}`;
    
    sessionStorage.setItem(attack, attackQtd);
    
    // remove img from MonsterContainer 0
    let monsterContainer = document.getElementById('EnemiesContainer0');
    monsterContainer.getElementsByClassName('MonsterImage')[0].remove();

    try {
        document.getElementById('Weakness').remove();
    } catch (error) {
    }
    
    // remove img from MonsterContainer 1
    monsterContainer = document.getElementById('EnemiesContainer1');
    let images = monsterContainer.getElementsByClassName('MonsterImage');
    for (let i = 0; i < images.length; i++)
        images[i].remove();

    // remove img from MonsterContainer 2
    monsterContainer = document.getElementById('EnemiesContainer2');
    images = monsterContainer.getElementsByClassName('MonsterImage');
    for (let i = 0; i < images.length; i++)
        images[i].remove();

    // remove img from MonsterContainer 3
    monsterContainer = document.getElementById('EnemiesContainer3');
    images = monsterContainer.getElementsByClassName('MonsterImage');
    for (let i = 0; i < images.length; i++)
        images[i].remove();

    // get killed monster
    monsterGenerator.shift();
    monsterGenerator.addActiveMonsterToList();

    for (let i = 0; i < 4; i++)
        monsterGenerator.placeMonsterInList(i);

    // update quests
    questGenerator.updateQuests(monster, true);

};

export const passMonster = () => {
    
    console.log('Passing monster...');

    const monster = monsterGenerator.getActiveMonster();
    
    // remove img from MonsterContainer 0
    let monsterContainer = document.getElementById('EnemiesContainer0');
    monsterContainer.getElementsByClassName('MonsterImage')[0].remove();

    try {
        document.getElementById('Weakness').remove();
    } catch (error) {
    }
    
    // remove img from MonsterContainer 1
    monsterContainer = document.getElementById('EnemiesContainer1');
    let images = monsterContainer.getElementsByClassName('MonsterImage');
    for (let i = 0; i < images.length; i++)
        images[i].remove();

    // remove img from MonsterContainer 2
    monsterContainer = document.getElementById('EnemiesContainer2');
    images = monsterContainer.getElementsByClassName('MonsterImage');
    for (let i = 0; i < images.length; i++)
        images[i].remove();

    // remove img from MonsterContainer 3
    monsterContainer = document.getElementById('EnemiesContainer3');
    images = monsterContainer.getElementsByClassName('MonsterImage');
    for (let i = 0; i < images.length; i++)
        images[i].remove();

    // get killed monster
    monsterGenerator.shift();
    monsterGenerator.addActiveMonsterToList();

    for (let i = 0; i < 4; i++)
        monsterGenerator.placeMonsterInList(i);

    // update quests
    questGenerator.updateQuests(monster, false);

};
