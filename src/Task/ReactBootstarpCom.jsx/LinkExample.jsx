import Alert from 'react-bootstrap/Alert';
import React from 'react'


function LinkExample() {
    let arra = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ]
    return (
        <div>
            {
                arra.map((variant) => (
                    <Alert key={variant} variant={variant}>
                        This is a {variant} alert with{' '}
                        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
                        you like.
                    </Alert>
                ))}</div>
    )
}

export default LinkExample