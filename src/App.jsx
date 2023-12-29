import './App.css';

const App = () => {
  const playBuySound = () => {
    const buyAudio = document.getElementById('buy');
    buyAudio.play();
  };

  const playBlasterSound = () => {
    const attackAudio = document.getElementById('blaster');
    attackAudio.play();
  };

  const playLightSaberSound = () => {
    const attackAudio = document.getElementById('lightsaber');
    attackAudio.play();
  };

  const playAwwSound = () => {
    const attackAudio = document.getElementById('charm');
    attackAudio.play();
  };

  const handleSave = () => {
    
    console.log('Saving...');
  };

  const handleLoad = () => {
    
    console.log('Loading...');
  };

  return (
    <div className='App'>
      <header>
        <div className="Navbar">
          <button id="SaveButton" onClick={handleSave}>Save</button>
          <button id="LoadButton" onClick={handleLoad}>Load</button>
        </div>
        <title>Clicker</title>
        <audio id='blaster' src='./src/sounds/blaster.mp3'></audio>
        <audio id='lightsaber' src='./src/sounds/lightsaber.mp3'></audio>
        <audio id='charm' src='./src/sounds/aww.mp3'></audio>
        <audio id='buy' src='http://orteil.dashnet.org/cookieclicker/snd/clickb1.mp3'></audio>
        <img id=''></img>
        <h1>Clicker</h1>
      </header>
      <div className='MainScreen'>
      <div className="MoneyContainer">
        <div className='Money'>Money: 0€</div>
      </div>
        <div className="Monster">
          <div className="MonsterContainer"> 
            <h2 id="Monster" className="MonsterHeader">Monster</h2>
            <div className='MonsterWeakness'>
              <h2 id='MonsterWeaknessHeader' className='MonsterWeaknessHeader'>Weakness</h2>
              <img id='AimWeakness' src='./src/symbols/aim.png' alt='Aim Weakness' />
            </div>
            <img id='greenMonster' src='./src/monsters/space-monster-green.png' alt='Green Monster' />
          </div>
          <div className="NextEnemies">
            <h2 id="NextEnemies" className="NextEnemiesHeader">Next Enemies</h2>
            <div className="NextEnemiesContainer" id="EnemiesContainer1">
              <h2 id="NextEnemies1" className="NextEnemiesHeader">1</h2>
              <img id='orangeMonster' src='./src/monsters/space-monsters-orange.png' alt='Orange Monster' />
            </div>
            <div className="NextEnemiesContainer" id="EnemiesContainer2">
              <h2 id="NextEnemies2" className="NextEnemiesHeader">2</h2>
            </div>
            <div className="NextEnemiesContainer" id="EnemiesContainer3">
              <h2 id="NextEnemies3" className="NextEnemiesHeader">3</h2>
            </div>
          </div>
          <div className="Attacks">
            <div className='AttackButtons'>
              <button id='Attack1' className='upgrade1' onClick={playBlasterSound}>Blaster 🔫</button>
              <button id='Attack2' className='upgrade2' onClick={playLightSaberSound}>LightSaber 🔦</button>
              <button id='Attack3' className='upgrade3' onClick={playAwwSound}>So Cute 🐶</button>
            </div>
          </div>
        </div>
        <div className="Missions">
            <div className="MissionsContainer">
              <h2 id="Missions" className="MissionsHeader">Missions 🕮</h2>
            </div>
        </div>
        <div className="CharacterStats">
          <div className="CharacterStatsContainer">
            <h2 id="CharacterStats" className="CharacterStatsHeader">Character Stats</h2>
            <p id="CharacterStats1" className="CharacterStatsParagraph">Blaster 🔫: 1</p>
            <p id="CharacterStats2" className="CharacterStatsParagraph">LightSaber 🔦: 1</p>
            <p id="CharacterStats3" className="CharacterStatsParagraph">Charm 🐶: 1</p>
          </div>
        </div>
        <div className="BuyStation">
        <div className='ButtonsStore' id='Store'>
          <h2 id='Store' className='StoreHeader'>
            Store 🛒
          </h2>
          <button id='upgrade1' className='upgrade1' onClick={playBuySound}>Upgrade 1</button>
          <button id='upgrade2' className='upgrade2' onClick={playBuySound}>Upgrade 2</button>
          <button id='upgrade3' className='upgrade3' onClick={playBuySound}>Upgrade 3</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;