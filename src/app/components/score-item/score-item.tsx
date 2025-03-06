import styles from './score-item.module.css'

interface ScoreItemProps {
  title: string | number
  currentIndex: number
  id: number
}

export default function ScoreItem({ title, currentIndex, id }: ScoreItemProps) {
  const isInactive: boolean = id === currentIndex || id < currentIndex
  const isActive: boolean = id === currentIndex + 1

  const buttonClass: string = `${styles.score_button} ${
    isInactive ? styles.inactive_text : isActive ? styles.active_button : ''
  }`

  const textClass: string = `${styles.score_button__text} ${
    isInactive
      ? styles.inactive_text
      : isActive
        ? styles.active_text
        : styles.default_text
  }`

  return (
    <div className={buttonClass}>
      <p className={textClass}>
        <span>$</span>
        {title}
      </p>
    </div>
  )
}
