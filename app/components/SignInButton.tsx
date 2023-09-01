'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

const SignInButton = () => {
   const { data: session } = useSession();
   console.log(session);
   return (
      <>
         {
            session ? (<>
               <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={() => signOut()}
               >
                  Sair
               </button >
               <img
                  className="w-10 h-10 rounded-full"
                  src={`${session.user?.image}`}
                  alt={`${session.user?.name}`}
               ></img></>) : (<>
                  <button
                     type="button"
                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                     onClick={() => signIn("google")}
                  >
                     Login
                  </button >
               </>)}
      </>
   )
}

export default SignInButton