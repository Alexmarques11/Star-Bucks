
export const handleLoad = () => {
    let money = sessionStorage.getItem('money');
    if (money === null || isNaN(parseInt(money))) money = 0;
    money = parseInt(money);	
    document.getElementById('money').innerHTML = `💰 Money: ${money}`;
    sessionStorage.setItem('money', money);

    let blasters = sessionStorage.getItem('blasters');
    if (blasters === null || isNaN(parseInt(blasters))) blasters = 0;
    blasters = parseInt(blasters);	
    document.getElementById('CharacterStats1').innerHTML = `🔫 Blaster: ${blasters}`;
    sessionStorage.setItem('blaster', blasters);
    
    let sabers = sessionStorage.getItem('sabers');
    if (sabers === null || isNaN(parseInt(sabers))) sabers = 0;
    sabers = parseInt(sabers);
    document.getElementById('CharacterStats2').innerHTML = `🔦 Saber: ${sabers}`;
    sessionStorage.setItem('saber', sabers);

    let charms = sessionStorage.getItem('cuteness');
    if (charms === null || isNaN(parseInt(charms))) charms = 0;
    charms = parseInt(charms);
    document.getElementById('CharacterStats3').innerHTML = `🐶 Charm: ${charms}`;
    sessionStorage.setItem('cuteness', charms);

};