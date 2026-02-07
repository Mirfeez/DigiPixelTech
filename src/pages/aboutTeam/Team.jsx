import { Instagram, Whatsapp } from "react-bootstrap-icons";
import { Mail } from "lucide-react";

const Team = (props) => {
  return (
          <div className="border-2 w-60 h-90 flex flex-col items-center p-5 mt-5">
            <img
              src={props.img}
              alt=""
              className="h-25 w-25 rounded-full bg-amber-700 mt-5"
            />
            <h3 className="text-lg">{props.Name}</h3>
            <p>{props.Role}</p>
            <p>
              {props.desc}
            </p>
            <div className="list-none flex flex-row gap-5 justify-around mt-6">
              <li>
                <Instagram size={18} />
              </li>
              <li>
                <Whatsapp size={18} />
              </li>
              <li>
                <Mail size={18} />
              </li>
            </div>
          </div>
  )
}

export default Team
