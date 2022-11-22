import ContentLoader from 'react-content-loader';
import './styles.css';

const ProductDetailsLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      speed={2}
      width={310}
      height={560}
      viewBox="0 0 500 310"
      backgroundColor="#ecebeb"
      foregroundColor="#d6d2d2"
    >
      <rect x="3" y="0"   rx="0" ry="0" width="310" height="20" />
      <rect x="3" y="25"  rx="0" ry="0" width="310" height="20" />
      <rect x="3" y="50"  rx="0" ry="0" width="310" height="20" />
      <rect x="3" y="75"  rx="0" ry="0" width="310" height="20" />
      <rect x="3" y="100"  rx="0" ry="0" width="310" height="20" /> 
      <rect x="3" y="125"  rx="0" ry="0" width="310" height="20" />     
      <rect x="3" y="150" rx="0" ry="0" width="310" height="20" />
      <rect x="3" y="175" rx="0" ry="0" width="300" height="20" />
      <rect x="3" y="200" rx="0" ry="0" width="175" height="20" />
    </ContentLoader>
  </div>
);

export default ProductDetailsLoader;
