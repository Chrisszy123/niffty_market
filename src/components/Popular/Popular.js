import React from 'react';
import './popular.css'
import img from '../../assets/image 11(1).png'
import img2 from '../../assets/image 11(2).png'
import img3 from '../../assets/image 11(3).png'
import img4 from '../../assets/image 11(4).png'

import card_pic from '../../assets/image 12.png'
import card_pic1 from '../../assets/image 12(1).png'
import card_pic2 from '../../assets/image 12(2).png'
import card_pic3 from '../../assets/image 12(3).png'

import {FaEthereum} from 'react-icons/fa'

function Popular() {
  const data = [
    {
      profile_image: img,
      title: "Cryptopunks",
      nft_image: card_pic,
      timer: false,
      nft_name: "crypto mask",
      nft_value: "0.115 ETH"
    },
    {
      profile_image: img2,
      title: "Beeple",
      nft_image: card_pic1,
      timer: true,
      nft_name: "Every Days .. the first",
      nft_value: "0.115 ETH"
    },
    {
      profile_image: img3,
      title: "Crypto Art",
      nft_image: card_pic2,
      timer: false,
      nft_name: "Astro",
      nft_value: "0.115 ETH"
    },
    {
      profile_image: img4,
      title: "Cute Pets",
      nft_image: card_pic3,
      timer: false,
      nft_name: "Creature",
      nft_value: "0.115 ETH"
    },

  ]
  return (
      <section className='container popular_container'>
        <div className='popular_title'>
          <h2>Popular</h2>
          <span className='underline'></span>
        </div>
        
        <div className='popular_items'>
        { data.map((data, i) => (
          <article className='popular_item' key={i}>
          <div className='card_header'>
            <img src={data.profile_image} className='card_profile-image' />
            <h5>{data.title}</h5>
          </div>

          <div className='card_image'>
            <img src={data.nft_image} />
            <div className='timer'>{data.timer}</div>
          </div>
          <div className='popular_footer'>
            <h5>{data.nft_name}</h5>
            <div className='crypto_value'>
              <FaEthereum className='crypto_logo'color='rgba(99, 116, 195, 1)'
              />
              <h5>{data.nft_value}</h5>
            </div>
          </div>
        </article>
        ))}
        </div>
      </section>
  );
}

export default Popular;
