import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { lazy } from "react";
import { Layout } from "./components/Layout";
import "./App.css";
import React from "react";
import WorldMap from "./pages/WorldMap";
import Chart from "./pages/Chart";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false },
  },
});
const chartPath = "pages/Chart";

const ChartComponent = lazy(() =>
  import(chartPath).catch(() => {
    return { default: Chart };
  })
);
const WorldMapComponent = lazy(() =>
  import(chartPath).catch(() => {
    return { default: WorldMap };
  })
);
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Routes>
              <Route
                index
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <ChartComponent />
                  </React.Suspense>
                }
              />
              <Route path="/chart" element={<Chart />} />
              <Route
                path="/world-map"
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <WorldMapComponent />
                  </React.Suspense>
                }
              />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
