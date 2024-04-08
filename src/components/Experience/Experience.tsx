import { FunctionComponent } from "react";
import ldpLogo from "../../assets/ldp-logo.jpg";
import ldpLanding from "../../assets/ldp-landing.png";

const Experience: FunctionComponent = () => {
  return (
    <section className="bg-lighterbluesections py-16" id="experience">
      <div className="flex flex-col items-center gap-12 mx-auto max-w-[1258px]">
        <h2 className="font-bold text-3xl">EXPERIENCE</h2>

        <div className="w-full flex justify-start items-center gap-10">
          <img
            src={ldpLanding}
            alt="librodepases landing"
            className="rounded-lg max-w-[700px]"
          />

          <div className="flex flex-col justify-start gap-4">
            <div className="flex items-center mb-3 gap-2">
              <img
                src={ldpLogo}
                alt="librodepases logo"
                className="size-7 rounded-full"
              />
              <h3 className="font-bold text-2xl">LIBRODEPASES</h3>
            </div>

            <h3 className="font-semibold text-xl">Front-end developer</h3>

            <p className="text-lg text-justify">
              Integer iaculis ipsum in tortor convallis ullamcorper. Morbi
              rhoncus eget est nec tincidunt. Vivamus laoreet, nulla nec tempus
              varius, est nunc varius enim, nec ultricies leo odio in mauris.
              Nunc nec cursus sapien, ac sodales elit. Phasellus velit lacus,
              facilisis et congue id, blandit eget leo. Nam est felis, venenatis
              non nunc eget, iaculis lacinia enim. Suspendisse commodo mollis
              metus eget cursus. Aenean laoreet massa nunc. Nullam eleifend
              tortor euismod tristique congue. Aenean efficitur est ac nibh
              porta pretium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
