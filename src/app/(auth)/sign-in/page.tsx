import { AuthForm } from '@/components'
import { signIn } from '@/lib/auth/actions'
import React from 'react'

export default function page() {
  return (
    <AuthForm mode='sign-in' onSubmit={signIn} />
  )
}
