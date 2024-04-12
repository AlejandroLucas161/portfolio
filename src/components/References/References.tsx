import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaLinkedin } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { LinkedInReferences } from "./config";

const References: FunctionComponent = () => {
  return (
    <section className="bg-lighterbluesections py-16" id="references">
      <div className="flex flex-col items-center gap-1 mx-auto max-w-[800px]">
        <h2 className="font-bold text-3xl">REFERENCES</h2>

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full "
        >
          {LinkedInReferences.map(
            ({ name, role, picture, linkedIn, reference }, idx) => (
              <SwiperSlide
                key={idx}
                className="min-h-[340px] flex flex-col justify-center items-center px-16 gap-2"
              >
                <div className="flex items-center mb-3 gap-3 text-xl">
                  <img
                    src={picture}
                    alt="librodepases logo"
                    className="size-7 rounded-full"
                  />

                  <h3 className="font-bold">
                    {name}, {role}
                  </h3>

                  <a href={linkedIn} target="_blank">
                    <FaLinkedin />
                  </a>
                </div>

                <p className="flex flex-col gap-4 text-center text-lg">
                  {reference}
                </p>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default References;
