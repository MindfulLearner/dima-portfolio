import React from 'react';
import Header from '../../Header'
import Footer from '../../Footer'
import MainContainer from './components/Maincontainer';

const ResponsiveLaptopPage: React.FC = () => {
    return (
        <div>
            <Header />
            <MainContainer />
            <Footer />
        </div>
    );
};

export default ResponsiveLaptopPage;