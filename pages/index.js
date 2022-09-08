import Head from "next/head";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import LanguageDropdown from "../components/LanguageDropdown";

export default function Home() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="flex flex-col gap-10 items-center justify-center relative w-full h-full m-auto">
      <Head>
        <title>Project Test</title>
        <meta
          name="description"
          content="An example of a meta description. These show up in search engine results."
          key="titleDescription"
        ></meta>
        <meta
          name="keywords"
          content="location, dentist, seo"
          key="titleKeywords"
        ></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://metatags.io/"></meta>
        <meta
          property="og:title"
          content="Meta Tags — Preview, Edit and Generate"
        ></meta>
        <meta
          property="og:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        ></meta>
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        ></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://metatags.io/"></meta>
        <meta
          property="twitter:title"
          content="Meta Tags — Preview, Edit and Generate"
        ></meta>
        <meta
          property="twitter:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        ></meta>
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        ></meta>
      </Head>
      <h1 className="text-cyan-800 text-5xl mt-10">{t("greeting")}</h1>
      <h2>Test SEO</h2>
      <LanguageDropdown />
      <form className="flex flex-col">
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
        {locale}
      </form>
    </div>
  );
}
