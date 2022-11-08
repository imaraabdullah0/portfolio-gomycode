import React from 'react'
import './MyProject.css';
import front from '../assets/front.png';
import {AiFillBug,AiFillFile,AiFillFormatPainter,AiOutlineInstagram,AiOutlineLinkedin,AiFillGithub} from 'react-icons/ai';
import {SiJavascript,SiUpwork} from 'react-icons/si';
import { Link } from 'react-router-dom';


const MyProject = () => {
  return (
    <>
      <div className="sec1 relative pt-40 pb-24 bg-blueGray-50 mb-[200px]">
<div class=" container mx-auto">
  <div class=" flex flex-wrap items-center">
    <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
      <div class="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-500">
        <img alt="" src={front} class="w-full align-middle rounded-t-lg"/>
        <div class="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
            <polygon points="-30,95 583,95 583,65" class="text-pink-500 fill-current"></polygon>
          </svg>
          <h4 class="text-xl font-bold text-white">
            Great for your awesome project
          </h4>
          <p class="text-md font-light mt-2 text-white">
            Putting together a page has never been easier than matching
            together pre-made components. From landing pages presentation
            to login areas, you can easily customise and built your pages.
          </p>
        </div>
      </div>
    </div>

    <div class="w-full md:w-6/12 px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 px-4">
          <div class="relative flex flex-col mt-4">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <AiFillFormatPainter/>
              </div>
              <h6 class="text-xl mb-1 font-semibold">CSS Components</h6>
              <p class="mb-4 text-blueGray-500">
                Notus JS comes with a huge number of Fully Coded CSS
                components.
              </p>
            </div>
          </div>
          <div class="relative flex flex-col min-w-0">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                < SiJavascript/>
              </div>
              <h6 class="text-xl mb-1 font-semibold">
                JavaScript Components
              </h6>
              <p class="mb-4 text-blueGray-500">
                We also feature many dynamic components for React, NextJS,
                Vue and Angular.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 px-4">
          <div class="relative flex flex-col min-w-0 mt-4">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <AiFillBug/>
              </div>
              <h6 class="text-xl mb-1 font-semibold">Pages</h6>
              <p class="mb-4 text-blueGray-500">
                This extension also comes with 3 sample pages. They are
                fully coded so you can start working instantly.
              </p>
            </div>
          </div>
          <div class="relative flex flex-col min-w-0">
            <div class="px-4 py-5 flex-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <AiFillFile/>
              </div>
              <h6 class="text-xl mb-1 font-semibold">Documentation</h6>
              <p class="mb-4 text-blueGray-500">
                Built by developers for developers. You will love how easy
                is to to work with Notus JS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<section className="bg-gray-200  md:m-8 dark:bg-gray-800 dark:text-gray-100 mb-[200px]">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">Built to empower every team</h2>
		<p className="dark:text-gray-400">Libero minima optio qui</p>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Product</h3>
			<div className="space-y-1 leading-tight">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
				<p>Blanditiis aut mollitia ex</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Product</h3>
			<div className="space-y-1 leading-tight">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
				<p>Blanditiis aut mollitia ex</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Product</h3>
			<div className="space-y-1 leading-tight">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
				<p>Blanditiis aut mollitia ex</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Product</h3>
			<div className="space-y-1 leading-tight">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
				<p>Blanditiis aut mollitia ex</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Product</h3>
			<div className="space-y-1 leading-tight">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
				<p>Blanditiis aut mollitia ex</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Product</h3>
			<div className="space-y-1 leading-tight">
				<p>Similique quas ea veniam</p>
				<p>Tempore quasi porro</p>
				<p>Blanditiis aut mollitia ex</p>
			</div>
		</div>
	</div>
</section>
<footer className="px-4 divide-y bg-indigo-400 dark:text-gray-100">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-50">Product</h3>
				<ul className="space-y-1">
					<li>
						<b rel="noopener noreferrer" href="#">Features</b>
					</li>
					<li>
						<b rel="noopener noreferrer" href="#">Integrations</b>
					</li>
					<li>
						<b rel="noopener noreferrer" href="#">Pricing</b>
					</li>
					<li>
						<b rel="noopener noreferrer" href="#">FAQ</b>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-50">Company</h3>
				<ul className="space-y-1">
					<li>
						<b rel="noopener noreferrer" href="#">Privacy</b>
					</li>
					<li>
						<b rel="noopener noreferrer" href="#">Terms of Service</b>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase dark:text-gray-50">Developers</h3>
				<ul className="space-y-1">
					<li>
						<b rel="noopener noreferrer" href="#">Public API</b>
					</li>
					<li>
						<b rel="noopener noreferrer" href="#">Documentation</b>
					</li>
					<li>
						<b rel="noopener noreferrer" href="#">Guides</b>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase dark:text-gray-50">Social contacts</div>
				<div className="flex justify-start space-x-3">
					<p rel="" href="#" title="linkedin" className="flex items-center p-1 text-lg cursor-pointer">
						<AiOutlineLinkedin/>
					</p>
					<p rel="noopener noreferrer" href="https://www.linkedin.com/in/abdullah-imara-948639241/" title="github" className="flex items-center p-1 text-lg cursor-pointer">
            <AiFillGithub/>
					</p>
					<p rel="noopener noreferrer" href="https://www.upwork.com/freelancers/~01927a8f76f22e993e" title="upwork" className="flex items-center p-1 text-lg cursor-pointer">
					  <SiUpwork/>
					</p>
          <p rel="" href="https://www.instagram.com/abdullah.kh.im/" title="inastagram" className="flex items-center p-1 text-lg cursor-pointer">
						<AiOutlineInstagram />
					</p>
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-gray-400">© 2022 imara's Company Co. All rights reserved.</div>
</footer>
    </>
  )
}

export default MyProject