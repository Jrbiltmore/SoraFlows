
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Sitemap from './pages/Sitemap';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
import Testimonials from './pages/Testimonials';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Support from './pages/Support';
import Events from './pages/Events';
import Documentation from './pages/Documentation';
import Roadmap from './pages/Roadmap';
import Partners from './pages/Partners';
import Team from './pages/Team';
import Investors from './pages/Investors';
import Gallery from './pages/Gallery';
import Legal from './pages/Legal';
import Pricing from './pages/Pricing';
import API from './pages/API';
import Changelog from './pages/Changelog';
import ContactSupport from './pages/ContactSupport';
import Media from './pages/Media';
import Tutorials from './pages/Tutorials';
import Tutorial1 from './pages/Tutorial1';
import Tutorial2 from './pages/Tutorial2';
import Community from './pages/Community';
import Resources from './pages/Resources';
import Status from './pages/Status';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/sitemap" component={Sitemap} />
      <Route path="/blog" component={Blog} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/careers" component={Careers} />
      <Route path="/press" component={Press} />
      <Route path="/support" component={Support} />
      <Route path="/events" component={Events} />
      <Route path="/documentation" component={Documentation} />
      <Route path="/roadmap" component={Roadmap} />
      <Route path="/partners" component={Partners} />
      <Route path="/team" component={Team} />
      <Route path="/investors" component={Investors} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/legal" component={Legal} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/api" component={API} />
      <Route path="/changelog" component={Changelog} />
      <Route path="/contact-support" component={ContactSupport} />
      <Route path="/media" component={Media} />
      <Route path="/tutorials" component={Tutorials} />
      <Route path="/tutorials/tutorial1" component={Tutorial1} />
      <Route path="/tutorials/tutorial2" component={Tutorial2} />
      <Route path="/community" component={Community} />
      <Route path="/resources" component={Resources} />
      <Route path="/status" component={Status} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
