import Image from "next/image";
import { signIn } from "next-auth/react";
import  '../styles.css'
import { useSession } from "next-auth/react";
export default function SignInBtn() {
    const {status}=useSession()
  return (
    <div className="flex gap-3 flex-col justify-center items-center min-h-screen">
      
          <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
    >
      <Image src="/google-logo.png" height={30} width={30} />
      <span className="bg-blue-500 text-white px-4 py-3">
        Sign in with Google
      </span>
    </button>
    <div className="text-xl font-semibold">
      Sign in to start saving your notes
    </div>

    </div>
  );
}