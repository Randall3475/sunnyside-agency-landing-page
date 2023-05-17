import ArrowDownIcon from './ArrowDownIcon';

export default function Hero() {
  return (
    <>
      <section className="bg-cover bg-bottom md:bg-[url('../public/images/desktop/image-header.jpg')] bg-[url('../public/images/mobile/image-header.jpg')] h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-y-24 md:mb-48 mb-24 px-4">
          <h1 className="md:text-6xl text-4xl text-white font-body uppercase tracking-widest text-center">
            We are creatives
          </h1>
          <ArrowDownIcon />
        </div>
      </section>
    </>
  );
}
