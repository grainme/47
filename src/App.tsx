("use client");
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./sections/Header";
import Background from "./sections/Background";
import Footer from "./sections/Footer";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./custom/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="">
        <Header />
        <Background />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
