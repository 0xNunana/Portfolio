import React from 'react'
import { projects } from '@/util/projectDB'
import Image from 'next/image'
import { MonitorCheck,Smartphone } from 'lucide-react'

const page = () => {
  return (
    <div  className=" h-screen text-zinc-200 text-3xl font-bold bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 " >
      <div className="container mx-auto p-4 ">
        <h1 className="text-3xl font-semibold mb-4  p-2 ">My Projects</h1>
        <div className=' p-1 my-2'>
       
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {projects.map((project,index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
            >
              <div className="">
                <div className=' h-96 max-sm:h-80 relative '>
                  {project.category === 'Web' ? (   <MonitorCheck size={35} className='absolute right-0 p-1 bg-black/40' />):(<Smartphone size={35} className='absolute right-0 p-1 bg-black/40'  />)}
             
                
                <h2 className="text-xl font-semibold absolute top-0 bg-zinc-600 text-white px-3">{project.title}</h2>
                <img
  src={project.image}
  alt={`${project.title} Image`}
className='w-auto h-auto'
/>
                <p className="text-white mb-2 absolute bottom-10 rounded-r-lg pr-5 pl-2 bg-zinc-700 py-3 max-sm:p-1 max-sm:text-lg md:text-xl">{project.description}</p>
                </div>
               
                <div className="mt-4  bg-zinc-500 font-normal space-x-6 absolute bottom-0 w-full flex items-center justify-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white max-sm:text-sm max-sm:py-1 hover:underline text-xl mr-4"
                  >
                    GitHub
                  </a>
               
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white max-sm:text-sm max-sm:py-1 text-xl hover:underline"
                  >
                    Live Demo
                  </a> 
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        {/* <div className=' p-1 my-2'>
          <p className='p-4'>Mobile</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project,index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="">
                <div className=' h-80 relative '>
                <h2 className="text-xl font-semibold absolute top-0 bg-zinc-600 text-white">{project.title}</h2>
                <img
  src={project.image}
  alt={`${project.title} Image`}
className='w-auto h-auto'
/>
                <p className="text-white mb-2 absolute bottom-0 bg-zinc-700 p-3">{project.description}</p>
                </div>
               
                <div className="mt-4 text-white bg-zinc-500">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mr-4"
                  >
                    GitHub
                  </a>
                  | {""}
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div> */}
        
      </div>
        </div>
  )
}

export default page