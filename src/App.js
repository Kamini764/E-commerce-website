import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes,Route} from 'react-router-dom';
import Home from './companants/home/Home';
import Ourstore from './companants/ourstore/Ourstore';
import Contact from './companants/contact/Contact';
import Pagenotfound from './companants/pagenotfound/Pagenotfound';
import Header from './companants/header/Header';
import Footer from './companants/footer/Footer';
import Blogs from './companants/blogs/Blogs';
import Compare from './companants/products/Compare';
import Wishlist from './companants/products/Wishlist';
import Login from './companants/products/Login';
import Signup from './companants/products/Signup';
import Forgotpassword from './companants/products/Forgotpassword';
import Singleblog from './companants/blogs/Singleblog';
import Privacy from './companants/information/Privacy';
import Termsofservices from './companants/information/Termsofservices';
import Refund from './companants/information/Refund';
import Shipping from './companants/information/Shipping';
import Singleproduct from './companants/information/Singleproduct';

function App() {
  return (
    <div>
     <BrowserRouter>
       <Header/>
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="our-store" element={<Ourstore/>} />
       <Route path="blogs" element={<Blogs/>} />
       <Route path="contact-us" element={<Contact/>} />
       <Route path="compare-products" element={<Compare/>} />
       <Route path="wishlist" element={<Wishlist/>} />
       <Route path="login" element={<Login/>} />
       <Route path="cart" element={<Signup/>} />
       <Route path="singleblog" element={<Singleblog/>} />
       <Route path="forgot-password" element={<Forgotpassword/>} />
       <Route path="privacypolicy" element={<Privacy/>} />
       <Route path="refundpolicy" element={<Refund/>} />
       <Route path="shippingpolicy" element={<Shipping/>} />
       <Route path="termsofservices" element={<Termsofservices/>} />
       <Route path="mainproduct" element={<Singleproduct/>} />
       <Route path="*" element={<Pagenotfound/>} />``
       </Routes>
       <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
