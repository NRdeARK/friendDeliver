import React from 'react'

function Destination() {
  return (
    <div className='xl:my-12 xl:mx-24  px-32 py-16 my-16 mx-8 '>
        
        <h1 className='text-5xl '>โรงอาหารอาคารเรียนรวมสมเด็จพระเทพฯ</h1>
        <p>ของสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง 
            </p>

        <div className='flex content-center justify-between mt-16 gap-4 xl:flex-row flex-col-reverse lg:flex-row xl:mt-[2.5rem] '>
            <div className='xl:w-2/4 text-start text-xl  w-full'>
                <h2 className='pb-4'>ข้าวผัดอร่อยมากๆ</h2>
                <p className='text-justify pr-9 max-xl:pr-0'>
                ศูนย์รวมร้านอาหารมากมาย ทั้งอาหารตามสั่ง อาหารจานเดียว สเต็ก ก๋วยเตี๋ยว ร้านกาแฟ ผลไม้ และของหวาน บรรยากาศสบายๆ ราคาก็ไม่แพง        
                แถมรสชาติอาหารก็ยังถูกใจอีกด้วย และมีห้องแอร์ไว้รองรับสำหรับทานอาหารหรือนั่งพักผ่อน อ่านหนังสือกับเพื่อนๆก็ได้สบายๆ
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
                src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.6435-9/163804466_1883601435126620_5664025049239475546_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEl5DritQ3Ksy3muRacIuyX4GazJjuZ0QXgZrMmO5nRBV8js-MmVMbZ1_LT5-YFc7vB5Rilp0AUe4s0AfZ4e2Qm&_nc_ohc=tXobIKJSBQwAX-bbabZ&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfCQlzbBPQEqC-iXVmrMdeHyj40l4QPSMemAyHPdlcPkWQ&oe=6471E8B7" 
                
                
                />
            
            </div>

        </div>
    </div>
  )
}

export default Destination