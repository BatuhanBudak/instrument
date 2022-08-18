import React from 'react'
import Image from 'next/image';
import instagram from '../public/icons/instagram.svg';
import twitter from '../public/icons/twitter.svg';
import linkedin from '../public/icons/linkedin.svg';


export default function Footer() {
  return (
    <footer className='footer'>
<ul className='footer-first-links'>
    <li><a href="">HOME</a> </li>
    <li><a href="">WHAT WE DO</a></li>
    <li><a href="">WORK</a></li>
    <li><a href="">WHO WE ARE</a></li>
    <li><a href="">ARTICLES</a></li>
</ul>
<ul className='footer-second-links'>
    <li><a href="">BEING HERE</a></li>
    <li><a href="">CAREERS</a></li>
    <li><a href="">CONTACT</a></li>
    <li><a href="">PRIVACY</a></li>
</ul>
<ul className='footer-third-links'>
    <li><a href="">NEWSLETTER</a></li>
   <div className='third-links-icons'>
   <li><a href=""><Image src={instagram} alt = '' /></a></li>
    <li><a href=""></a><Image src={twitter} alt = ''  /></li>
    <li><a href=""><Image src={linkedin} alt = '' /></a></li>
   </div>
</ul>
    </footer>
  )
}
