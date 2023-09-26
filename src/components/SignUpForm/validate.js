export default function validate(values) {
    const errors = {};
    const name = values?.name.trim()
    const email = values?.email.trim()
    const password = values?.password.trim()
    const confirmPassword = values?.confirmPassword.trim()

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!name) {
        errors.name = 'Name is required'
    }

    if (!email) {
        errors.email = 'Email is required'
    }
    else if (!emailRegex.test(email)) {
        errors.email = 'Email does not appear to be a valid email address'
    }

    if (!password) {
        errors.password = `Password can't be blank`
    }
    else if (password.length < 6) {
        errors.password = 'Password needs to be at least 6 characters long'
    }

    if (!confirmPassword) {
        errors.confirmPassword = `Password confirm can't be blank`
    }
    else if (confirmPassword !== password) {
        errors.confirmPassword = `Password confirm not match`
    }

    return errors
}