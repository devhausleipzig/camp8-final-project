import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-title">Landing Page</h1>

			<h1 className="text-primary">Landing Page</h1>

			<h1 className="text-links">Landing Page</h1>

			<h1 className="text-secondary">Landing Page</h1>

			<h1 className="cards-title">Landing Page</h1>

			<h1 className="button-bold">Landing Page</h1>
			<h1 className="button-large">Landing Page</h1>

			<div className="flex flex-row">
				<div className="h-96 aspect-square bg-primary-default-background"></div>
				<div className="h-96 aspect-square bg-primary-default-Solid"></div>
				<div className="h-96 aspect-square bg-primary-transparent"></div>
				<div className="h-96 aspect-square bg-primary-frame"></div>
			</div>

			<hr />

			<div className="flex flex-row">
				<div className="h-96 aspect-square bg-secondary-default"></div>
				<div className="h-96 aspect-square bg-secondary-transparent"></div>
			</div>

			<hr />

			<div className="flex flex-row">
				<div className="h-96 aspect-square bg-text-typo"></div>
				<div className="h-96 aspect-square border-4 border-primary-default-Solid bg-text-white"></div>
				<div className="h-96 aspect-square border-4 border-primary-default-Solid bg-text-white_transparent"></div>
			</div>

			<hr />

			<div className="flex flex-row">
				<div className="h-96 aspect-square bg-ux-error"></div>
				<div className="h-96 aspect-square bg-ux-inactive"></div>
				<div className="h-96 aspect-square bg-ux-success"></div>
			</div>
		</>
	);
}
