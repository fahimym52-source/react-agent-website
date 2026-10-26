import homeImg from "../../assets/Images/HeroImage/1.jpg";

export default function Hero({ onTellMe }) {
  return (
    <section
      style={{ backgroundImage: `url(${homeImg})` }}
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative  text-center text-white"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative">
        <p className="text-2xl italic mb-3">Welcome To Our Studio!</p>

        <h1 className="text-5xl font-bold mb-8">IT'S NICE TO MEET YOU</h1>

        <button
          onClick={onTellMe}
          // onClick={() =>
          //   document
          //     .getElementById("about")
          //     ?.scrollIntoView({ behavior: "smooth" })
          // }
          className="px-8 py-4 bg-primary rounded-md font-bold hover:bg-primary-hover transition"
        >
          TELL ME MORE
        </button>
      </div>
    </section>
  );
}
