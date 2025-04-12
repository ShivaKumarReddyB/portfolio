"use client";
import React from 'react';
import './NavButton.css';
import Image from 'next/image';

type NavButtonProps = {
  label: string;
  iconSrc: string;
  onClick: () => void;
  disabled?: boolean;
};


const NavButton: React.FC<NavButtonProps> = ({ label, iconSrc, onClick }) => {
  return (
    <div className="nav-button" onClick={onClick} role="button" tabIndex={0}>
     <Image
        src={iconSrc}
        alt={label}
       width={100}
       height={100}
        className="nav-button-icon"
      />
    </div>
  );
};

export default NavButton;