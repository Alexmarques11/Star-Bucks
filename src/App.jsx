import './App.css';

const App = () => {
  const playBuySound = () => {
    const buyAudio = document.getElementById('buy');
    buyAudio.play();
  };

  const playAttackSound = () => {
    const attackAudio = document.getElementById('attack');
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
        <audio id='attack' src='./src/sounds/blaster.mp3'></audio>
        <audio id='buy' src='http://orteil.dashnet.org/cookieclicker/snd/clickb1.mp3'></audio>
        <h1>Clicker</h1>
      </header>
      <div className='MainScreen'>
        <div className="Monster">
          <div className="MonsterContainer"> 
            <h2 id="Monster" className="MonsterHeader">Monster</h2>
            <img id='greenMonster' src='./src/monsters/space-monster-green.png' alt='Green Monster' />
          </div>
          <div className="NextEnemies">
            <h2 id="NextEnemies" className="NextEnemiesHeader">Next Enemies</h2>
            <div className="NextEnemiesContainer" id="EnemiesContainer1">
              <h2 id="NextEnemies1" className="NextEnemiesHeader">1</h2>
              <img id='orangeMonster' src='./src/monsters/space-monster-orange.png' alt='Orange Monster' />
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
              <button id='Attack1' className='upgrade1' onClick={playAttackSound}>Attack1</button>
              <button id='Attack2' className='upgrade2' onClick={playAttackSound}>Attack2</button>
              <button id='Attack3' className='upgrade3' onClick={playAttackSound}>Attack3</button>
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