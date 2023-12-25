
import Home from '../Pages/Home/Home';
import AboutMe from '../Pages/AboutMe/AboutMe';
import Skills from '../Pages/Skills/Skills';
import Blog from '../Pages/Blog/Blog';
import Footer from '../Pages/Footer/Footer';



const MainLayout = () => {
    return (
        <div className='min-h-full'>
            <Home />
            <AboutMe />
            <Skills />
            <Blog />
            <Footer />
        </div>
    );
};

export default MainLayout;