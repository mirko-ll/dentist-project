import { signIn } from "next-auth/react";

export default function Home({ initialUsers }) {
  const handleSubmit = () => {};

  return (
    <div className="flex items-center justify-center relative w-full h-full m-auto">
      <form className="rounded-xl flex flex-col gap-4 border border-zinc-700 p-8 mt-52">
        <input
          className="border border-zinc-400 p-2 rounded-md"
          type="text"
          placeholder="Name..."
        />
        <input
          className="border border-zinc-400 p-2 rounded-md"
          type="text"
          placeholder="Email..."
        />
        <input
          className="border border-zinc-400 p-2 rounded-md"
          type="text"
          placeholder="Password..."
        />
        <button
          type="button"
          className="border border-zinc-500 rounded-md hover:bg-slate-50 p-2"
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/dashboard",
            })
          }
        >
          SignIn
        </button>
      </form>
    </div>
  );
}
