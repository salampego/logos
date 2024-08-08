import { Hero } from "entities/hero/hero";
import { Map } from "widgets/map/map";
import { OurCafe } from "entities/ourCafe/ourCafe";
import { useGetProductsQuery } from "entities/products/module/products/productsOperation";
import { Products } from "entities/products/products";
import { Oval } from "react-loader-spinner";

export const HomePage = () => {
  const { isLoading, isError } = useGetProductsQuery();

  if (isError) {
    return (
      <p className="font-GilroySemibold text-xl flex justify-center items-center h-screen">
        Something went wrong. Please try again later. Error: {isError}
      </p>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
        />
      </div>
    );
  }

  return (
    <>
      <Hero />
      <Products />
      <OurCafe />
      <Map />
    </>
  );
};
