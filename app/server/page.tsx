import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOption } from '../api/auth/[...nextauth]/route';

const ServerPage = async () => {
   const session = await getServerSession(authOption);
   if(!session) redirect('/sign?callbackUrl=/server')
   console.log(session)
   return (
      <div className='text-xl'>Sem<strong> Autorização </strong> para <br/> acessar o <strong className='text-blue-400'>Servidor</strong></div>
   )
}

export default ServerPage