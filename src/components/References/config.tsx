import hermesPicture from "../../assets/hermes-picture.jpeg";
import carlosPicture from "../../assets/carlos-picture.jpeg";
import florenciaPicture from "../../assets/florencia-picture.jpeg";
import { ReactNode } from "react";

interface IReferences {
  name: string;
  role: string;
  picture: string;
  linkedIn: string;
  reference: ReactNode;
}

export const LinkedInReferences: Array<IReferences> = [
  {
    name: "Carlos Miquelena Castro",
    role: "Lead Front End Dev",
    picture: carlosPicture,
    linkedIn: "https://www.linkedin.com/in/carlos-miquilena-castro-354359127/",

    reference: (
      <>
        <span>
          Puedo dar fe de la valía de Alejandro como desarrollador front-end con
          experiencia en React. Durante nuestro tiempo juntos en Libro de Pases,
          he tenido la oportunidad de trabajar con él en varios proyectos.
        </span>

        <span>
          Ale demuestra un sólido conocimiento en el desarrollo de aplicaciones
          web utilizando React. Su capacidad para resolver problemas es evidente
          en su trabajo diario. Además, se integra bien en el equipo, lo que
          facilita la coordinación en proyectos conjuntos. En general, Ale es un
          profesional competente y confiable en el ámbito del desarrollo
          front-end. Estoy seguro de que su experiencia y habilidades serían
          valiosas para cualquier equipo de desarrollo!
        </span>
      </>
    ),
  },
  {
    name: "Hermes Cortes Muñoz",
    role: "QA Engineer",
    picture: hermesPicture,
    linkedIn: "https://www.linkedin.com/in/hermes-cortes/",
    reference: (
      <>
        <span>
          Alejandro siempre era proactivo, en el equipo de front-end proponía y
          sugería cambios pertinentes en la aplicación web.
        </span>

        <span>
          Así mismo al trabajar con el siempre buscaba el tiempo para que
          revisaramos los puntos pendientes y no quedara ninguna duda de ninguna
          parte.
        </span>

        <span>Lo recomiendo ampliamente.</span>
      </>
    ),
  },

  {
    name: "Florencia Denise Fried",
    role: "Developer Lead",
    picture: florenciaPicture,
    linkedIn: "https://www.linkedin.com/in/florencia-denise-fried-247b31193/",
    reference: (
      <>
        <span>
          En el tiempo que compartimos juntos en LIBRODEPASES alejandro demostró
          ser capaz de: resolver los problemas que surgían en el día a día,
          colaborar con otros miembros del equipo e intra equipos en pos de
          búscar una solución a un problema o mejorar procesos, capacitarse y
          estar abierto a mejorar continuamente sus conocimientos en desarrollo
          y calidad de código.
        </span>
        <span>
          Si estas buscando un candidato que pueda integrarse bien a un equipo y
          entregar desarrollos de cálidad, Ale es la persona adecuada!
        </span>
      </>
    ),
  },
];
