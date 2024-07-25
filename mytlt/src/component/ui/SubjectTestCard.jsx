import React from 'react'
import { FaGlobe } from 'react-icons/fa';
import { GoClockFill } from "react-icons/go";
import { FaSortNumericUp } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
const SubjectTestCard = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div>icon</div>
        <div>Name of Mock test</div>
        <ul>
          <li className='flex'><FaGlobe className='mt-1' />Language</li>
          <li className='flex'><IoStar />Rating</li>
          <li className='flex'><FaSortNumericUp />Total Mock Test</li>
          <li className='flex'><GoClockFill />Duration</li>
        </ul>
      </div>
    </div>
  )
}

export default SubjectTestCard
