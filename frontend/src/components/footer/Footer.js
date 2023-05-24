
const Footer = () => {
  return (
    <div style={{ background: "#252525", color: "white" }}>
      <div className="p-5 pt-4">

        <p className="fs-1">ABOUT US</p>
        <p className="fs-5 text-">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          sapiente error, repudiandae consequuntur, possimus fugit eius
          doloremque eaque necessitatibus accusamus qui nulla enim dolorum harum
          laudantium vitae, id nesciunt libero! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Excepturi, veritatis accusamus illum
          reiciendis ad est corrupti labore possimus fuga tenetur, obcaecati
          aspernatur quasi quas perferendis corporis! Aut alias impedit
          praesentium!
        </p>

        <div>
          <a href="https://www.instagram.com/accounts/login/">
            <i className="fa-brands fa-instagram me-2 fa-2xl"></i>
          </a>
          <a href="https://id-id.facebook.com/login/device-based/regular/login/?login_attempt=1">
            <i className="fa-brands fa-facebook me-2 fa-2xl"></i>
          </a>
          <a href="https://twitter.com/i/flow/login">
            <i className="fa-brands fa-twitter me-2 fa-2xl"></i>
          </a>
          <a href="https://web.whatsapp.com/">
            <i className="fa-brands fa-whatsapp me-2 fa-2xl"></i>
          </a>
        </div>

      </div>

      <div>

        <p
          className="mb-0 p-2 opacity-50 text-center"
          style={{ background: "black" }}
        >
          copyright 2023 © | Developed by Kelompok 4
        </p>

      </div>
    </div>
  );
};

export default Footer;