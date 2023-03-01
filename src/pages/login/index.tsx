import { HeaderTitle } from "@/components/HeaderName";
import { Header } from "@/stories/Header";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <HeaderTitle name={"peel"}></HeaderTitle>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-red-300 text-4xl font-bold flex justify-center pb-10">
        Login Page
      </h1>

      <form
        action="/send-data-here"
        method="post"
        className="flex flex-col items-center justify-center pt-3 gap-5"
      >
        <input
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
          className=" w-60 h-10 text-center rounded-md border border-slate-400 hover:border-slate-600"
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          className=" w-60 h-10 text-center rounded-md border border-slate-400 hover:border-slate-600"
        />
        <input
          type="text"
          id="text"
          name="username"
          placeholder="Please enter username"
          className=" w-64 h-10 mt-10 text-center rounded-md border border-slate-400 hover:border-slate-600"
        />
        <button
          type="submit"
          className=" w-52 h-10 mt-3 rounded-md border border-slate-400 hover:border-slate-600 bg-indigo-500"
        >
          Create an account
        </button>
      </form>
    </>
  );
}
