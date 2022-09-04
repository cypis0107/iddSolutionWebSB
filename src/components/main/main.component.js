import Home from "../home/home.component";
import About from "../about/about.component";
import Services from "../services/services.component";
import References from "../references/references.component";
import ContactUs from "../contact/contact.componente";
import Copyright from "../copyright/copyright.component";


const Main = () => {

    return (
        <div>
            <Home />
            <Services />
            <About />
            <References />
            <ContactUs />
            <Copyright />
        </div>
    );
}

export default Main;