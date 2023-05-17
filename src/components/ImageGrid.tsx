import ConeImage from '../assets/images/desktop/image-gallery-cone.jpg';
import MilkBottlesImage from '../assets/images/desktop/image-gallery-milkbottles.jpg';
import OrangeImage from '../assets/images/desktop/image-gallery-orange.jpg';
import SugarcubesImage from '../assets/images/desktop/image-gallery-sugarcubes.jpg';
import ConeMobile from '../assets/images/mobile/image-gallery-cone.jpg';
import MilkBottlesMobile from '../assets/images/mobile/image-gallery-milkbottles.jpg';
import OrangeMobile from '../assets/images/mobile/image-gallery-orange.jpg';
import SugarcubesMobile from '../assets/images/mobile/image-gallery-sugar-cubes.jpg';
export default function ImageGrid() {
  return (
    <>
      <section className="grid md:grid-cols-4 grid-cols-2">
        <div>
          <picture>
            <source media="(min-width:768px)" srcSet={MilkBottlesImage} />
            <img
              className="w-full h-full"
              src={MilkBottlesMobile}
              alt="A cone on a colored canvas"
            />
          </picture>
        </div>
        <div>
          <picture>
            <source media="(min-width:768px)" srcSet={OrangeImage} />
            <img
              className="w-full h-full"
              src={OrangeMobile}
              alt="A cone on a colored canvas"
            />
          </picture>
        </div>
        <div>
          <picture>
            <source media="(min-width:768px)" srcSet={ConeImage} />
            <img
              className="w-full h-full"
              src={ConeMobile}
              alt="A cone on a colored canvas"
            />
          </picture>
        </div>
        <div>
          <picture>
            <source media="(min-width:768px)" srcSet={SugarcubesImage} />
            <img
              className="w-full h-full"
              src={SugarcubesMobile}
              alt="A cone on a colored canvas"
            />
          </picture>
        </div>
      </section>
    </>
  );
}
