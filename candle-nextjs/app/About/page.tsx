import Header from "../ui/header/header";

export default function About() {
  return (
    <div className="flex flex-col h-screen bg-candle bg-no-repeat bg-cover bg-center bg-fixed ">
      <Header />
      <div className="flex flex-col">
        <h2 className="mx-auto text-2xl mt-10">About</h2>
        <p className="w-1/2 mx-auto mt-4 text-xl">
          Hi there, I’m the creative force behind Candle Cravings. Based in the
          heart of North Dakota, I specialize in crafting candles that capture
          the delicious essence of your favorite food scents. What started as a
          fun experiment in my kitchen has evolved into a full-fledged passion
          for creating mouthwatering fragrances that bring the cozy, comforting
          allure of great food right into your home.
        </p>
        <p className="w-1/2 mx-auto mt-4 text-xl">
          Each candle is designed to evoke the warmth and joy of delicious
          moments. I use high-quality ingredients to ensure a clean and
          long-lasting burn, so you can enjoy the scrumptious scents without any
          of the calories.
        </p>

        <p className="w-1/2 mx-auto mt-4 text-xl">
          Inspired by the simple pleasures of good food and great company, my
          candles aim to turn everyday spaces into deliciously scented havens.
          Whether you're looking to create a welcoming atmosphere for family
          gatherings or just want to indulge in a bit of culinary nostalgia,
          you'll find a candle that's perfect for you. Thank you for joining me
          on this aromatic adventure. If you have any questions or special
          requests, feel free to reach out. Here’s to filling your home with the
          delightful scents of your favorite treats!
        </p>
      </div>
    </div>
  );
}
