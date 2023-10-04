import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/Header";

import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductChiller from "./pages/ProductChiller";
import ProductDetail from "./pages/ProductDetail";
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import News1 from './pages/News1'
import Contact1 from './pages/Contact1'





function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products/category/2" element={<Product2 />} />
            <Route path="/products/category/1" element={<ProductChiller />} />
            <Route path="/products/category/2" element={<Product2 />} />
            <Route path="/products/category/3" element={<Product3 />} />
            <Route path="/news" element={<News1 />} />  
            <Route path="/contact" element={<Contact1 />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
