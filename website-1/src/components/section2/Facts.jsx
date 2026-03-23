import React from 'react'
import factDatas from '../../assets/factsDatas'

const Facts = () => {
  return (
    <div className="grid md:grid-cols-4 gap-10 py-6">

      {factDatas.map((data) => (
        <div key={data.id} className="text-center">

          <h3 className="text-3xl font-bold text-gray-800">
            {data.Number}
          </h3>

          <p className="text-gray-500 mt-2">
            {data.Description}
          </p>

        </div>
      ))}

    </div>
  )
}

export default Facts
