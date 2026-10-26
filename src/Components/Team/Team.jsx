import TeamMember from "./TeamMember";
import TeamImage1 from "../../assets/Images/TeamImage/fitstPerson.jpg";
import TeamImage2 from "../../assets/Images/TeamImage/secondPersom.png";
import TeamImage3 from "../../assets/Images/TeamImage/thirdPerson.jpg";

export default function Team() {
  return (
    <section className="py-25 px-20 min-h-screen bg-gray-300 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Our Amazing Team</h1>
        <p className="text-gray-500 text-sm italic mb-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6">
          <TeamMember
            title="Parveen Anand "
            capsole="Lead Designer"
            image={TeamImage1}
          />
          <TeamMember
            title="Mohammad Fahimy "
            capsole="Lead Marketer"
            image={TeamImage2}
          />
          <TeamMember
            title="Larry Parker "
            capsole="Lead Developer"
            image={TeamImage3}
          />
        </div>
      </div>
    </section>
  );
}
