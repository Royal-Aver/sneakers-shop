import './App.scss';
import './components/global.scss';
import './components/reset.scss';
import './components/container.scss';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import React from 'react';


const App = (props) => {
  let cardElements = props.state.card.map(card => <Card cardImg={card.cardImg} cardTitle={card.cardTitle} cardPrice={card.cardPrice} />)

  const [cartOpened, setCartOpened] = React.useState(false)

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClosedCart={() => setCartOpened(false)} />}
      <div className='wrapper__main main'>
        <Header onClickCart={() => setCartOpened(true)} />
        <div className='main__shop shop'>
          <div className='shop__container container'>
            <div className='shop__header'>
              <h1 className='shop__title'>All sneakers</h1>
              <label className='shop__label'>
                <input className='shop__search' type="text" placeholder='Search...'></input>
              </label>
            </div>

            <ul className='shop__list'>
              {cardElements}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
