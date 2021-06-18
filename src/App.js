import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar, Skill, About, Footer, Profile } from "./components";

// index.scss

// Import bootstrap, anything before this gets overridden by _reboot
// @import '../node_modules/bootstrap/scss/bootstrap';
// Overrides go here
// a {}

function App() {
  return (
    <>
      <div className="Container">
        <NavBar />
        <Profile />
        <About />
        <Skill />
        <Footer />
      </div>
    </>
  );
}

export default App;
