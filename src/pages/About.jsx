import React from "react";
import Navbar from "../components/Navbar";
import { Instagram, Whatsapp } from "react-bootstrap-icons";
import { Mail } from "lucide-react";
import Team from "./aboutTeam/Team";

const About = (props) => {
  

  return (
    <div className="px-10 mt-5">
      <div>
        <h1 className="text-3xl"></h1>
      </div>
      <div>
        <h1 className="text-3xl flex justify-center">Our Story </h1>
        <p className="pt-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          rem voluptatem facere laborum, ipsum libero dolorum neque in
          praesentium? Sunt, numquam quidem! Esse facilis iure nam, modi maxime
          saepe natus consequuntur animi eligendi eius fuga quo autem beatae
          quas ut ex vero magnam alias. Ratione harum voluptatum, laudantium aut
          sequi voluptatibus distinctio officia delectus illum, eveniet earum
          veniam nemo saepe ullam maiores unde inventore iure! Amet dignissimos
          fugit maiores possimus aliquid ut sapiente harum excepturi illum a
          doloremque consequuntur dolore dolores dolorum ipsum, placeat at!
          Magnam, perspiciatis, quidem sit natus eaque magni cupiditate esse
          suscipit fugiat maiores dolore itaque non.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-3xl mb-5">Our Values</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus id
          consequuntur ducimus error consequatur rerum! Quo ipsam neque dolore
          reiciendis. Error ea rerum sapiente incidunt, aperiam ut laborum
          cupiditate accusamus nobis quos deserunt ducimus harum deleniti dolor
          rem debitis alias tenetur quisquam dolores neque ipsa veritatis
          suscipit inventore! Vero ad veritatis iste eaque minima, at
          reprehenderit esse recusandae dignissimos, a repellendus sint quos, ex
          nihil exercitationem. Placeat fugit id officiis suscipit? Fuga maxime
          amet, beatae eum culpa quisquam. Odio eius esse veniam voluptatibus
          tenetur rem corrupti, distinctio alias quo asperiores quibusdam
          facilis unde dicta aperiam labore? Accusamus porro voluptas id
          perferendis tempora minus ipsum sed sapiente sit fugit eaque quisquam
          doloremque praesentium quibusdam unde laudantium cumque saepe,
          accusantium reprehenderit facilis repudiandae quod. Iusto labore hic
          reiciendis soluta quia laborum voluptatibus omnis voluptates, dolorum
          ea ab reprehenderit dolorem, nihil, blanditiis ad. Iure repellendus
          voluptate sed facere veritatis voluptatem odio laborum quae!
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-3xl flex justify-center mb-10">Meet Our Team</h1>
        <div className="grid grid-cols-5">
          {props.teamMembers.map(function(elem) {
          return <Team img={elem.img} Name={elem.Name} Role={elem.Role} desc={elem.desc} />
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
