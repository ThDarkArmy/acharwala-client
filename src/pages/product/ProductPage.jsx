import ProductCard from './ProductCard';
import SimilarProducts from './SimilarProducts';
import ReviewsSection from './ReviewSection';

const ProductPage = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      {/* <nav className="bg-white py-2 px-6 border-b">
        <div className="max-w-7xl mx-auto text-sm text-gray-600">
          Home / Pickles / Mango Pickles / {product.name}
        </div>
      </nav> */}

      <ProductCard/>
      <SimilarProducts/>
      <ReviewsSection/>
    </div>
  );
};

export default ProductPage;