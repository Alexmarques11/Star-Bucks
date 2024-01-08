import { Monster } from './monster.js';
import { Quest } from './quest.js';
import * as monsterGenerator from './monsterGenerator.js';

let activeQuests = [];
let hasStarted = false;

export const generateQuest = () => {

    // log
    console.log('Generating quest... (active quests: ' + activeQuests.length + ')');
    const quest = getRandomQuest();

    const questContainer = document.getElementsByClassName('MissionsContainer')[0];

    const questRow = document.createElement('div');
    questRow.classList.add('QuestRow');
    questContainer.appendChild(questRow);

    const questImage = document.createElement('img');
    questImage.src = quest.monster.image;
    questImage.classList.add('QuestMonsterImage');
    questRow.appendChild(questImage);

    const questDescription = document.createElement('span');
    questDescription.classList.add('QuestDescription');
    questDescription.innerText = quest.progress +'/' + quest.quantity + ' (' + quest.reward + ' 💰)';
    questRow.appendChild(questDescription);

    return quest;
};

export const startGameQuests = () => {

    if (hasStarted) return;
    hasStarted = true;
    
    for (let i = 0; i <= 1; i++) {
        const quest = generateQuest();
        addActiveQuest(quest);
    }

};

export const addActiveQuest = (monster) => {
    activeQuests.push(monster);
};

export const getRandomQuest = () => {
    const monster = monsterGenerator.getRandomMonster();
    const isToKill = Math.random() > 0.5;
    const quantity = Math.ceil(Math.random() * 5);
    const reward = quantity * 2;

    return new Quest(monster, isToKill, quantity, reward);
};

// get a killed monster and update quests
export const updateQuests = (monster) => {

    // log
    console.log('Updating quests... (active quests: ' + activeQuests.length + ')');

    // update quests
    for (let i = 0; i < activeQuests.length; i++) {
        const quest = activeQuests[i];

        // quest.isToKill && 
        if (quest.monster.id == monster.id) {

            console.log('progress');
            quest.progress++;

            if (quest.progress === quest.quantity) {

                // remove quest
                activeQuests.splice(i, 1);
                // remove quest from DOM
                const questRow = document.getElementsByClassName('QuestRow')[i];
                questRow.remove();
                // add new quest
                const newQuest = generateQuest();
                addActiveQuest(newQuest);
                
                // update money
                let money = sessionStorage.getItem('money');
                if (money === null || isNaN(parseInt(money))) {
                    money = '0';
                }
                money = parseInt(money);
                money += parseInt(quest.reward);
                document.getElementById('money').innerText = '💰 Money: ' + money;
                sessionStorage.setItem('money', money);

            } else {
            console.log('update quest');
                // update quest
                const questDescription = document.getElementsByClassName('QuestDescription')[i];
                questDescription.innerText = quest.progress + '/' + quest.quantity + ' (' + quest.reward + ' 💰)';
            }
        }

    }

    // update money
    // let money = parseInt(document.getElementById('Money').innerText);
    // money += monster.reward;
    // document.getElementById('Money').innerText = money;
};