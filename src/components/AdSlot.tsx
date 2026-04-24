import styles from './AdSlot.module.css'

interface Props {
  slot: 'top' | 'bottom'
}

export default function AdSlot({ slot }: Props) {
  return <div className={`${styles.slot} ${styles[slot]}`} aria-hidden="true" />
}
