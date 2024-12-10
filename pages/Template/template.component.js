import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header.component';
import Footer from './footer.component';
import { Button } from './template.style';

const Template = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/Hotels/SignUp';

  useEffect(() => {
    const mybutton = document.getElementById("myBtn");

    const scrollFunction = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";
        mybutton.style.justifyContent = "center";
        mybutton.style.alignItems = "center";
      } else {
        mybutton.style.display = "none";
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  };

  return (
    <div>
      <section className="side-bar">
        {!hideHeaderFooter && <Header />}
      </section>
      <section className="container">
        <Outlet />
        <Button
            onClick={topFunction}
            id="myBtn"
            title="Go to top"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
            style={{ width: '24px', height: '24px' }} // Set icon size
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
            </svg>
        </Button>
      </section>
      <section>
      {!hideHeaderFooter && <Footer />}
      </section>
    </div>
  );
};

export default Template;
