import item1 from "../../assets/Images/AboutImages/item 1.jpg";
import item2 from "../../assets/Images/AboutImages/item 2.jpg";
import item3 from "../../assets/Images/AboutImages/item 3.jpg";
import item4 from "../../assets/Images/AboutImages/item 4.jpg";
import item5 from "../../assets/Images/AboutImages/item 5.jpg";

export default function About() {
  return (
    <section className="py-20  text-center">
      <h2 className="text-2xl  font-bold mb-5">ABOUT</h2>
      <p className="text-muted italic">Learn more about us.</p>

      <div className="relative mt-6 max-w-5xl mx-auto ">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-300 top-20 bottom-24"></div>

        <div className="space-y-15">
          <div className="flex items-center">
            <div className="w-1/2 text-right  pr-10">
              <h3 className="font-bold">2009-2011</h3>
              <h4 className="font-semibold ">Our Humble Beginnings</h4>
              <p className="text-gray-400 text-sm font-serif">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur perspiciatis dolore repellat ipsum, magnam cupiditate
                veniam exercitationem non qui illum eligendi blanditiis harum,
                nesciunt hic error nulla! Eum, natus. Ad!
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden  w-25 h-25 rounded-full border-4 border-gray-100 bg-white flex items-center justify-center">
                <img
                  src={item1}
                  className=" rounded-full object-cover w-full h-full mx-auto"
                />
              </div>
            </div>

            <div className="w-1/2"></div>
          </div>

          <div class="flex items-center">
            <div class="w-1/2"></div>
            <div class="relative">
              <div class="w-25 h-25 rounded-full border-4 border-gray-100  bg-white flex items-center justify-center">
                <img src={item2} alt="" class="rounded-full  w-full h-full" />
              </div>
            </div>
            <div class="w-1/2 pl-10 text-left">
              <h1 class="font-bold ">March 2011</h1>
              <h2 class="font-semibold">An Agency is Born</h2>
              <p class="text-sm text-gray-400 font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sit
                laudantium ipsa, placeat deserunt tempore suscipit autem
                provident labore fugit doloremque itaque illum ducimus nisi
                eligendi commodi sed. Libero, accusantium.
              </p>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-1/2 text-right pr-10">
              <h1 class="font-bold">December 2015</h1>
              <h2 class="font-semibold ">Transition to Full Sefvice</h2>
              <p class="text-sm text-gray-400 font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                cum dolores, veritatis sint, quam aspernatur minus esse ad
                veniam fuga sed, commodi magni itaque deleniti dignissimos quasi
                id pariatur error.
              </p>
            </div>

            <div class="relative">
              <div class="border-4 border-gray-100 w-25 h-25 rounded-full bg-white flex justify-center items-center">
                <img
                  src={item3}
                  alt=""
                  class="rounded-full  w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="w-1/2"></div>
          </div>

          <div class="flex items-center">
            <div class="w-1/2"></div>
            <div class="relative ">
              <div class="w-25 h-25 rounded-full border-4 border-gray-100 flex items-center justify-center ">
                <img
                  src={item4}
                  alt=""
                  class="rounded-full  w-full h-full bg-cover"
                />
              </div>
            </div>

            <div class="w-1/2 pl-10 text-left">
              <h1 class="font-bold">July 2020</h1>
              <h2 class="font-semibold">Phase Two Expansion</h2>
              <p class="text-sm text-gray-400 font-serif">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                eveniet maiores delectus deleniti expedita quibusdam
                reprehenderit saepe possimus a. Reiciendis rem ab temporibus
                sequi esse beatae quae unde quibusdam eveniet?
              </p>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-1/2 text-right pr-10">
              <h1 class="font-bold">December 2015</h1>
              <h2 class="font-semibold ">Transition to Full Sefvice</h2>
              <p class="text-sm text-gray-400 font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                cum dolores, veritatis sint, quam aspernatur minus esse ad
                veniam fuga sed, commodi magni itaque deleniti dignissimos quasi
                id pariatur error.
              </p>
            </div>

            <div class="relative">
              <div class="border-4 border-gray-100 w-25 h-25 rounded-full bg-white flex justify-center items-center">
                <img
                  src={item5}
                  alt=""
                  class="object-cover rounded-full  w-full h-full"
                />
              </div>
            </div>
            <div class="w-1/2"></div>
          </div>

          <div class="flex items-center">
            <div class="w-1/2"></div>
            <div class="relative ">
              <div class="w-25 h-25 rounded-full border-4 border-gray-100 flex items-center justify-center ">
                <img src={item2} alt="" class="rounded-full  w-full h-full" />
              </div>
            </div>

            <div class="w-1/2 pl-10 text-left">
              <h1 class="font-bold">July 2020</h1>
              <h2 class="font-semibold">Phase Two Expansion</h2>
              <p class="text-sm text-gray-400 font-serif">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                eveniet maiores delectus deleniti expedita quibusdam
                reprehenderit saepe possimus a. Reiciendis rem ab temporibus
                sequi esse beatae quae unde quibusdam eveniet?
              </p>
            </div>
          </div>

          <button>
            <div class="flex justify-center">
              <div class="w-24 h-24 bg-yellow-400  text-white rounded-full flex items-center justify-center text-center text-center font-bold border-4 border-gray-100">
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* <div className="relative max-w-5xl mx-auto mt-16">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
        <div className="relative w-1/2  pr-12 mb-12">
          <div className="absolute -right-2 top-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                alt="Our beginning"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-bold">2015</h3>

              <h4 className="text-xl font-semibold mb-2">
                Our Humble Beginnings
              </h4>

              <p className="text-gray-500">
                Our journey started with a small team and a big dream.
              </p>
            </div>
          </div>
        </div>

        <div className="relative  w-1/2 ml-auto pl-12 mb-12">
          <div className="absolute -left-2 top-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
              alt="Our beginning"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-bold">2016</h3>

            <h4 className="text-xl font-semibold mb-2">An Agency is Born</h4>

            <p className="text-gray-500">
              Our team grew and we started working on bigger projects.
            </p>
          </div>
        </div>

        <div className="relative w-1/2 pr-12 mb-12">
          <div className="absolute -right-2 top-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
              alt="Our beginning"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-bold">2018</h3>

            <h4 className="text-xl font-semibold mb-2">Our Team Grows</h4>

            <p className="text-gray-500">
              More talented people joined us and helped us grow.
            </p>
          </div>

          <div className="relative w-1/2 ml-auto pl-12 mb-12">
            <div className="absolute -left-2 top-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                alt="Our beginning"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-bold">2020</h3>

              <h4 className="text-xl font-semibold mb-2">Expansion</h4>

              <p className="text-gray-500">
                We expanded our services and reached more clients.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
