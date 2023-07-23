

import { Footer } from "../Footer";
import { Header } from "../header";

//O children é uma PROP especial, que recebe um valor que é passado no interior da tag do componente 
export const DefaultTemplate = ({ children }) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>        
    );
};