import Flex from "../components/Flex";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <header>
        <div></div>
        <Flex center>
          <a className="btn-link" href="#contributions">
            Contributions
          </a>
          <button className="cta-btn">Me contacter</button>
        </Flex>
      </header>

      <div className="hero_container">
        <Flex direction="column">
          <p className="unbounded text-gray">Welcome 👋 je suis</p>
          <h1 className="unbounded">Blaise Bouda</h1>
          <p className="desc text-lg">
            Développeur Fullstack <span>+5 ans</span> d’expérience et avec{" "}
            <span>+10</span> projects livrés.
          </p>
        </Flex>
        <div className="igmx">
          <img src={profileImg} alt="profile" width="200" />
        </div>
      </div>
    </div>
  );
}
