import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import techLogos from "@/util/techLogos";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-md duration-500 text-zinc-400 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={300}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				0xNunana
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg text-zinc-300 px-5 ">
					Hi, my name is Kudaya Paul Yao, A software developer at{" "}
					<Link
						target="_blank"
						href=""
						className="underline duration-500 hover:text-zinc-300"
					>
						Envisio Live
					</Link>

				
				</h2>
			</div>
			<div className="text-center animate-fade-in text-white flex flex-wrap items-center justify-center">
			{techLogos.map((tech) => (
        <div key={tech.name} className="m-4 ">
			<div className="flex items-center justify-center">
			<img src={tech.imageSrc} alt={tech.altText} width={40} height={40} />
			</div>
         
          <p className="text-center text-xs mt-2">{tech.name}</p>
        </div>
      ))}
			</div>
		</div>
	);
}
