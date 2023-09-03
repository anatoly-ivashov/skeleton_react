import { useEffect, useState } from 'react';
import { Card } from '../Card'
import style from './CardList.module.scss'

export const CardList = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <div className={style.cardList}>
      <Card isLoading={isLoading} />
      <Card isLoading={isLoading} />
      <Card isLoading={isLoading} />
    </div>
  )
}
