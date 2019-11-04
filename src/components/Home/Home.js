import React from 'react';
import Aux from '../../common/Hoc/hoc';
import Header from '../../common/Navigation/Header/Header';
import Footer from '../../common/Navigation/Footer/Footer';
import './Home.scss';
const Home = () => {
  return (
    <Aux className="">
      <Header />
      <main>
        <h1>Welcome Home</h1>
      </main>
      <Footer />
    </Aux>
  )
}
export default Home;
