import { Quest } from './quest.jsx';
import * as monsterGenerator from './monsterGenerator.jsx';

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
    let icon = quest.isToKill ? '🗡️' : '🛡️';
    questDescription.innerText = icon + ' ' + quest.progress +'/' + quest.quantity + ' (' + quest.reward + ' 💰)';
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
    const isToKill = Math.random() > 0.3;
    const quantity = Math.ceil(Math.random() * 5);
    const reward = quantity * 2;

    return new Quest(monster, isToKill, quantity, reward);
};

// get a killed monster and update quests

export const updateQuests = (monster, wasKilled) => {

    // log
    console.log('Updating quests... (active quests: ' + activeQuests.length + ')');

    // update quests
    for (let i = 0; i < activeQuests.length; i++) {
        const quest = activeQuests[i];

        console.log('quest: ' + quest.monster.id + ' - monster: ' + monster.id);
        console.log('quest.isToKill: ' + quest.isToKill + ' - wasKilled: ' + wasKilled);

        if (quest.monster.id === monster.id && !quest.isToKill && wasKilled) {
            // Fail the quest, remove it and add a new one, remove coins

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
            money -= parseInt(quest.reward);
            document.getElementById('money').innerText = '💰 Money: ' + money;
            sessionStorage.setItem('money', money);

            return;
        }
        
        // quest.isToKill && 
        else if (quest.monster.id === monster.id && quest.isToKill === wasKilled) {

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
                let icon = quest.isToKill ? '🗡️' : '🛡️';
                questDescription.innerText = icon + ' ' + quest.progress +'/' + quest.quantity + ' (' + quest.reward + ' 💰)';
            }
        }

    }
};

