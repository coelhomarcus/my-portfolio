import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import Head from "../Head/Head";
import Button from "../Components/Button/Button";
import Text from "../Components/Text/Text";

const Contact = () => {
  return (
    <div className="main">
      <Head title="Contato" />
      <Text h1="Fale Comigo!" />
      <Text
        pArray={[
          "Eu adoro conhecer novas pessoas, então se sinta livre para falar comigo!",
          "Clique em uma dessas plataformas para me contatar:",
        ]}
      />
      <div className="flexRow">
        <Button
          href="https://www.linkedin.com/in/coelhomarcus"
          title="LinkedIn"
        >
          <FaLinkedin />
        </Button>
        <Button
          href="mailto:marcusrangelcoelho@gmail.com?subject=Assunto&body=Olá!"
          title="Email"
        >
          <MdEmail />
        </Button>
        <Button href="https://github.com/coelhomarcus" title="GitHub">
          <FaGithub />
        </Button>
        <Button
          href="https://www.instagram.com/marcusrange1/"
          title="Instagram"
        >
          <FaInstagram />
        </Button>
      </div>
    </div>
  );
};

export default Contact;
