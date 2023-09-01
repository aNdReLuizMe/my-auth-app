'use client'

import { useSession} from 'next-auth/react';
import { redirect } from 'next/navigation';

const Client = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin?callbackUrl=/client')
    }
  })
  return (
    <div className='text-xl'>Olá {session?.user?.name} <br/> <strong> Autorização </strong> com <strong className='text-blue-400'><a href='https://authjs.dev/' target='_blank'>Auth.js</a></strong></div>
  )
}

export default Client