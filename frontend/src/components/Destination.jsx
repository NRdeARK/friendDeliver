import React from 'react'

function Destination() {
  return (
    <div className='xl:my-12 xl:mx-24 font-[Poppins] px-32 py-16 my-16 mx-8 '>
        
        <h1 className='text-5xl '>Destination</h1>
        <p>Tailwind lets you conditionally apply utility classes in different 
            </p>

        <div className='flex content-center justify-between mt-16 gap-4 xl:flex-row flex-col-reverse lg:flex-row xl:mt-[2.5rem] '>
            <div className='xl:w-2/4 text-start text-xl  w-full'>
                <h2 className='pb-4'>ข้าวผัดอร่อยมากๆ</h2>
                <p className='text-justify pr-9 max-xl:pr-0'>
                    Tailwind lets you conditionally apply utility classes in different states using variant 
                    modifiers. For example, use hover:bg-repeat-x to only apply the bg-repeat-x utility on hover.
                    As a language model, I can generate long English sentences on any topic you wish. However, without any context or specific purpose, I will provide you with a general sentence:
                    Despite the ongoing pandemic, the global economy has shown signs of recovery in recent months, with many countries experiencing an increase in consumer spending, job creation, and international trade,
                    although concerns about inflation and supply chain disruptions remain high.
                </p>
            </div>
            <div className="relative xl:w-1/2 flex justify-between z-0 w-full mx-[1.8rem] ">
            
                <img className="object-cover rounded-md  max-xl:h-[250px]" 
                src="https://scontent.futp1-1.fna.fbcdn.net/v/t1.6435-9/116595023_3335278006533461_8934114504950405875_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sRn57nGSX4wAX-wvSPF&_nc_ht=scontent.futp1-1.fna&oh=00_AfBwMez2QsaBY_kcoVzBLOxlsSLEJhz4rHSQTIdkkvXQOA&oe=6466EAD1" 
                style={{
                   
                    width:"49%",
                    height:"350px",
                }}
                />
                
                
                <img className=" right-0 object-cover rounded-md  absolute  xl:h-[190px]" 
                style={{
                    top:"-9%",
                    width:"49%",
                    height:"350px",
                }}
                src="https://scontent.futp1-1.fna.fbcdn.net/v/t1.6435-9/116595023_3335278006533461_8934114504950405875_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sRn57nGSX4wAX-wvSPF&_nc_ht=scontent.futp1-1.fna&oh=00_AfBwMez2QsaBY_kcoVzBLOxlsSLEJhz4rHSQTIdkkvXQOA&oe=6466EAD1" 
                
                
                />
            
            </div>

        </div>
    </div>
  )
}

export default Destination