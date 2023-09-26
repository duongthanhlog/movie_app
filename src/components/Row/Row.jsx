import clsx from "clsx";
import styles from './Row.module.scss'

export default function Row({ children, lg, md, sm, rowGap, columnGap }) {
    return <div data-lg data-md style={{ rowGap: `${rowGap}px`, columnGap: `${columnGap}px` }} className={clsx(styles.container)}>
        {children}
    </div>
}