CardIcon Components


function IconCard({ icon, alt, title, description }) {
  // const { icon, title, description } = props;
  return (
    <div className="card">
      <img src={icon} alt={alt} />
      <h4 className="card-title"> {title} </h4>
      <p> {description} </p>
    </div>
  );
}

export default IconCard;


and here the App.jsx

import "./styles.css";
import logo from "./assets/ironhack-logo-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import menu from "./assets/menu-top-xs.png";
import IconCard from "./components/IconCard";

const arr = [
  {
    icon: icon1,
    alt: "illustration",
    title: "Declarative",
    description: "React makes it painless to create interactive UIs."
  },
  {
    icon: icon2,
    alt: "illustration",
    title: "Components",
    description: "Build encapsulated components that manage their state."
  }
];

function App() {
  return (
    <div className="App">
      <main>
        <nav>
          <img src={logo} alt="logo" />
          <img src={menu} className="toggle" alt="menu" />
        </nav>
        <section className="content">
          <div>
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become a
              Ninja Developer.
            </p>
            <button>Awesome!</button>
          </div>
        </section>
      </main>
      <section className="card-panel">
        {arr.map(({ title, icon, alt, description }, index) => (
          <IconCard
            key={index + title}
            icon={icon}
            alt={alt}
            title={title}
            description={description}
          />
        ))}
        {/* {arr.map((element, index) => {
          return (
            <IconCard
              key={index + element.title}
              icon={element.icon}
              alt={element.alt}
              title={element.title}
              description={element.description}
            />
          );
        })} */}
        {/* <div className="card">
          <img src={icon1} alt="illustration" />
          <h4 className="card-title">Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </div> */}
        {/* <div className="card">
          <img src={icon2} alt="illustration" />
          <h4 className="card-title">Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div> */}
        <div className="card">
          {/* OR <img src="/images/icon3.png" alt="" /> */}
          <img src={icon3} alt="illustration" />
          <h4 className="card-title">Single-Way</h4>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="card">
          {/* OR <img src="/images/icon4.png" alt="" /> */}
          <img src={icon4} alt="illustration" />
          <h4 className="card-title">JSX</h4>
          <p>Statically-typed, design to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

// Export the component using the ES6 export syntax
export default App;
