import './App.scss';
import './components/global.scss';
import './components/reset.scss';
import './components/container.scss';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';




const App = (props) => {
debugger
  let cardElements = props.state.card.map(card  => <Card cardImg={card.cardImg} cardTitle={card.cardTitle} cardPrice={card.cardPrice} />)

  return (
    <div className="wrapper">
      <Drawer />
      <div className='wrapper__main main'>
        <Header />
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
