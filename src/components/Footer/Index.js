import styles from './styles/footer.module.scss';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbarDetail}>
        <div className={styles.toolbarDetail}>
          <Link to='/terms' className={styles.bottomLink}>
            Terms and conditions
          </Link>
          <Link className={styles.bottomLink} to='/privacy'>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index
