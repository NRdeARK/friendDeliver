import React from 'react'

function Card() {
  return (
    <div>
        
        <br />
        recommended dishes<br />
        <div className="p-6">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
    <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[180px] overflow-hidden">
        <img src="https://thumbnails.production.thenounproject.com/c4UZhX8RJFowtAoq8OZlUjIFmBg=/fit-in/1000x1000/photos.production.thenounproject.com/photos/D0EE41F3-3CB3-4F1E-B6E5-4CCE5B1DCB17.jpg" alt="Hamburger" />
      </div>

      <div className="p-6">
        <div className="flex flex-col items-start sm:flex-row sm:items-center text-left ">
          <div>
            <p className="text-gray-400">Fast Food • อาหารตามสั่ง</p>
            <h2 className="mt-2 text-lg font-semibold text-gray-800">ข้าวกะเพราหมู ไก่ เนื้อ ทะเล</h2>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span className="ml-2 text-gray-600">10 - 15 Mins</span>
            <span className="mx-2">•</span>
            <span className="text-gray-400">โรงอาหารสมเด็จพระเทพฯ</span>
          </p>

          
        </div>
      </div>
    </div>

    <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[180px] overflow-hidden">
        <img src="https://thumbnails.production.thenounproject.com/c4UZhX8RJFowtAoq8OZlUjIFmBg=/fit-in/1000x1000/photos.production.thenounproject.com/photos/D0EE41F3-3CB3-4F1E-B6E5-4CCE5B1DCB17.jpg" alt="Hamburger" />
      </div>

      <div className="p-6">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <p className="text-gray-400">Fast Food • ข้าวหน้า</p>
            <h2 className="mt-2 text-lg font-semibold text-gray-800">Beef Hamburger</h2>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span className="ml-2 text-gray-600">10 - 15 Mins</span>
            <span className="mx-2">•</span>
            <span className="text-gray-400">โรงอาหารสมเด็จพระเทพฯ</span>
          </p>


        </div>
      </div>
    </div>

    <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[180px] overflow-hidden">
        <img src="https://thumbnails.production.thenounproject.com/c4UZhX8RJFowtAoq8OZlUjIFmBg=/fit-in/1000x1000/photos.production.thenounproject.com/photos/D0EE41F3-3CB3-4F1E-B6E5-4CCE5B1DCB17.jpg" alt="Hamburger" />
      </div>

      <div className="p-6">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <p className="text-gray-400">Fast Food • Burger</p>
            <h2 className="mt-2 text-lg font-semibold text-gray-800">Beef Hamburger</h2>
          </div>
          
        </div>

        <hr className="mt-4 mb-4" />

        <div className="flex flex-wrap justify-between">
          <p className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span className="ml-2 text-gray-600">10 - 15 Mins</span>
            <span className="mx-2">•</span>
            <span className="text-gray-400">โรงอาหารสมเด็จพระเทพฯ</span>
          </p>


        
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Card