import card from '../../images/card.png'
import './Card.scss'
import { CardSkeleton } from './CardSkeleton';

export const Card = (props) => {
  if (props.isLoading) return <CardSkeleton />

  return (
    <>
      <img className='card' src={card} alt="Card" />
    </>
  )
}
