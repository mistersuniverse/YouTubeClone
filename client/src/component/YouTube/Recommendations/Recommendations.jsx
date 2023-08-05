import React from 'react';

const RecommendationButton = ({recommendation, primary}) => {
  return (
    <div className={`${primary ? "bg-white text-black" : "bg-[#ffffff1b] text-white"} rounded-lg sm:py-2 py-1 sm:px-4 px-2 mt-2 sm:mt-0`}>
      <h1 className='sm:text-sm text-xs font-medium'>{recommendation}</h1>
    </div>
  );
}
const Recommendations = ({setActiveSideBar, activeSideBar}) => {
  const recommendations = [ 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className='flex sm:my-8 sm:mx-2 m-2 sm:gap-2 gap-1 sm:overflow-hidden overflow-x-scroll homecontents'>
      <button className='rounded-lg sm:py-2 py-1 sm:px-4 px-2 mt-2 sm:mt-0 sm:text-sm text-xs font-medium bg-red-500 hover:bg-red-800 sm:hidden' onClick={() => setActiveSideBar(!activeSideBar)}>S</button>
      <RecommendationButton recommendation='All' primary/>
      {recommendations.map((recommendation, index) => <RecommendationButton key={index} recommendation='Recommendation' />)}
    </div>
  )
}

export default Recommendations;