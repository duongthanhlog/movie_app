import clsx from 'clsx';
import styles from './Button.module.scss';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

function Button(
   { className, children, primary, leftIcon, rightIcon, disabled, ...props },
   ref
) {
   const classes = clsx(
      styles.button,
      {
         [styles.primary]: primary,
         [styles.disabled]: disabled,
      },
      className
   );

   let Component = 'button';

   if (props.to) {
      Component = Link;
   }
   if (props.href) {
      Component = 'a';
   }
   if (disabled) {
      props.onClick = () => {};
   }

   return (
      <Component {...props} className={classes} ref={ref}>
         {leftIcon && <span className={clsx(styles.leftIcon)}>{leftIcon}</span>}
         <div className={clsx(styles.children)}>{children}</div>
         {rightIcon && (
            <span className={clsx(styles.rightIcon)}>{rightIcon}</span>
         )}
      </Component>
   );
}

export default forwardRef(Button);
