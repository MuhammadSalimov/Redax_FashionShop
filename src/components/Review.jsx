import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
const Review = () => {
  return (
    <div className=' min-h-screen flex flex-col justify-center lg:px-32 px-5'>
      <h1 className=' text-4xl text-ExtraDarkColor font-semibold text-center mt-24 lg:mt-14'>Feedback Corner </h1>
      <div className='flex flex-col gap-5 items-center xl:flex-row justify-center py-4 my-8'>
      <ReviewCard name="Emily Davis" />
      <ReviewCard name="Aubrey Carter" />
      <ReviewCard name="Madison Mitchell" />
      </div>
    </div>
  )
}

export default Review