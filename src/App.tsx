
import { useState, useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";
import { Navbar } from "./components/layout/Navbar";
import { SmoothScroll } from "./components/layout/SmoothScroll";
import Home from "./pages/Home";

// Lazy load other pages
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Engineering = lazy(() => import("./pages/Engineering"));
const Industries = lazy(() => import("./pages/Industries"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

const queryClient = new QueryClient();

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const loaded = sessionStorage.getItem("hasLoadedBefore");
    if (loaded) {
      setShowLoading(false);
      setHasLoaded(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("hasLoadedBefore", "true");
    setShowLoading(false);
    setHasLoaded(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SmoothScroll>
          <Toaster />
          <Sonner />
          {showLoading && !hasLoaded && (
            <LoadingScreen onComplete={handleLoadingComplete} />
          )}
          <BrowserRouter basename="/sangam_fasteners">
            <ScrollToTop />
            <Navbar />
            <BackToTop />
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/engineering" element={<Engineering />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </SmoothScroll>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
