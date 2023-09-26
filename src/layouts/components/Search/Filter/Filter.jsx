import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/Button/Button';
import Popper from '@/components/Popper/Popper';
import styles from './Filter.module.scss';
import { listFilter } from './contants';
import { memo } from 'react';

function Filter({ className, onChangeFilter, value, show }) {
   const classes = clsx(styles.popper, className);

   return (
      <AnimatePresence>
         {show && (
            <motion.div
               initial={{ opacity: 0, translateY: '-8px' }}
               animate={{ opacity: 1, translateY: '0' }}
               exit={{ opacity: 0, translateY: '-8px' }}
               className={classes}
            >
               <Popper>
                  {listFilter.map((item) => {
                     if (item.footer) {
                        return (
                           <Button
                              className={clsx(styles.filterItem)}
                              leftIcon={item.leftIcon}
                              rightIcon={item.rightIcon}
                              key={uuidv4()}
                           >
                              {item.label}
                           </Button>
                        );
                     }
                     return (
                        <Button
                           className={clsx(styles.filterItem, {
                              [styles.active]: value === item.label,
                           })}
                           leftIcon={item.icon}
                           key={uuidv4()}
                           onClick={() => onChangeFilter(item)}
                        >
                           {item.label}
                        </Button>
                     );
                  })}
               </Popper>
            </motion.div>
         )}
      </AnimatePresence>
   );
}

export default memo(Filter);
