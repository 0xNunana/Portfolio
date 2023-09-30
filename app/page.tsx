'use client'

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import techLogos from "@/util/techLogos";
import Image from "next/image";
import { FileDown } from "lucide-react";



const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

const handleDownloadClick = async () => {
	try {
	  const response = await fetch('resume-download'); // Replace with the correct API route URL
	  const blob = await response.blob();
	  const url = window.URL.createObjectURL(blob);
	  const a = document.createElement('a');
	  a.style.display = 'none';
	  a.href = url;
	  a.download = 'KudayaPaulYaoCV.pdf'; // Specify the desired filename
	  document.body.appendChild(a);
	  a.click();
	  window.URL.revokeObjectURL(url);
	} catch (error) {
	  console.error('Error downloading file:', error);
	}
  };
  

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
		
			<nav className="my-16 animate-fade-in">
				
				<ul className="flex items-center justify-center gap-4 space-x-6 max-sm:space-x-2">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-md duration-500 text-zinc-400 hover:text-zinc-300 max-sm:text-sm"
						>
							{item.name}
						</Link>
					))}
				<div className="hidden sm:inline-flex text-white px-1 cursor-pointer  max-sm:text-sm items-center " onClick={handleDownloadClick}>
					<p className="hidden sm:inline-flex">Résumé</p>
					<FileDown className="w-5 sm:w-10 "/></div>
				</ul>
				<div className="text-white py-4 cursor-pointer flex max-sm:text-xs  justify-center items-center sm:hidden " onClick={handleDownloadClick}>
					<p className="flex">Résumé</p>
					<FileDown className="w-5 sm:w-10 "/></div>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={300}
			/>
			<h1 className="z-10 text-[45px] text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				0xNunana
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in w-[50%] max-sm:w-full ">
				<h2 className="text-lg text-zinc-300 px-5 max-sm:text-xs ">
			Hi, my name is Kudaya Paul Yao, and I'm a software developer at{" "}
					<Link
						target="_blank"
						href="https://envisiolive.com/"
						className="underline duration-500 hover:text-zinc-300"
					>
						Envisio Live
					</Link>
					. With a strong passion for innovation and a commitment to excellence, I contribute to the success of projects through my expertise in software development."

				
				</h2>
				
			</div>
			<div className="text-center animate-fade-in text-white w-[50%] max-sm:w-full flex flex-wrap items-center justify-center sm:mt-20">
				{techLogos.map((tech)=>(
					<div key={tech.name} className="m-4 max-sm:m-2">
						<div className="flex items-center justify-center sm:hidden">
							<Image src={tech.imageSrc} alt={tech.altText} width={25} height={25}/>
						</div>
						<div className="hidden sm:flex items-center justify-center">
							<Image src={tech.imageSrc} alt={tech.altText} width={40} height={40}/>
						</div>
						{/* <p className="text-center text-xs mt-2">{tech.name}</p> */}
					</div>
				))}
			</div>
		</div>
	);
}
