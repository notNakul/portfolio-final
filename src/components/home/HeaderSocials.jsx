import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev,FaInstagram ,FaLeetC} from 'react-icons/fa';
import { SiHashnode,SiLeetcode } from 'react-icons/si'
import leet from '../../assets/leet.svg';



const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://www.github.com/notNakul' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://leetcode.com/user2399f/' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiLeetcode />
                {/* <img src={leet} alt="" className='home__img' width='200' /> */}
            </a>

            <a href='https://dev.to/notnakul' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a>

            <a href='https://www.linkedin.com/in/nakul-gehlaut/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.instagram.com/_nakul_0412/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram />
            </a>

            <a href='https://www.twitter.com/GehlautNakul' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
