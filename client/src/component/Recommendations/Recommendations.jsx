import React from 'react';

const RecommendationButton = ({recommendation, primary}) => {
  return (
    <div className={`${primary ? "bg-white text-black" : "bg-[#ffffff1b] text-white"} rounded-lg py-2 px-4`}>
      <h1 className='text-xl font-medium'>{recommendation}</h1>
    </div>
  );
}
const Recommendations = () => {
  const recommendations = [ 1, 2, 3, 4, 5, 6];
  return (
    <div className='flex sm:m-12 m-2 gap-4 sm:overflow-hidden overflow-x-scroll homecontents'>
      <RecommendationButton recommendation='All' primary/>
      {recommendations.map((recommendation, index) => <RecommendationButton key={index} recommendation='Recommendation' />)}
    </div>
  )
}

export default Recommendations;