import React from "react";

function AboutUs() {
  return (
    <div className="bg-slate-700 bt-[160px] h-full pt-12 pb-2">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight  text-gray-900 dark:text-white">
          Our Team
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          ----------------------------------------------------------------
        </p>
        <div className="grid gap-2 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img className="object-cover   mx-auto mb-4 w-36 h-36 rounded-full" src="https://media.discordapp.net/attachments/1095391598034026657/1101942645275758613/xlo6mdpa.png?width=397&height=406" ></img>
            <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">กัลยรัตน์ ผูกโอสถ</a>
            </h3>
            <p>64010045</p>
            
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img className="object-cover mx-auto mb-4 w-36 h-36 rounded-full" src="https://media.discordapp.net/attachments/1095391598034026657/1101878577865162783/2D_MAM.jpg?width=610&height=406" alt="Helene Avatar"></img>
            <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">เกริกไกวัล สุภาเสพย์</a>
            </h3>
            <p>64010065</p>
            
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://media.discordapp.net/attachments/1095391598034026657/1101876476816654476/324886816_1305254330039923_7806163042403497149_n.png?width=406&height=406" alt="Jese Avatar"></img>
            <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">ณัฏฐพันธุ์ รักวิทยาศาสตร์</a>
            </h3>
            <p>64010223</p>
            
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img className="object-cover mx-auto mb-4 w-36 h-36 rounded-full" src="https://media.discordapp.net/attachments/1095391598034026657/1101880363200028682/FB_IMG_1682779135649.jpg?width=405&height=406" ></img>
            <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">ณัฐพล บุญแดง</a>
            </h3>
            <p>64010248</p>
            
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img className="object-cover mx-auto mb-4 w-36 h-36 rounded-full" src="https://media.discordapp.net/attachments/989160439155949650/1101942176340000848/2cfep736.png?width=372&height=406" ></img>
            <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">นนทพันธ์ จิตรชิรานันท์</a>
            </h3>
            <p>64010400</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
