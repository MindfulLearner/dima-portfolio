import React, { useState, useEffect } from 'react';
import CellphoneResponsivePage from '../CellphoneResponsive/ResponsiveCellphonePage'
import Header from '../../Header'
import Footer from '../../Footer'
import MainContainer from './components/Maincontainer';

const ResponsivePage: React.FC = () => {
    const [isCellphone, setIsCellphone] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsCellphone(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            {isCellphone ? 
            <>
            <Header />
            <CellphoneResponsivePage />
            <Footer />
            </>
            : <>
                <Header />
                <MainContainer />
                <Footer />
            </>}
        </div>
    );
};

export default ResponsivePage;