import { BreadCrumb } from "@atoms";
import { Product } from "@organisms";

const Category = ({ params }: { params: { category: string } }) => {
  return (
    <main className="flex min-h-screen flex-col bg-white  justify-between w-full p-6 py-20 md:px-28 md:py-24 ">
      <div>
        <div className="py-4 mb-2">
          <BreadCrumb params={params} />
        </div>
        <div className="border-b-slate-200 w-full relative overflow-hidden">
          <h1 className="text-black text-xl font-medium inline-flex px-2  pb-3  border-b-2 border-zinc-400">
            {decodeURIComponent(params.category)}
          </h1>
          <span className="h-[1px] w-full absolute bottom-0 bg-gray-500 opacity-10" />
        </div>
        <div className="py-12">
          <Product categoryName={decodeURIComponent(params.category)} />
        </div>
      </div>
    </main>
  );
};
export default Category;
