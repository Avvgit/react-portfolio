import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {TbBrandTwitter} from 'react-icons/tb';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/alejandroverval/' target="_blank"><BsLinkedin /></a>
      <a href='https://github.com/Avvgit' target="_blank"><FaGithub/></a>
      <a href='https://twitter.com/A_VerVal' target="_blank"><TbBrandTwitter/></a>
    </div>
  )
}

export default HeaderSocials;