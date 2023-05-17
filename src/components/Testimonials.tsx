import EmilyImage from '../assets/images/image-emily.jpg';
import ImageJennie from '../assets/images/image-jennie.jpg';
import ImageThomas from '../assets/images/image-thomas.jpg';
export default function Testimonials() {
  return (
    <>
      <section className="py-[8vw] flex flex-col gap-y-16 font-display px-4">
        <h2 className="tracking-widest font-body uppercase text-center text-xl text-grayish-blue">
          Client testimonials
        </h2>
        <div className="grid md:grid-cols-3 max-w-5xl md:gap-x-8 max-md:gap-y-20 m-auto">
          <div className="flex flex-col gap-y-12 items-center text-center max-md:max-w-[24rem] max-md:mx-auto">
            <img
              className="rounded-full w-20"
              src={EmilyImage}
              alt="Image portrait of Emily R."
            />
            <p className="font-bold text-dark-grayish-blue">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div className="flex flex-col gap-y-2">
              <h3 className="font-body font-extrabold">Emily R.</h3>
              <p className="capitalize font-bold text-grayish-blue text-sm">
                Marketing director
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-12 items-center text-center max-md:max-w-[24rem] max-md:mx-auto">
            <img
              className="rounded-full w-20"
              src={ImageThomas}
              alt="Image portrait of Emily R."
            />
            <p className="font-bold text-dark-grayish-blue">
              Sunnyside's enthusiasm coupled with their keen interest in your
              brand's success made it a satisfying and enjoyable experience.
            </p>
            <div className="flex flex-col gap-y-2">
              <h3 className="font-body font-extrabold">Thomas S.</h3>
              <p className="capitalize font-bold text-grayish-blue text-sm">
                Chief operating officer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-12 items-center text-center max-md:max-w-[24rem] max-md:mx-auto">
            <img
              className="rounded-full w-20"
              src={ImageJennie}
              alt="Image portrait of Emily R."
            />
            <p className="font-bold text-dark-grayish-blue">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div className="flex flex-col gap-y-2">
              <h3 className="font-body font-extrabold">Jennie F.</h3>
              <p className="capitalize font-bold text-grayish-blue text-sm">
                Business owner
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
