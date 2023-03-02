import Head from "next/head";

export default function VerifyRequest() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-red flex justify-center">
				Thanks! Please check your Inbox a link has been sent to the E-Mail
				address you entered
			</h1>
		</>
	);
}