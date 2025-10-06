import Flex from "../components/Flex";
import Facebook from "../components/icons/Facebook";
import Linkedin from "../components/icons/Linkedin";

export default function Footer() {
  return (
    <>
      <div className="space-section"></div>
      <footer className="text-gray">
        <div className="footer_container">
          <div>
            Design par{" "}
            <a className="btn-link" href="#">
              @blaiseuiux
            </a>{" "}
            - Intégration et développement{" "}
            <a className="btn-link" href="#">
              @blaisebouda
            </a>
          </div>
          <Flex>
            <Linkedin />
            <Facebook />
          </Flex>
        </div>
      </footer>
    </>
  );
}
