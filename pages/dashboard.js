import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  const handleLogout = () => {
    signOut({
      callbackUrl: "http://localhost:3000/",
    });
  };

  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-bold text-3xl text-zinc-800">Admin Panel</h1>
      <div className="flex items-center gap-5">
        <span>{session?.user?.name}</span>
        {status === "authenticated" ? (
          <button
            className="border border-zinc-500 rounded-md hover:bg-slate-50 p-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <p>You need to sign in</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
