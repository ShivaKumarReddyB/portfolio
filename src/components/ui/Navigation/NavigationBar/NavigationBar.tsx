"use client";
import React from 'react';
import NavButton from '../NavigationBtn/NavButton';
import { useDeviceType } from '@/hooks/useDeviceType';
import "./Nav.css";

const NavigationBar = () => {
  const  {isMobile, isDesktop, isTablet } = useDeviceType();

  const navButtons = [
    { label: "Home", iconSrc: "/images/home.png", onClick: () => console.log("Home clicked"), isMobile: false, isTablet:true, isDesktop: true },
    { label: "Profile", iconSrc: "/images/profile-icon.png", onClick: () => console.log("Home clicked"), isMobile: true, isTablet:false, isDesktop: false },
    { label: "Experience", iconSrc: "/images/Terminal-icon.png", onClick: () => console.log("Experience clicked"), isMobile: true, isTablet:true, isDesktop: true  },
    { label: "Projects", iconSrc: "/images/vs-icon.png", onClick: () => console.log("Projects clicked") ,isMobile: true, isTablet:true, isDesktop: true },
    { label: "Contact", iconSrc: "/images/contact-icon.png", onClick: () => console.log("Contact clicked"),isMobile: false, isTablet:true, isDesktop: true  },
    { label: "Game", iconSrc: "/images/game-icon.png", onClick: () => console.log("Game clicked"),isMobile: false, isTablet:true, isDesktop: true  },
    { label: "Download", iconSrc: "/images/download-icon.png", onClick: () => console.log("Download clicked"),isMobile: false, isTablet:true, isDesktop: true  },
  ];
  const renderButton =()=> {
    if(isMobile){
      return navButtons.filter((button) => button.isMobile).map((button, index) => (
        <NavButton
          key={index}
          label={button.label}
          iconSrc={button.iconSrc}
          onClick={button.onClick}
        />
      ))
    }else if(isTablet || isDesktop){
      return navButtons.filter((button) => button.isTablet || button.isDesktop).map((button, index) => (
        <NavButton
          key={index}
          label={button.label}
          iconSrc={button.iconSrc}
          onClick={button.onClick}
        />
      ))
    }
  }

  return (
    <div className="main-nav-bar">
      {renderButton()}
    </div>
  );
};

export default NavigationBar;