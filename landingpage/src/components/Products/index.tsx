import Carousel from "../Carousel";
import ProductCard from "../ProductCard";
import ProductList from "./data.json";

const Products = () => {
  return (
    <Carousel>
      {ProductList?.map((item, index: number) => (
        <ProductCard info={item} key={`produto-${index}`} />
      ))}
    </Carousel>
  );
};

export default Products;
