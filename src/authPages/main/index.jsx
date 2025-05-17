import './style.scss';
import Footer from '../../components/footer';
import Header from '../../authComponents/header';
import Subscription from '../../authComponents/subcription';


export default function MainAuthPage() {
    return (
        <div className="main-auth">
            <Header/>
            <Subscription/>
            <Footer />
        </div>
    );
}

