import React from 'react'
import { FaGlobe } from 'react-icons/fa';
import { GoClockFill } from "react-icons/go";
import { FaSortNumericUp } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
const SubjectTestCard = () => {
  return (
    <div className="px-5 md:px-20 py-8">
      <div >
        <div className="flex flex-wrap">
        <div>icon</div>
        <div>Name of Mock test</div></div>
        <ul>
          <li className='flex'><FaGlobe className='mt-2 mr-5' />Language</li>
          <li className='flex'><IoStar className='mt-2 mr-5'/>Rating</li>
          <li className='flex'><FaSortNumericUp className='mt-2 mr-5'/>Total Mock Test</li>
          <li className='flex'><GoClockFill className='mt-2 mr-5'/>Duration</li>
          <li className='flex'><FaEdit className='mt-2 mr-5'/>Start Mock Test</li>
        </ul>
        <button className='bg-primary rounded-sm'>Start Attempt</button>
      </div>
    </div>
  )
}

export default SubjectTestCard
