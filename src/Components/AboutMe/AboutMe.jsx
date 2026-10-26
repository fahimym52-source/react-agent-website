import aboutImage from "../../assets/Images/AboutImages/AboutMe.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="bg-white py-20 px-10 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid items-center mt-10   gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-3 text-lg font-bold uppercase tracking-wider text-primary">
              About Me
            </p>

            <h2 className="mb-5 text-3xl font-bold text-dark">
              A Little Bit About Me
            </h2>

            <p className="mb-6 leading-7 text-body">
              I'm a passionate web developer with a strong interest in modern
              technologies. I love creating simple, beautiful and functional
              websites. I always strive to learn new skills and build projects
              that make a real difference.
            </p>
            <p className="mb-6 leading-7 text-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              dolores neque autem doloribus sequi vitae nemo possimus! Dolorem
              non alias, soluta, possimus, vel deserunt eos laboriosam esse
              distinctio nam quam? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Alias dolores neque autem doloribus sequi vitae
              nemo possimus! Dolorem non alias, soluta, possimus, vel deserunt
              eos laboriosam esse distinctio nam quam? Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Alias dolores neque autem
              doloribus sequi vitae nemo possimus! Dolorem non alias, soluta,
              possimus, vel deserunt eos laboriosam esse distinctio nam quam?
            </p>

            <a
              href="/My new CV (2).pdf"
              download
              className="inline-block shadow-xl rounded bg-primary px-6 py-3
              text-sm font-bold  text-white transition hover:bg-primary-hover"
            >
              Download CV
            </a>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={aboutImage}
              alt="Workspace with laptop and plant"
              className="h-130 w-full rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
