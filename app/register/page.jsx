import React from 'react';
import RegisterForm from '@/components/Register';

const register = () => {
  return (
    <div>
        <RegisterForm />
    </div>
  )
}

register.withLoginLayout = false

export default register