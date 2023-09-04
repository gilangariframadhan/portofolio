import Body from '@/components/body';
import Header from '../components/header';
import React, { useState, useEffect } from 'react';
import Profile from '@/components/profile';
import Contact from '@/components/contact'


const Home = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const starWidth = 25;
  const starHeight = 25;

  useEffect(() => {
    const generateStars = (num: number) => {
      let starsArray = [];
      for (let i = 0; i < num; i++) {
        const style = {
          top: `${Math.random() * (document.documentElement.clientHeight - starHeight)}px`,
          left: `${Math.random() * (document.documentElement.clientWidth - starWidth)}px`
        };
        starsArray.push(<div className="star" style={style} key={i} />);
      }
      return starsArray;
    };

    const adjustStars = () => {
      const numStars = window.innerWidth < 768 ? 50 : 70;
      setStars(generateStars(numStars));
    };

    adjustStars();

    window.addEventListener('resize', adjustStars);

    return () => {
      window.removeEventListener('resize', adjustStars);
    };
  }, []);

  return (
    <div>
      <Header />
      <Body />
      {stars}
      <Profile id='profile' />
      <Contact id='contact' />
    </div>
  );
}

export default Home;