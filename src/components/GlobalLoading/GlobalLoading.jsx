import clsx from 'clsx';
import styles from './GlobalLoading.module.scss';
import { Logo } from '@/assests/Icons';
import { selectGlobalLoading } from '@/store/selectors';
import { useSelector } from 'react-redux';

function GlobalLoading() {
   const { globalLoading } = useSelector(selectGlobalLoading);
   if (!globalLoading) return null;

   return (
      <div className={clsx(styles.container)}>
         <span className={clsx(styles.process)}></span>
         <Logo width="8rem" height="4rem" />
      </div>
   );
}

export default GlobalLoading;
