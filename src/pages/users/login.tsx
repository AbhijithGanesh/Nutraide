import supabase from "@/supabase/profile";
import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { TfiTwitter } from "react-icons/tfi";
import { VscGithubAlt } from "react-icons/vsc";

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
}

async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
}

async function signInWithTwitter() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "twitter",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
}

const AuthComponent = (): JSX.Element => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [authState, setAuthState] = useState<any>();

  return (
    <>
      <section className="flex flex-col gap-2 w-full">
        <section className="text-md font-normal">Login</section>
        <input
          className="p-2 border border-gray-300 rounded-md font-medium text-black"
          type="email"
          placeholder="BeNutrious@healthy.com"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <input
          className="p-2 border border-gray-300 rounded-md font-medium text-black"
          type="password"
          placeholder="*******"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <section className="flex flex-1 gap-2 justify-end">
          <section className="text-base">Forgot your password?</section>
        </section>
        <button
          className="p-2 bg-base text-white rounded-md font-medium"
          onClick={(e: any) => {
            e.preventDefault();
            supabase.auth
              .signInWithPassword({
                email: email!,
                password: password!,
              })
              .then((data: any) => {
                alert("You've logged in!");
                console.log(data);
              });
          }}
        >
          <section className="flex justify-center items-center gap-2">
            <AiOutlineLogin />
            <section>Login</section>
          </section>
        </button>
        <section className="font-semibold text-md flex justify-center pt-4 text-base">
          Don't have an account? Use these
        </section>
        <section className="h-0.5 bg-gray-200" />
        <button className="text-center font-normal border-2 border-bg-black rounded-md p-1 hover:text-black hover:bg-slate-100" onClick={signInWithGoogle}>
          <section className="flex items-center justify-center gap-2">
            <BsGoogle className="text-2xl" />
            Login with Google
          </section>
        </button>
        <button className="text-center font-normal border-2 border-bg-black rounded-md p-1 hover:text-black hover:bg-slate-100" onClick={signInWithGitHub}>
          <section className="flex items-center justify-center gap-2">
            <VscGithubAlt className="text-2xl" />
            Login with GitHub
          </section>
        </button>
        <button
          className="text-center font-normal border-2 border-bg-black rounded-md p-1 hover:text-black hover:bg-slate-100"
          onClick={signInWithTwitter}
        >
          <section className="flex items-center justify-center gap-2">
            <TfiTwitter className="text-2xl" />
            Login with Twitter
          </section>
        </button>
      </section>
    </>
  );
};

const LoginComponent = (): JSX.Element => {
  return (
    <>
      <section className="bg-gray-900 text-white h-screen">
        <section className="flex items-center justify-center pt-32">
          <section className="flex flex-col items-center gap-4 font-semibold w-1/3">
            <AuthComponent />
          </section>
        </section>
      </section>
    </>
  );
};
export default LoginComponent;
