import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home"));
const WorldMapPage = lazy(() => import("./pages/WorldMap"));
const UnitedStatesMapPage = lazy(() => import("./pages/UnitedStatesMap"));

const RoutedPages: React.FC = () => (
  <Suspense fallback={<div className="loading-page">Loading... </div>}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/world-map" element={<WorldMapPage />} />
      <Route path="/united-states-map" element={<UnitedStatesMapPage />} />
    </Routes>
  </Suspense>
);

export default RoutedPages;
