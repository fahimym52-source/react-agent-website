import { FaShoppingCart, FaLaptop, FaLock } from "react-icons/fa";

export default function Services() {
  return (
    <section className="min-h-screen py-20 px-10 text-center">
      <h2 className="text-4xl text-dark font-bold mb-4">SERVICES</h2>

      <p className="text-muted italic mb-12">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center p-6 gap-20">
        <div className="mt-10 hover:scale-105 duration-300">
          <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaShoppingCart className="text-white text-5xl" />
          </div>
          <h3 className="text-2xl font-bold mb-3">E-Commerce</h3>
          <p className="text-body">
            We build modern and powerful online stores. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sed consequatur voluptas
            provident voluptatum architecto expedita est commodi odit dolorem,
            quasi, eum inventore, tempore repellendus eveniet necessitatibus
            cumque consectetur sapiente laborum.
          </p>
        </div>

        <div className="hover:scale-105 duration-300">
          <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaLaptop className="text-white text-5xl" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Responsive Design</h3>
          <p className="text-body">
            We create websites that work on all devices. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Repellendus maxime deleniti
            alias facere aperiam consequatur neque soluta culpa? Aperiam neque
            laborum praesentium aut similique? Qui debitis libero laborum
            aspernatur fuga.
          </p>
        </div>

        <div className="hover:scale-105 duration-300">
          <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaLock className="text-white text-5xl" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Web Security</h3>
          <p className="text-gray-500">
            We help keep your website safe and secure. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Reprehenderit id temporibus
            debitis ipsum, dolorum assumenda doloribus sit impedit fuga quis
            exercitationem repudiandae eos nostrum esse voluptatibus, obcaecati,
            quam magnam sed!
          </p>
        </div>
      </div>
    </section>
  );
}
