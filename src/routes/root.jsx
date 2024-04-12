import {Outlet} from 'react-router-dom';
import Home from './Home';
import styles from '../styles/Root.module.scss';

export default function Root() {
  return (
    <div className={styles.details}>
        <Home/>
        <Outlet/>
    </div>
  )
}
