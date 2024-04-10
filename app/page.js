"use client";

import styles from "./page.module.css";
import Header from "@/components/layout/header";
import FeatureSection from "@/components/feature-section";
import AboutSection from "@/components/about-section/about-section";
import ReasonSection from "@/components/reason-section/reason-section";
import SliderSection from "@/components/slider-section";
import ContactForm from "@/components/contact/contact-form";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const sliderRef = useRef(null);
  const reasonRef = useRef(null);
  const featureRef = useRef(null);
  const contactRef = useRef(null);
  const [fixed, setFixed] = useState(false);
  const [aboutHidden, setAboutHidden] = useState(true);
  const [sliderHidden, setSliderHidden] = useState(true);
  const [reasonHidden, setReasonHidden] = useState(true);
  const [featureHidden, setFeatureHidden] = useState(true);
  const [contactHidden, setContactHidden] = useState(true);

  useEffect(() => {
    const stickyNav = function (entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) setFixed(true);
      else setFixed(false);
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
    });

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    const revealSection = function (entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      if (entry.target === aboutRef.current) {
        setAboutHidden(false);
        sectionObserver.unobserve(aboutRef.current);
      } else if (entry.target === sliderRef.current) {
        setSliderHidden(false);
        sectionObserver.unobserve(sliderRef.current);
      } else if (entry.target === reasonRef.current) {
        setReasonHidden(false);
        sectionObserver.unobserve(reasonRef.current);
      } else if (entry.target === featureRef.current) {
        setFeatureHidden(false);
        sectionObserver.unobserve(featureRef.current);
      } else {
        setContactHidden(false);
        sectionObserver.unobserve(contactRef.current);
      }
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.3,
    });

    if (
      aboutRef.current &&
      sliderRef.current &&
      reasonRef.current &&
      featureRef.current &&
      contactRef.current
    ) {
      sectionObserver.observe(aboutRef.current);
      sectionObserver.observe(sliderRef.current);
      sectionObserver.observe(reasonRef.current);
      sectionObserver.observe(featureRef.current);
      sectionObserver.observe(contactRef.current);
    }
  }, []);

  return (
    <main className={styles.main}>
      <Navbar fixed={fixed} />
      <Header innerRef={headerRef} />
      <AboutSection innerRef={aboutRef} hidden={aboutHidden} />
      <SliderSection innerRef={sliderRef} hidden={sliderHidden} />
      <ReasonSection innerRef={reasonRef} hidden={reasonHidden} />
      <FeatureSection innerRef={featureRef} hidden={featureHidden} />
      <ContactForm innerRef={contactRef} hidden={contactHidden} />
    </main>
  );
}
