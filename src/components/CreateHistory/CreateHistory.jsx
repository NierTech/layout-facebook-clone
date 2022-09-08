import React from 'react'
import { PlusOutlined } from "@ant-design/icons";
const CreateHistory = () => {
  return (
    <div className="flex justify-start items-center shadow-lg rounded-lg hover:bg-gray-200 transition p-2 px-20 gap-4">
    {/* Create a window to add in other history */}
      <div className='bg-blue-100 p-2 rounded-full'>
        <a href='/'>
          <PlusOutlined className='flex  text-blue-700 text-3xl'/>
        </a>
      </div>

      <div>
        <h1 className='font-questrial text-2xl font-bold'>Create your history</h1>
        <p className='font-questrial text-slate-500'>Forward your history and commit anymore</p>
      </div>

    </div>
  )
}

export default CreateHistory