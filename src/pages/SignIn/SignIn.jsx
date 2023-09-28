import SignInForm from '@/components/SignInForm/SignInForm';
import { Container } from 'react-bootstrap';

import styles from './SignIn.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

function SignIn() {
   return (
      <Container fluid="xl">
         <div className={clsx(styles.form)}>
            <h2>Login to your account</h2>
            <p>
               In order to use the editing and rating capabilities of TMDB, as well as get personal
               recommendations you will need to login to your account. If you do not have an
               account, registering for an account is free and simple.{' '}
               <Link className={clsx(styles.signUpBtn)} to={'/signup'}>
                  Click here
               </Link>{' '}
               to get started.
            </p>
            <SignInForm />
         </div>
      </Container>
   );
}

export default SignIn;
