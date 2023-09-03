import './Skeleton.scss'

export const Skeleton = (props) => {
  const {
    className = '',
    width,
    height,
    radius
  } = props

  const style = {
    width,
    height,
    borderRadius: radius
  }

  return (
    <div style={style} className={`skeleton ${className}`}></div>
  )
}
