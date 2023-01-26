import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Product } from 'types/products';
import { requestBackend } from 'util/requests';
import './styles.css'

const Form = () => {

    const history = useHistory();

    const { register, handleSubmit, formState: {errors} } = useForm<Product>();

    const onSubmit = (product : Product) => {

        const data = {...product,imgURL: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg", categories: [{id: 3, name: ""}]}

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: "/products",
            data,
            withCredentials: true,
        };
        requestBackend(config)
            .then((response) => {
                console.log(response.data);
            });
    };
    
    const handleCancel = () => {
        history.push("/admin/products");
    }

    return(
        <div className="product-crud-container">
            <div className="base-card product-crud-form-card">
                <h1 className="product-crud-form-title">DADOS DO PRODUTO</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row product-crud-inputs-container">
                        <div className="col-lg-6 product-crud-inputs-left-container">
                            <div className="margin-botton-30">
                                <input 
                                    {...register('name', { required: 'Campo obrigatório'})}
                                    className={`form-control base-input ${ errors.name ? 'is-invalid': '' } `}
                                    type="text" placeholder= "Nome do produto" name="name"
                                />
                                <div className="invalid-feedback d-block"> {errors.name?.message} </div>
                            </div>

                            <div className="margin-botton-30">
                                <input type="text" className="form-control base-input" placeholder="Categorias"/>
                            </div>
                            <div className="margin-botton-30">
                                <input 
                                    {...register('price', {required: 'Campo obrigatório'})}
                                    className={`form-control base-input ${ errors.price ? 'is-invalid': '' } `}
                                    type="text" placeholder="Preço" name="price"
                                />
                                <div className="invalid-feedback d-block"> {errors.price?.message} </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <textarea 
                                    {...register('description', {required: 'Campo obrigatório'})}
                                    className={`form-control base-input h-auto ${errors.description ? 'is-invalid':''}`}
                                    name="description" rows={10} placeholder="Descrição"/>
                            </div>
                            <div className="invalid-feedback d-block" >{errors.description?.message}</div>
                        </div>
                    </div>
                    <div className="product-crud-buttons-container">
                        <button onClick={handleCancel} className="btn btn-outline-danger product-crud-buttons">CANCELAR</button>
                        <button className="btn btn-primary product-crud-buttons text-white">SALVAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;