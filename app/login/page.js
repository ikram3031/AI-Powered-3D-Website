import LoginForm from '@/components/LoginForm';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from '../api/auth/[...nextauth]/route';

const page = async () => {
  const session = await getServerSession(authOptions);

  console.log( 'session:', session )

  if (session) redirect("/");

  return (
    <>
        <LoginForm />
    </>
  )
}

page.withLoginLayout = true;

export default page