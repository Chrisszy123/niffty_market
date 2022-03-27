import React from 'react';
import './header.css'
import image  from '../../assets/NFT_Hero_3 1.png'
import {IoIosSearch } from 'react-icons/io'
import {FaBitcoin} from 'react-icons/fa'
import {FaEthereum} from 'react-icons/fa'

function Header() {

  return (
      <section className='container header_container'>
          <div className='nft_image'>
            <img src={image} alt='' className='nft_image-pic' />
          </div>
          <div className='header_text'>
            <div className='header_main_text'>
                <h2>Discover the latest Nft in the market</h2>
            </div>
            <div className='search'>
                <span className='search_span'> 
                    <IoIosSearch  className='search_icon'/> 
                    <input placeholder='search by creator or collectible' type='text' className='search_input'/> 
                </span>
                <button className='btn btn-primary'>search</button>
                <button className='btn btn-primary full'>search</button>
            </div>
           
            <div className='exchange'>
                <h5>Live exchange rates</h5>
                <div className='exchange_item'>
                    <div className='exchange_item-crypto'>
                        <FaBitcoin 
                            className='crypto_logo' 
                            color='rgba(249, 170, 75, 1)' 
                        />
                        <div className='crypto_symbol'>
                            <span><h5 className='crypto_pair'>BTC/NAFF</h5></span>
                            <span><h5 className='crypto_value'>0.000124</h5></span>
                        </div>
                    </div>
                    <div className='exchange_item-crypto'>
                        <FaEthereum className='crypto_logo'  
                            color='rgba(99, 116, 195, 1)'
                        />
                        <div className='crypto_symbol'>
                            <span><h5 className='crypto_pair'>ETH/NAFF</h5></span>
                            <span><h5 className='crypto_value'>0.003355</h5></span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </section>
  );
}

export default Header;
