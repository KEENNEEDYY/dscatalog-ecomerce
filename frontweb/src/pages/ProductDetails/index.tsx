import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';

import './styles.css';

const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <div className="goback-container">
          <ArrowIcon />
          <h2>Voltar</h2>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt="Nome do produto"
              />
            </div>
            <div className="name-price-container">
              <h1>Nome do Produto</h1>
              <ProductPrice price={2345.67} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti saepe dolor, et quo facere magnam nobis, odio iste
                ullam explicabo, velit ex minus rem? Molestiae quas fugit
                asperiores commodi magni corporis quis dolor aspernatur,
                accusantium aperiam assumenda rem minima, sapiente totam
                inventore pariatur id alias. Facere saepe ullam obcaecati veniam
                vel aut, repellendus, fuga omnis officiis, nisi corrupti ad. Non
                consequatur voluptas iste asperiores illum voluptatibus,
                accusantium hic similique corrupti eos voluptatem reiciendis
                tenetur facere quae minima quam sed assumenda quas aperiam atque
                quod reprehenderit numquam placeat. Tempora nemo, possimus
                labore recusandae nihil quaerat obcaecati quibusdam praesentium,
                voluptatum deserunt dolorum, consectetur iste exercitationem
                repudiandae sunt, reprehenderit magnam accusamus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
