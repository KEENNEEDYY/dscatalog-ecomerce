import ContentLoader from 'react-content-loader';
import './styles.css';

const ProductInfoLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 500 280"
      backgroundColor="#ecebeb"
      foregroundColor="#d6d2d2"
    >
      <rect x="3" y="0" rx="10" ry="0" width="300" height="180" />
    </ContentLoader>
  </div>
);

export default ProductInfoLoader;
