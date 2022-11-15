import Counter from "./counter";

export async function generateStaticParams() {
  return [
    {
      slug: "stream",
    },
  ];
}

export default function IndividualBlog() {
  return (
    <div>
      <h1>Live Stream</h1>
      <Counter />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore velit
        expedita veniam, est a, magnam in dicta placeat voluptatum tenetur
        maiores, aperiam fuga. Nihil, veritatis similique perspiciatis cumque
        sapiente quod.
      </p>
    </div>
  );
}
