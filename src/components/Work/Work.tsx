import { FunctionComponent } from "react";

const Work: FunctionComponent = () => {
  return (
    <section className="py-16" id="work">
      <div className="flex flex-col items-center gap-12 mx-auto max-w-[1024px]">
        <h2 className="font-bold text-3xl">WORK</h2>

        <div className="w-full flex justify-start items-center gap-10">
          <img
            src="https://placehold.co/400"
            alt="librodepases landing"
            className="rounded-lg max-w-[300px] border"
          />

          <div className="flex flex-col justify-start gap-4">
            <h3 className="font-bold text-2xl text-center text-darkerblue">
              Project A
            </h3>

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

        <div className="w-full flex justify-start items-center gap-10">
          <div className="flex flex-col justify-start gap-4">
            <h3 className="font-bold text-2xl text-center text-darkerblue">
              Project B
            </h3>

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
          <img
            src="https://placehold.co/400"
            alt="librodepases landing"
            className="rounded-lg max-w-[300px] border"
          />
        </div>

        <div className="w-full flex justify-start items-center gap-10">
          <img
            src="https://placehold.co/400"
            alt="librodepases landing"
            className="rounded-lg max-w-[300px] border"
          />

          <div className="flex flex-col justify-start gap-4">
            <h3 className="font-bold text-2xl text-center text-darkerblue">
              Project C
            </h3>

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

export default Work;
