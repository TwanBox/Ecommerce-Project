import React from 'react';
import Product from './Product';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__banner"
        src="../30880_School_mhp-header.jpg"
        alt="banner"
      />
      <Product
        id="3443589534543ID"
        image="https://media.s-bol.com/oVVJp84lP9vj/168x168.jpg"
        brand="Apple"
        name="Apple AirPods 2 - Niet draadloze oplaadcase - Wit"
        specs="Draadloos | Geschikt voor Apple (iOS) | Met afstandsbediening | Met microfoon | Met Lightning aansluiting"
        rating="⭐⭐⭐⭐⭐"
        ratingCount={687}
        price={139}
      />
      <Product
        id="23423456786543ID"
        image="https://media.s-bol.com/XQQoEO5DX8Ng/134x210.jpg"
        brand="Apple"
        name="Apple EarPods - met lightning connector - wit"
        specs="Geschikt voor Apple (iOS) | Met afstandsbediening | Met microfoon | Met Lightning aansluiting"
        rating="⭐⭐⭐⭐"
        ratingCount={438}
        price={20}
      />
      <Product
        id="4357865467833ID"
        image="https://media.s-bol.com/VEEjXjBBm19/137x210.jpg"
        brand="Belkin"
        name="Belkin Mixit Apple Lightning naar USB-C kabel - 1.2m - Zwart"
        rating="⭐⭐⭐⭐⭐"
        ratingCount="45"
        price={23.99}
      />
      <Product
        id="23423423467543ID"
        image="https://media.s-bol.com/BBvAqRK8qZrn/168x196.jpg"
        brand="Apple"
        name="Apple iPad (2019) - 10.2 inch - WiFi - 32GB - Spacegrijs"
        spacs="iOS 13 | 10.2 inch | 32 GB geheugen | 2 jaar fabrieksgarantie"
        rating="⭐⭐⭐⭐⭐"
        ratingCount={147}
        price={365}
      />
    </div>
  );
};

export default Home;
