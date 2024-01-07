import './App.css';
import PreLoader from './components/PreLoader.jsx';
import { playSound } from './js/soundEffects';

const App = () => {

  const playBuySound = () => playSound('buy');
  const playBlasterSound = () => playSound('blaster');
  const playSaberSound = () => playSound('Saber');
  const playAwwSound = () => playSound('charm');

  const handleSave = () => {
    
    console.log('Saving...');
  };

  const handleLoad = () => {
    
    console.log('Loading...');
  };

  return (
    <>  
    <PreLoader />
    <div className='App'>
      <header>
        <title>Star-Bucks</title>
        <link href='https://fonts.googleapis.com/css?family=Space Mono' rel='stylesheet'></link>
        <audio id='blaster' src='./src/sounds/blaster.mp3'></audio>
        <audio id='Saber' src='./src/sounds/Saber.mp3'></audio>
        <audio id='charm' src='./src/sounds/aww.mp3'></audio>
        <audio id='buy' src='http://orteil.dashnet.org/cookieclicker/snd/clickb1.mp3'></audio>
        <h1 id="game-title" align="center">Star-Bucks</h1>
      </header>

      <div className='MainScreen'>

        <div className="Monster">
          
        <div className="MonsterMissionsContainer">

        <div className="MonsterAndEnemiesAttacksContainer">
        
          <div className="MonsterAndEnemies"> 

            <div id="EnemiesContainer0" className="MonsterContainer"> 

            <div className="teste">
              
              <div className='MonsterWeakness'>
                <h2 id='MonsterWeaknessHeader' className='MonsterWeaknessHeader'>
                  &#160;&#160;&#160;Weakness
                </h2>
                <img id='Weakness' src='./src/symbols/aim.png' alt='Aim Weakness' />
              </div>

            </div>

            </div>

            <div className="NextEnemies">
              <h2 id="NextEnemies" className="NextEnemiesHeader">Next Enemies</h2>
              <div className="NextEnemiesContainer" id="EnemiesContainer1">
                <h2 className="NextEnemiesHeader">1</h2>
              </div>
              <div className="NextEnemiesContainer" id="EnemiesContainer2">
                <h2 className="NextEnemiesHeader">2</h2>
              </div>
              <div className="NextEnemiesContainer" id="EnemiesContainer3">
                <h2 className="NextEnemiesHeader">3</h2>
              </div>
            </div>

          </div>

          <div className="Attacks">
            <div className='AttackButtons'>
              <button id='Attack1' className='upgrade1' onClick={playBlasterSound}>Blaster 🔫</button>
              <button id='Attack2' className='upgrade2' onClick={playSaberSound}>Saber 🔦</button>
              <button id='Attack3' className='upgrade3' onClick={playAwwSound}>So Cute 🐶</button>
            </div>
          </div>
          
        </div>
        
          <div className="MissionsAndStats">
            <div className="Missions">
              <div className="MissionsContainer">
                <h2 id="Missions" className="MissionsHeader">Quests 🕮</h2>
                <div className="QuestRow">
                  <img src="./src/monsters/space-monsters-purple.png" class="QuestMonsterImage"></img>
                  <span className="QuestDescription">🗡️ 0/2 &#160; (5 💰)</span> 
                </div>
                <div className="QuestRow">
                  <img src="./src/monsters/space-monsters-orange.png" class="QuestMonsterImage"></img>
                  <span className="QuestDescription">🛡️ 0/3 &#160; (10 💰)</span>
                </div>
              </div>
            </div>

            <div className="CharacterStats">
              <div className="CharacterStatsContainer">
                <h2 id="CharacterStats" className="CharacterStatsHeader" align="center">Character Stats</h2>
                <p id="CharacterStats1" className="CharacterStatsParagraph"align="center">💰 Money: 0</p>
                <p id="CharacterStats1" className="CharacterStatsParagraph"align="center">🔫 Blaster: 0</p>
                <p id="CharacterStats2" className="CharacterStatsParagraph"align="center">🔦 Saber: 0</p>
                <p id="CharacterStats3" className="CharacterStatsParagraph"align="center">🐶 Charm: 0</p>

                <button id="SaveButton" onClick={handleSave}>Save</button>
                <button id="LoadButton" onClick={handleLoad}>Load</button>

              </div>
              
            </div>
          </div>

          </div>

        </div>
          
        </div>
      
    </div>
    </>
  );
};

export default App;