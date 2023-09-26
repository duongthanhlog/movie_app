import clsx from 'clsx';
import styles from './SignUp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import SignUpForm from '@/components/SignUpForm/SignUpForm';

function SignUp() {
    return (
        <Container fluid="xl">
            <div className={clsx(styles.content)}>
                <div className={clsx(styles.leftPanel)}>
                    <div className={clsx(styles.heading)}>Benefits of being a member</div>
                    <ul>
                        <li><FontAwesomeIcon className={clsx(styles.checkIcon)} icon={faCheck} />Find something to watch on your subscribed streaming services</li>
                        <li><FontAwesomeIcon className={clsx(styles.checkIcon)} icon={faCheck} />Log the movies and TV shows you have watched</li>
                        <li><FontAwesomeIcon className={clsx(styles.checkIcon)} icon={faCheck} />Keep track of your favourite movies and TV shows and get recommendations from them</li>
                        <li><FontAwesomeIcon className={clsx(styles.checkIcon)} icon={faCheck} />Build and maintain a personal watchlist</li>
                        <li><FontAwesomeIcon className={clsx(styles.checkIcon)} icon={faCheck} />Build custom mixed lists (movies and TV)</li>
                        <li><FontAwesomeIcon className={clsx(styles.checkIcon)} icon={faCheck} />Take part in movie and TV discussions</li>
                        <li><FontAwesomeIcon className={clsx(styles.checkIcon)} icon={faCheck} />Contribute to, and improve the information in our database</li>
                    </ul>
                </div>

                <div className={clsx(styles.form)}>
                    <h2>Sign up for an account</h2>
                    <p>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>
                    <SignUpForm />
                </div>
            </div>
        </Container>
    );
}

export default SignUp;