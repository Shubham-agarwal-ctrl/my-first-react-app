import { NavBar, Skill, About, Footer, Profile } from "./components";

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
