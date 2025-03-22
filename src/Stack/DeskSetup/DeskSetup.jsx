import React from "react";
import Head from "../../Head/Head";
import Text from "../../Components/Text/Text";

const DeskSetup = () => {
  return (
    <div className="main">
      <Head title="PC" />
      <button className="backButton" onClick={() => window.history.back()}>
        ↫ Voltar
      </button>
      <Text h1="Setup" />
      <Text h2="Laptop" p="• MacBook Air M1" />
      <Text
        h2="PC"
        pArray={[
          "• i5 10400f",
          "• RTX 4060",
          "• 24gb RAM",
          "• SSD 500gb &  HD 1tb",
        ]}
      />
      <Text
        h2="Periféricos"
        pArray={[
          "• ASRock Phantom Gaming PG27FF1A",
          "• AOC 27B1HM",
          "• Logitech g435",
          "• Ajazz AJ139 PRO",
          "• JBL Quantum Stream Studio",
        ]}
      />
    </div>
  );
};

export default DeskSetup;
