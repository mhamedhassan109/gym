import Header from "./componens/Header/Header";
import Hero from "./componens/Hero/Hero";
import Prodect from "./componens/Prodect/Prodect";
import Testmonlis from "./componens/Testmonlis/Testmonlis";
import Contact from "./componens/contact us/Contact";
import Blog from "./componens/Blog/Blog";
import Footer from "./componens/Footer/Footer";


function App() {
  return (
    <>
      <div className="contener" id="contener">
        <Header />
        <Hero />
        <Prodect />
        <Testmonlis />
        <Contact />
        <Blog />
        <Footer />

      </div >


    </>
  );
}

export default App;
