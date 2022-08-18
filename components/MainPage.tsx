import React from 'react'
import Image from 'next/image';
import ceo from '../public/ceo.avif';
import eye from '../public/eye.avif';
import cellphone from '../public/cellphone.avif';
import eames from '../public/eames.avif';
import dude from '../public/dude.avif';
import IconFade from './IconFade';

export default function MainPage() {
    return (
        <main>
            <div className='main-video-container'>
                <div className='video-container'
                ><iframe src="https://player.vimeo.com/video/428281636?h=be0963aaa9&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Instrument 2021 Reel (Updated Aug 21)"  ></iframe></div>
            </div>
            <h1 className='main-title'>We enrich human lives through the thoughtful application of design and technology</h1>
            <div className='centered-container'>
                <Image src={ceo} alt='ceo' />
                <h2 className='sub-title'>It is with great excitement that we announce Kara Place as Instruments next CEO.</h2>
                <button className='btn'><a href="">Read More</a></button>
            </div>
            <div className='centered-container'>
                <Image src={eye} alt='illustration' />
                <h2 className='sub-title'>In the summer of 2020, we reported our representation data and committed to doing so annually. One year later, we are pleased to share an update on our goals, our progress, and the work that still needs to be done.</h2>
                <button className='btn'><a href="">Learn More</a></button>
            </div>
            <div className='centered-container'>
                <Image src={cellphone} alt='cellphone' />
                <h2 className='sub-title'>As a full-service partner to the world’s most ambitious companies, we create transformational change through best-in-class digital products and communications.</h2>
                <button className='btn'><a href="">What we do</a></button>
            </div>
            <div className='centered-container small-gap section-seperator '>
                <h1 className='main-title'>Explore a few of our most impactful projects</h1>
                <button className='btn'><a href="">Our work</a></button>
            </div>
            <div className='full-width-container'>
                <Image src={eames} alt='cellphone' />
            </div>
            <div className='centered-container small-gap minus-top-margin '>
                <h2 className='sub-title flex-start'>Eames Institute </h2>
                <p className='image-caption'>Ray and Charles Eames laid the foundation for modern design and created work that has transcended time. With an aspiration to bring the Eameses’ timeless methodologies to a modern audience, the Eames Institute enlisted Instrument to co-create a digital platform to unveil their vast collection to the world. </p>
            </div >
            <div className='full-width-container'>
                <Image src={dude} alt='cellphone' />
            </div>
            <div className='centered-container small-gap minus-top-margin '>
                <h2 className='sub-title flex-start'>Dropbox &quot;For All Things Worth Saving&quot; </h2>
                <p className='image-caption'>To evolve and mature how Dropbox engages with their customers, we developed a multi-year brand platform as well as launched its first campaign titled &apos;For All Things Worth Saving&apos; — an ecosystem of branded experiences aimed to remind people of the inherent value of their digital files.</p>
            </div >
            <IconFade />
            <div className='centered-container small-gap section-seperator '>
                <h1 className='main-title'>We&apos;d love to be your partner</h1>
                <button className='btn'><a href="">Get in touch</a></button>
            </div>
        </main>
    )
}
