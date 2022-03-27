import React, {useState} from 'react';
import './discover.css'

function Discover() {
    const [active, setActive] = useState('1')
    const [cryptoActive, setCryptoActive] = useState('1')

  return (
      <section className='container discover_container'>
          <div className='discover_heading'>
              <div className='discover_title'>
                  <h2>Discover</h2>
                  <span></span>
              </div>
            <div className='discover_heading-switches'>
                <div className='switch_item'>
                    <span id='1' className={active === "1" ? 'active' :''} onClick={() => setActive('1')}>Latest</span>
                    <span id='2'  className={active === "2" ? 'active' :''} onClick={() => setActive('2')}>Cheapest</span>
                    <span id='3'  className={active === "3" ? 'active' :''} onClick={() => setActive('3')}>Highest</span>
                </div>
                <div className='switch_item'>
                    <span id='1' className={cryptoActive === "1" ? 'active' :''} onClick={() => setCryptoActive('1')}>ETH</span>
                    <span id='2'className={cryptoActive === "2" ? 'active' :''} onClick={() => setCryptoActive('2')}>USDT</span>
                </div>
            </div>
          </div>
          <div className='discover_items'>

          </div>
      </section>
  );
}

export default Discover;
