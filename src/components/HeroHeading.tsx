type HeroHeadingProps = {
  text: string;
};

export default function HeroHeading({ text }: HeroHeadingProps) {
  return (
    <>
      <h1 className="text-3xl">{text}</h1>
    </>
  );
}
