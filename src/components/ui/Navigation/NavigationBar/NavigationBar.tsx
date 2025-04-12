"use client";
import React from 'react';
import NavButton from '../NavigationBtn/NavButton';
import "./Nav.css";

const NavigationBar = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 480;

  const navButtons = [
    { label: "Home", iconSrc: "/images/home.png", onClick: () => console.log("Home clicked") },
    { label: "Experience", iconSrc: "/images/Terminal-icon.png", onClick: () => console.log("Experience clicked") },
    { label: "Projects", iconSrc: "/images/vs-icon.png", onClick: () => console.log("Projects clicked") },
    { label: "Contact", iconSrc: "/images/contact-icon.png", onClick: () => console.log("Contact clicked") },
    { label: "Game", iconSrc: "/images/game-icon.png", onClick: () => console.log("Game clicked") },
    { label: "Download", iconSrc: "/images/download-icon.png", onClick: () => console.log("Download clicked") },
  ];

  return (
    <div className="main-nav-bar">
      {navButtons.slice(0, isMobile ? 4 : navButtons.length).map((button, index) => (
        <NavButton
          key={index}
          label={button.label}
          iconSrc={button.iconSrc}
          onClick={button.onClick}
        />
      ))}
    </div>
  );
};

export default NavigationBar;