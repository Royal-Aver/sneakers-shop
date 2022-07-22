import React from "react"
import './Drawer.scss'
import sneakers1 from './../../images/card/sneakers1.png'

const Drawer = (props) => {

  return (
    <div className='drawer-shadow'>
    <div className='drawer'>
      <div className='drawer__top'>
        <h2 className='drawer__title'>shopping cart
          <button className='drawer__btn-delete btn-delete' onClick={props.onClosedCart}>
            <svg className='btn-delete-icon' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
              <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
            </svg>
          </button>
        </h2>

        <ul className='drawer__list'>

            <li className='drawer__item'>
            <article className='drawer__card-add card-add'>
              <img className='card-add__img' src={sneakers1} alt='sneakers'></img>
              <div className='card-add__text'>
                <h5 className='card-add__title'>Men's sneakers Nike Blazer Mid Suede</h5>
                <span className='card-add__price'>300$</span>
              </div>
              <button className='card-add__btn-delete btn-delete'>
                <svg className='btn-delete-icon' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                  <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                </svg>
              </button>
            </article>
          </li>

        </ul>
      </div>

      <ul className='drawer__footer footer-drawer'>
        <li className='footer-drawer__item'>
          <span className='footer-drawer__text'>Total:</span>
          <div className='footer-drawer__dashed'></div>
          <span className='footer-drawer__num'>300$</span>
        </li>

        <li className='footer-drawer__item'>
          <span className='footer-drawer__text'>Tax:</span>
          <div className='footer-drawer__dashed'></div>
          <span className='footer-drawer__num'>13%</span>
        </li>

        <button className='footer-drawer__btn'>Checkout</button>
      </ul>
    </div>
  </div>
  )
}

export default Drawer