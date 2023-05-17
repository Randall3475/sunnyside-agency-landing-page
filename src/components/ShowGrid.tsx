import TransformImage from '../assets/images/desktop/image-transform.jpg';
import StandOutImage from '../assets/images/desktop/image-stand-out.jpg';
import PhotographyImage from '../assets/images/desktop/image-photography.jpg';
import GraphicDesignImage from '../assets/images/desktop/image-graphic-design.jpg';
import TransformMobile from '../assets/images/mobile/image-transform.jpg';
import StandOutMobile from '../assets/images/mobile/image-stand-out.jpg';
import GraphicDesignMobile from '../assets/images/mobile/image-graphic-design.jpg';
import PhotographyMobile from '../assets/images/mobile/image-photography.jpg';
export default function ShowGrid() {
  return (
    <>
      <section className="grid md:grid-cols-2 mx-auto font-display">
        <div className="max-md:order-2 flex justify-center items-center md:p-4 p-8 py-20">
          <div className="flex flex-col gap-y-8 max-w-[28rem] max-md:text-center max-md:items-center">
            <h2 className="font-body text-very-dark-desaturated-blue font-extrabold text-[40px]">
              Transform your brand
            </h2>
            <p className="font-display text-dark-grayish-blue text-[17px]">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients thrugh compelling visuals
              that do most of the marketing for you.
            </p>
            <a
              className="font-body text-md uppercase underlined yellow-underline"
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="max-md:order-1">
          <picture>
            <source media="(min-width:768px)" srcSet={TransformImage} />
            <img
              className="w-full h-full"
              src={TransformMobile}
              alt="Egg on a yellow canvas"
            />
          </picture>
        </div>
        <div className="max-md:order-3">
          <picture>
            <source media="(min-width:468px)" srcSet={StandOutImage} />
            <img
              className="w-full h-full"
              src={StandOutMobile}
              alt="Egg on a yellow canvas"
            />
          </picture>
        </div>
        <div className="max-md:order-4 flex justify-center items-center md:p-4 p-8 py-20">
          <div className="flex flex-col gap-y-8 max-w-[28rem] max-md:text-center max-md:items-center">
            <h2 className="font-body text-very-dark-desaturated-blue font-extrabold text-[40px]">
              Stand out to the right audience
            </h2>
            <p className="font-display text-dark-grayish-blue text-[17px]">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <a
              className="font-body text-md uppercase underlined pink-underline"
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="max-md:order-5 relative flex justify-center">
          <picture className="w-full">
            <source media="(min-width:468px)" srcSet={GraphicDesignImage} />
            <img
              className="w-full h-full"
              src={GraphicDesignMobile}
              alt="Egg on a yellow canvas"
            />
          </picture>
          <div className="absolute bottom-0 text-center gap-y-6 py-12 px-4 flex flex-col max-w-[24rem] text-dark-blue">
            <h2 className="text-3xl relative capitalize font-extrabold font-body">
              Graphic design
            </h2>
            <p className="font-bold text-[17px]">
              Great design makes you memorable. We deliver artwork that
              underscores your brande message and captures potential clients'
              attention.
            </p>
          </div>
        </div>
        <div className="max-md:order-6 relative flex justify-center">
          <picture className="w-full h-full">
            <source media="(min-width:468px)" srcSet={PhotographyImage} />
            <img
              className="w-full h-full"
              src={PhotographyMobile}
              alt="Egg on a yellow canvas"
            />
          </picture>
          <div className="absolute bottom-0 text-center gap-y-6 py-12 px-4 flex flex-col max-w-[24rem] text-dark-blue">
            <h2 className="text-3xl initial capitalize relative font-extrabold font-body">
              Photography
            </h2>
            <p className="font-bold text-[17px]">
              Increase your credibility by getting the most stunning,
              high.quality photos that improve your business image.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
