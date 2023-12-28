import './App.css';

const App = () => {
  const playBuySound = () => {
    const buyAudio = document.getElementById('buy');
    buyAudio.play();
  };

  const playAttackSound = () => {
    const attackAudio = document.getElementById('attack');
    attackAudio.play();
  }

  return (
    <div className='App'>
      <header>
        <title>Clicker</title>
        <link rel="stylesheet" href="character.css"></link>
        <audio id='attack' src='./src/sounds/blaster.mp3'></audio> 
        <audio id='buy' src='http://orteil.dashnet.org/cookieclicker/snd/clickb1.mp3'></audio>
        <h1>Clicker</h1>
      </header>
      <div className='MainScreen'>
        <div className="Monster">
          <div className="MonsterContainer"> 
           <h2 id="Monster" className="MonsterHeader">Monster</h2>
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