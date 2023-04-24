import React, {useEffect, useState} from 'react'
PostTicket
import LandingPost from '../components/PostTicket'
import PostTicket from '../components/PostTicket'
import Destination from '../components/Destination'
import Card from '../components/Card';
function Index() {
  return (
    <div className=" justify-center items-center h-screen   z-10 " >
     
     <div
          className=" object-none  blur-sm brightness-110  bg-cover bg-center h-screen "
          style={{
            backgroundImage:
              "url('https://scontent.futp1-1.fna.fbcdn.net/v/t1.6435-9/163261349_1883601285126635_930153694810579536_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=nclvTI_XxD0AX9AtRnD&_nc_ht=scontent.futp1-1.fna&oh=00_AfCOj6VsVbBeTDKwFdKsorstF3ugZ7_M7cbuH58MGhD29A&oe=6467019E')",

            
          }}
      ></div>
      
      <div class="absolute  inset-0 flex items-center justify-center">
        
        <div class=" bg-slate-100/75 h-3/5 w-2/4  border-gray-300 rounded p-4  flex flex-col items-center    ">
          <div className=' bg-cover bg-center z-20 h-1/4  w-1/4 sm:w-4/12 '
            style={{
            backgroundImage:
              "url('https://media.discordapp.net/attachments/1006931952454082590/1098314659070750880/Frame_15__1_-removebg-preview.png?width=673&height=578')",
            }}>
          </div>
          <h1>
            FriendDeliver
          </h1>
        </div>
          
      </div>
      
      <div className='bg-slate-100/20 '>
        <Destination>
        
        </Destination>
      </div>
      <div className='p-1 '><Card></Card></div>
      <div className="  flex items-center justify-center">
      <PostTicket></PostTicket>
      </div>
      
      <br />
      <br />
    </div>
  )
}

export default Index