import React from 'react';

const RecommendationButton = ({recommendation}) => {
  return (
    <div className='rounded-lg bg-[#ffffff1b] py-2 px-4'>
      <h1 className='text-xl font-medium text-white'>{recommendation}</h1>
    </div>
  );
}
const Recommendations = () => {
  const recommendations = [ 1, 2, 3, 4, 5, 6];
  return (
    <div className='flex m-12 gap-4'>
      <RecommendationButton recommendation='All' />
      {recommendations.map((recommendation) => <RecommendationButton recommendation='Recommendation' />)}
    </div>
  )
}

export default Recommendations;