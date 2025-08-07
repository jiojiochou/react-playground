import logoSvg from '../../.././assets/icons/logo.svg';
import styles from './styles/index.module.less';


export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img alt='logo' src={logoSvg}/>
        <span>React Playground @by codercsx</span>
      </div>
    </div>
  )
}
