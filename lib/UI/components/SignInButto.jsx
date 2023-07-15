import Image from "next/image";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
export default function SignInBtn() {
    const {status}=useSession()
  return (
    <div className="button-google-div">
    <button
    onClick={() => signIn("google")}
    className="google-button"
    >
    <div className="google-img-div">  
    <Image src="/google-logo.png" height={30} width={30} />
    </div>
    <span className="bg-blue-500 text-white px-4 py-3">
      Sign in with Google
    </span>

    </button>

    </div>
  );
}