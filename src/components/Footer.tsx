import Logo from './Logo';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import TwitterIcon from './TwitterIcon';
import PinterestIcon from './PinterestIcon';
export default function Footer() {
  return (
    <>
      <footer className="bg-footer flex flex-col items-center py-16">
        <Logo inverted />
        <ul className="font-bold text-dark-desaturated-cyan/60 flex gap-x-10 mt-6">
          <li className="transition-colors hover:text-white">
            <a href="#">About</a>
          </li>
          <li className="transition-colors hover:text-white">
            <a href="#">Services</a>
          </li>
          <li className="transition-colors hover:text-white">
            <a href="#">Projects</a>
          </li>
        </ul>
        <ul className="flex gap-x-6 mt-20">
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <PinterestIcon />
          </li>
        </ul>
      </footer>
    </>
  );
}
