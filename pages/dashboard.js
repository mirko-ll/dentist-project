import { getSession, signOut, useSession } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LanguageDropdown from "../components/LanguageDropdown";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const { t } = useTranslation("about");

  const handleLogout = () => {
    signOut({
      callbackUrl: "http://localhost:3000/",
    });
  };

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-bold text-3xl text-zinc-800">Admin Panel</h1>
        <LanguageDropdown />
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
      <h1 className="text-5xl text-zync-800">{t("test")}</h1>
    </>
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
