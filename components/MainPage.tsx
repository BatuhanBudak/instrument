import React from "react";
import Image from "next/image";
import ceo from "../public/ceo.avif";
import ceo2 from "../public/ceo-2.avif";
import eye from "../public/eye.avif";
import eye2 from "../public/eye-2.avif";
import cellphone from "../public/cellphone.avif";
import cellphone2 from "../public/cellphone-2.avif";
import eames from "../public/eames.avif";
import eames2 from "../public/eames-desktop.avif";
import dude from "../public/dude.avif";
import dude2 from "../public/dude-desktop.avif";
import IconFade from "./IconFade";
import useScreenSize from "../hooks/useScreenSize";

export default function MainPage() {
  const windowWidth = useScreenSize();
  const desktopWidth = 800;
  return (
    <main>
      <div className="main-video-container">
        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/428281636?h=be0963aaa9&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Instrument 2021 Reel (Updated Aug 21)"
          ></iframe>
        </div>
      </div>
      <h1 className="main-title">
        We enrich human lives through the thoughtful application of design and
        technology
      </h1>
      <div className="centered-container">
        {windowWidth! < desktopWidth && <Image src={ceo} alt="ceo" />}
        {windowWidth! >= desktopWidth && <Image src={ceo2} alt="ceo" />}
        <h2 className="sub-title">
          It is with great excitement that we announce Kara Place as Instruments
          next CEO.
        </h2>
        <button className="btn">
          <a href="">Read More</a>
        </button>
      </div>
      <div className="centered-container">
        {windowWidth! < desktopWidth && (
          <Image src={eye} alt="eye illustration" />
        )}
        {windowWidth! >= desktopWidth && (
          <Image src={eye2} alt="eye illustration" />
        )}
        <h2 className="sub-title">
          In the summer of 2020, we reported our representation data and
          committed to doing so annually. One year later, we are pleased to
          share an update on our goals, our progress, and the work that still
          needs to be done.
        </h2>
        <button className="btn">
          <a href="">Learn More</a>
        </button>
      </div>
      <div className="centered-container">
        {windowWidth! < desktopWidth && (
          <Image src={cellphone} alt="cellphone" />
        )}
        {windowWidth! >= desktopWidth && (
          <Image src={cellphone2} alt="cellphone" />
        )}
        <h2 className="sub-title">
          As a full-service partner to the world’s most ambitious companies, we
          create transformational change through best-in-class digital products
          and communications.
        </h2>
        <button className="btn">
          <a href="">What we do</a>
        </button>
      </div>
      <div className="centered-container small-gap section-seperator ">
        <h1 className="main-title">
          Explore a few of our most impactful projects
        </h1>
        <button className="btn our-work-btn">
          <a href="">Our work</a>
        </button>
      </div>
      <div className="full-width-container">
        {windowWidth! < desktopWidth && <Image src={eames} alt="eames" />}
        {windowWidth! >= desktopWidth && <Image src={eames2} alt="eames" />}
      </div>
      <div className="centered-container-second small-gap minus-top-margin ">
        <h2 className="sub-title flex-start">Eames Institute </h2>
        <p className="image-caption">
          Ray and Charles Eames laid the foundation for modern design and
          created work that has transcended time. With an aspiration to bring
          the Eameses’ timeless methodologies to a modern audience, the Eames
          Institute enlisted Instrument to co-create a digital platform to
          unveil their vast collection to the world.{" "}
        </p>
      </div>
      <div className="full-width-container">
        {windowWidth! < desktopWidth && <Image src={dude} alt="cellphone" />}
        {windowWidth! >= desktopWidth && <Image src={dude2} alt="cellphone" />}
      </div>
      <div className="centered-container-second small-gap minus-top-margin ">
        <h2 className="sub-title flex-start">
          Dropbox &quot;For All Things Worth Saving&quot;{" "}
        </h2>
        <p className="image-caption">
          To evolve and mature how Dropbox engages with their customers, we
          developed a multi-year brand platform as well as launched its first
          campaign titled &apos;For All Things Worth Saving&apos; — an ecosystem
          of branded experiences aimed to remind people of the inherent value of
          their digital files.
        </p>
      </div>
      <IconFade />
      <div className="centered-container small-gap section-seperator ">
        <h1 className="main-title">We&apos;d love to be your partner</h1>
        <button className="btn our-work-btn ">
          <a href="">Get in touch</a>
        </button>
      </div>
    </main>
  );
}
