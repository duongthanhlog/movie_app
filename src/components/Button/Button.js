import clsx from "clsx";
import styles from './Button.module.scss'
import { Link } from "react-router-dom";

function Button({ className, children, primary, leftIcon, rightIcon, ...props }) {
    const classes = clsx(styles.button, {
        [styles.primary] : primary
    }, className)

    let Component = 'button';

    if(props.to) {
        Component = Link
    }
    if(props.href) {
        Component = 'a'
    }


    return ( 
            <Component {...props} className={classes}>
                {leftIcon && <span className={clsx(styles.leftIcon)}>{leftIcon}</span>}
                <div className={clsx(styles.children)}>{children}</div>
                {rightIcon && <span className={clsx(styles.rightIcon)}>{rightIcon}</span>}
            </Component>
    );
}

export default Button;