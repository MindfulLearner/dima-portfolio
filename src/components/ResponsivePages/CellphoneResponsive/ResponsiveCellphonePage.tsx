import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { NavBarForPanel } from "./components/EditorSection/NavBarForPanel";

const ResponsiveCellphonePage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 overflow-auto">
                <div className="p-4">
                    <NavBarForPanel />
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <h2 className="text-lg font-semibold mb-2">MOBILE</h2>
                        <p>MOBULE</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ResponsiveCellphonePage;