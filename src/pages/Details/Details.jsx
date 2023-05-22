import clsx from "clsx";
import { Container } from "react-bootstrap";
import { useLocation, useParams } from "react-router";

import styles from './Details.module.scss';
import useFetch from "@/hooks/useFetch";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";


function Details() {
    const { id } = useParams()
    const { data } = useFetch(`${import.meta.env.VITE_BASE_URL}movie/${id}/credits`)
    const { state } = useLocation()

    return ( 
        <div className={clsx(styles.container)}>
            <ContentWrapper>
                <h1 style={{color : 'white'}}>detials page</h1>
            </ContentWrapper>
        </div>
     );
}

export default Details;