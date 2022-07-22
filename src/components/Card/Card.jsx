import React from "react"
import './Card.scss'
import plusImg from './../../images/card/Add.svg'
import checkedImg from './../../images/card/Add-link.svg'
import hearthLinkImg from './../../images/card/hearth-link.svg'
import hearthUnlinkImg from './../../images/card/hearth-unlink.svg'

const Card = (props) => {

  const [isAdd, setIsAdd] = React.useState(false)

  const onClickAdd = () => {
    setIsAdd(!isAdd);
  }

  const[isLink, setIsLink] = React.useState(false)

  const onClickLink = () => {
    setIsLink(!isLink);
  }

  return (
    <li className='shop__item'>
      <article className='shop__card card'>
        <button className="card__btn-hearth" onClick={onClickLink} type="button">
          <img src={isLink ? hearthLinkImg : hearthUnlinkImg}></img>
        </button>
        <img className='card__img' src={props.cardImg} alt="sneakers"></img>
        <h5 className='card__title'>{props.cardTitle}</h5>
        <div className='card__wrapper-price'>
          <div className='card__price price'>
            <span className='price__text'>price</span>
            <span className='price__num'>{props.cardPrice}$</span>
          </div>
          <button className='card__btn-plus' onClick={onClickAdd} type="button">
            <img  src={isAdd ? checkedImg : plusImg}></img>
          </button>

        </div>
      </article>
    </li>
  )
}
export default Card