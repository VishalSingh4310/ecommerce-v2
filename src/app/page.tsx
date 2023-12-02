import { Card } from "@molecules";
import { CategoriesData } from "@utils";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center w-full p-6 md:p-28 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CategoriesData.map((cat) => (
          <Card
            key={cat.name}
            to={`/${cat.name}`}
            title={cat.name}
            img={cat.image}
          />
        ))}
      </div>
    </main>
  );
};
export default Home;
