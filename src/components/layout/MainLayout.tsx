"use client";
import React from "react";
import NavigationBar from "../ui/Navigation/NavigationBar/NavigationBar";
import "./MainLayout.scss";
import { Summary } from "@/components/sections/Summary/Summary";

const MainLayout: React.FC = () => {
  return (
    <div className="main-screen">
      <NavigationBar />
      <Summary />
    </div>
  );
};

export default MainLayout;
