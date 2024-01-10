import './App.css';
import PreLoader from './components/PreLoader.jsx';
import { killMonster, passMonster } from './js/game.jsx';
import { playSound } from './js/soundEffects.jsx';
import QuestComponent from './components/QuestComponent.jsx';
import CharacterStats from './components/CharacterStats.jsx';

const App = () => {

  const playBlasterSound = () => playSound('blaster');
  const playSaberSound = () => playSound('Saber');
  const playAwwSound = () => playSound('charm');

  return (
    <>  
    <PreLoader />
    <div className='App'>
      <header>
        <title>Star-Bucks</title>
        <link href='https://fonts.googleapis.com/css?family=Space Mono' rel='stylesheet'></link>
        <audio id='blaster' src='./src/sounds/blaster.mp3'></audio>
        <audio id='Saber' src='./src/sounds/lightsaber.mp3'></audio>
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
              
              <div id="MonsterWeaknessContainer" className='MonsterWeakness'>
                <h2 id='MonsterWeaknessHeader' className='MonsterWeaknessHeader'>
                  &#160;&#160;&#160;Weakness
                </h2>
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
              <button id='Attack1' className='upgrade1' onClick={() => {
                playBlasterSound();
                killMonster('blaster');
              }}>Blaster 🔫</button>
              <button id='Attack2' className='upgrade2' onClick={() => {
                playSaberSound();
                killMonster('saber');
              }}>Saber 🔦</button>
              <button id='Attack3' className='upgrade3' onClick={() => {
                playAwwSound();
                killMonster('cuteness');
              }}>So Cute 🐶</button>
              <button id='Attack4' className='upgrade4' onClick={() => {
                passMonster();
              }}>Pass 😴</button>
            </div>
          </div>
          
        </div>
        
          <div className="MissionsAndStats">
            <div className="Missions">
              <QuestComponent />
            </div>

            <CharacterStats />
            
          </div>

          </div>

        </div>
          
        </div>
      
    </div>
    </>
  );
};

export default App;