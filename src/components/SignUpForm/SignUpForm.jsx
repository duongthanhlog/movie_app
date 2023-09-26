import clsx from 'clsx';
import styles from './SignUpForm.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import validate from './validate';
import { fetchDataFromApi } from '@/utils/httpRequest';
import { useDispatch } from 'react-redux';
import { signUp } from '@/store/Slices/userSlice';

function SignUpForm() {
   const [errors, setErrors] = useState({});
   const [values, setValues] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
   });

   const dispatch = useDispatch();

   const handleChange = (e) => {
      const { name, value } = e.target;
      if (value.startsWith(' ')) return;
      setValues((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(values));
      const haveErrors = Object.keys(validate(values)).length > 0;
      if (haveErrors) return;
      dispatch(signUp(values));
   };

   return (
      <div className={clsx(styles.content)}>
         {Object.keys(errors).length > 0 && (
            <div className={clsx(styles.errorStatusCard)}>
               <div className={clsx(styles.heading)}>
                  <FontAwesomeIcon
                     style={{
                        marginRight: '4px',
                     }}
                     icon={faCircleInfo}
                  />{' '}
                  There was an error processing your signup
               </div>
               <ul className={clsx(styles.errorList)}>
                  {Object.keys(errors ?? {}).map((text, i) => {
                     return <li key={i}>{errors[text]}</li>;
                  })}
               </ul>
            </div>
         )}

         <div className={clsx(styles.formGroup)}>
            <label className={clsx(styles.label)}>Username</label>
            <input
               onChange={handleChange}
               value={values.name}
               type="text"
               name="name"
            />
         </div>
         <div className={clsx(styles.formGroup)}>
            <label className={clsx(styles.label)}>
               Password (6 characters minimum)
            </label>
            <input
               onChange={handleChange}
               value={values.password}
               type="password"
               name="password"
            />
         </div>
         <div className={clsx(styles.formGroup)}>
            <label className={clsx(styles.label)}>Password Confirm</label>
            <input
               onChange={handleChange}
               value={values.confirmPassword}
               type="password"
               name="confirmPassword"
            />
         </div>
         <div className={clsx(styles.formGroup)}>
            <label className={clsx(styles.label)}>Email</label>
            <input
               onChange={handleChange}
               value={values.email}
               type="text"
               name="email"
            />
         </div>
         <p
            style={{
               margin: '18px 0 20px 0 ',
            }}
         >
            By clicking the "Sign up" button below, I certify that I have read
            and agree to the TMDB terms of use and privacy policy.
         </p>
         <div className="d-flex align-items-center">
            <button onClick={handleSubmit} className={clsx(styles.submitBtn)}>
               Sign up
            </button>
            <Link className={clsx(styles.cancelBtn)} to="/">
               Cancel
            </Link>
         </div>
      </div>
   );
}

export default SignUpForm;
