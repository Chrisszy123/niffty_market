import React from 'react';
import './header.css'
import image  from '../../NFT_Hero_3 1.png'
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
                <span> 
                    <IoIosSearch  className='search_icon'/> 
                    <input placeholder='search by creator or collectible' type='text' className='search_input'/>
                </span>
                <button className='btn btn-primary'>search</button>
            </div>
            <div className='exchange'>
                <h5>Live exchange rates</h5>
                <div className='exchange_item'>
                    <div className='exchange_item-crypto'>
                        <FaBitcoin className='crypto_logo' />
                        <div className='crypto_symbol'>
                            <span><h5>BTC/NFF</h5></span>
                            <span><h5>0.000124</h5></span>
                        </div>
                    </div>
                    <div className='exchange_item-crypto'>
                   <FaEthereum className='crypto_logo' />
                        <div className='crypto_symbol'>
                            <span><h5>ETH/NFF</h5></span>
                            <span><h5>0.003355</h5></span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </section>
  );
}

export default Header;
