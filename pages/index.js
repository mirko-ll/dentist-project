import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex items-center justify-center relative w-full h-full m-auto">
      <form className="flex flex-col gap-4 border p-8 mt-52">
        <button
          type="button"
          className="border border-zinc-500 rounded-md hover:bg-slate-50 px-10 py-2"
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/dashboard",
            })
          }
        >
          SignIn With Google
        </button>
      </form>
    </div>
  );
}
