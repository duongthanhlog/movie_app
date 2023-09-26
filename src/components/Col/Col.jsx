import clsx from 'clsx'
import styles from './Col.module.scss'

export default function Col({ children, className, lg, md, sm, ...props }) {
    return <div className={clsx(styles.container, `col l-${lg} m-${md} s-${sm}`)} {...props}>{children}</div>
}