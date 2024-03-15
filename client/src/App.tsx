import React from 'react';
import './App.scss';
import {Footer} from "./footer/Footer";
import {Header} from "./header/Header";
import {Home} from "./screens/home/Home";
import {Route, Routes} from "react-router";
import {NotFoundPage} from "./screens/notFoundPage/NotFoundPage";

function App() {
  return (
    <>
        <Header/>
        <main>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </main>
        <Footer/>
    </>
  )
}

export default App;
