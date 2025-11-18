import React from 'react'
import CustomDrawer from '../../Drawer'
import { useNavigate } from 'react-router-dom'

const classes = [
  { name: 'Class 1', monthly: 500, yearly: 6000, color: 'bg-[#2a9b42]' },
  { name: 'Class 2', monthly: 550, yearly: 6600, color: 'bg-[#2a9b42]' },
  { name: 'Class 3', monthly: 600, yearly: 7200, color: 'bg-[#2a9b42]' },
  { name: 'Class 4', monthly: 650, yearly: 7800, color: 'bg-[#2a9b42]' },
  { name: 'Class 5', monthly: 700, yearly: 8400, color: 'bg-[#2a9b42]' },
]

const FeeVoucher = () => {
  const navigate = useNavigate();

  const handlePayNow = () => {
    navigate('/fee/submission'); // make sure your route is defined
  }

  return (
    <>
      <CustomDrawer />

      <div className="flex flex-col items-center gap-6 bg-gray-100 dark:bg-gray-900 p-6">
        {/* Main Heading */}
        <h1 className="text-[#2a9b42] text-5xl font-extrabold tracking-wide mb-6 font-serif">
          Fees Voucher
        </h1>

        {classes.map((cls, index) => (
          <div
            key={index}
            className="w-full max-w-3xl bg-white border border-gray-200 rounded-xl shadow-md sm:p-0 dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
          >
            {/* Colored Header for Class */}
            <div className={`${cls.color} text-white text-center py-4 text-2xl font-bold`}>
              {cls.name}
            </div>

            <div className="p-6">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-4 flex justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Monthly Fee</p>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-1">Yearly Fee</p>
                  </div>
                  <div className="flex-1 min-w-0 text-right">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">RS:{cls.monthly}</p>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-1">RS:{cls.yearly}</p>
                  </div>
                </li>
              </ul>

              {/* Centered Pay Now Button */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={handlePayNow}
                  className="bg-[#2a9b42] text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeeVoucher