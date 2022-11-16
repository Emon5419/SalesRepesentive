import React from 'react';
import './Banner.css';
import jackMa from '../../images/jackMa.jpg';

const Banner = () => {
   return (
      <div className='div1'>
         <div className='div2'>
            <div className='div3'>
               <img className='newImg' src={jackMa} alt="" />
            </div>
            <div className='div4'>
               <h1>Jack <span>Ma</span></h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fugit! Cum quos beatae quasi est nobis <br />
                  voluptatibus voluptatum eos esse! Exercitationem perferendis dignissimos possimus veniam recusandae. <br /> Veritatis aut vero accusantium fugit quaerat dolore corrupti aliquid nisi, provident autem nostrum <br /> officia minus natus laudantium laborum repellat maxime culpa maiores doloremque adipisci?</p>
               <button type="submit">Create New Vendor</button>
            </div>
         </div>
      </div>
   );
};

export default Banner;