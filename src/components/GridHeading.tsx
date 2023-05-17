type GridHeadingProps = {
  text: string;
};

export default function GridHeading({ text }: GridHeadingProps) {
  return (
    <>
      <h2 className="text-3xl">{text}</h2>
    </>
  );
}
