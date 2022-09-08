import React from 'react'
import CreateHistory from '../../components/CreateHistory/CreateHistory';
import CreatePost from '../../components/CreatePost/CreatePost';
import FindingFriedsComponents from '../../components/FindingFriedsComponents/FindingFriedsComponents';

const Main = () => {
  return (
    <section className='m-auto'>
      <CreateHistory />
      <CreatePost />
      <FindingFriedsComponents />
    </section>
  )
}

export default Main;