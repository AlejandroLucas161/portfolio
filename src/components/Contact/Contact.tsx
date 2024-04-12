import { FunctionComponent } from "react";
import { SocialMedia } from "./config";

const Contact: FunctionComponent = () => {
  return (
    <footer className="w-full bg-[#333333] " id="contact">
      <div className="flex justify-between items-center px-24 py-8 text-white">
        <p className="text-white">
          Integer iaculis ipsum in tortor convallis ullamcorper.
        </p>

        <div className="flex gap-2">
          {SocialMedia.map(({ name, href, icon }, idx) => (
            <a
              key={name + idx}
              href={href}
              target="_blank"
              className="h-fit flex items-center rounded-full bg-white hover:bg-lighterbluegray transition duration-300 p-2"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
