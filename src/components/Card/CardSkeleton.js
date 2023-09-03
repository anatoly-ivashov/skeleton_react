import { Skeleton } from '../Skeleton'
import style from './CardSkeleton.module.scss'

export const CardSkeleton = () => (
  <div className={style.cardSkeleton}>
    <div className={style.actions}>
      <Skeleton width="40px" height="40px" radius="40px" />
      <Skeleton width="40px" height="40px" radius="40px" />
    </div>
    <div className={style.description}>
      <Skeleton height="20px" />
      <Skeleton width='70%' height="20px" />
    </div>
    <div className={style.tags}>
      <Skeleton width="106px" height="44px" radius="40px" />
      <Skeleton width="80px" height="44px" radius="40px" />
      <Skeleton width="94px" height="44px" radius="40px" />
      <Skeleton width="122px" height="44px" radius="40px" />
    </div>
    <Skeleton className={style.line} height="3px" />
    <div className={style.info}>
      <Skeleton width='140px' height="20px" />
      <Skeleton width='170px' height="20px" />
    </div>
  </div>
)
