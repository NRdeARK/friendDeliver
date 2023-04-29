import React from "react";

function AboutUs() {
  return (
    <div className="bg-slate-700 bt-[160px] h-full pt-12 pb-2">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight  text-gray-900 dark:text-white">
          Our Team
        </h2>
        <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
        <div class="grid gap-2 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"></img>
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Bonnie Green</a>
            </h3>
            <p>CEO/Co-founder</p>
            
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene Avatar"></img>
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Helene Engels</a>
            </h3>
            <p>CTO/Co-founder</p>
            
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar"></img>
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Jese Leos</a>
            </h3>
            <p>SEO &amp; Marketing</p>
            
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="Joseph Avatar"></img>
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Joseph Mcfall</a>
            </h3>
            <p>Sales</p>
            
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar"></img>
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Lana Byrd</a>
            </h3>
            <p>Web Designer</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
