import Stack from "../components/Stack";
import profileImg from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero_container">
        <Stack gap="1em" direction="column">
          <p className="unbounded text-gray">Welcome 👋 je suis</p>
          <h1 className="unbounded">Blaise Bouda</h1>
          <p className="desc">
            Développeur Fullstack <span>+5 ans</span> d’expérience et avec
            <span>+10</span> projects livrés.
          </p>
        </Stack>
        <div className="igmx">
          <img src={profileImg} alt="profile" width="200" />
        </div>
      </div>
    </section>
  );
}
