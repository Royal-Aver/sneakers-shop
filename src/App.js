import './App.scss';
import './components/global.scss';
import './components/reset.scss';
import './components/container.scss';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';


const App = () => {
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
              <li className='shop__item'>
                <Card />
              </li>
              <li className='shop__item'>
                <Card />
              </li>
              <li className='shop__item'>
                <Card />
              </li>
              <li className='shop__item'>
                <Card />
              </li>
              <li className='shop__item'>
                <Card />
              </li>
              <li className='shop__item'>
                <Card />
              </li>
              <li className='shop__item'>
                <Card />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
