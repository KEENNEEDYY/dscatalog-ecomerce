import './styles.css'
import {ReactComponent as SearchIcon} from 'assets/images/search-icon.svg'
import { Controller, useForm } from 'react-hook-form';
import { Category } from 'types/Category';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { requestBackend } from 'util/requests';

type ProductFilterData = {
    name: string;
    category: Category;
}

const ProductFilter = () => {

    const [selectCategories, setSelectCategories] = useState<Category[]>([]);

    const { register, handleSubmit, control } = useForm<ProductFilterData>();

    const onSubmit = (formData: ProductFilterData) => {
        console.log("ENVIOU", formData);
    }

    useEffect(() => {
        requestBackend({ url: '/categories' }).then((response) => {
            setSelectCategories(response.data.content);
        })
    }, [])

    return(
        <div className="base-card product-filter-container">
            <form onSubmit={handleSubmit(onSubmit)} className="product-filter-form">
                <div className="product-filter-name-container">
                    <input {...register('name')} name="name"
                         className="form-control" type="text" placeholder="Nome do produto" 
                    />
                    <button className="product-filter-search-icon">
                        <SearchIcon />
                    </button>
                </div>
                <div className="product-filter-bottom-container">
                    <div className="product-filter-category-container">
                        <Controller 
                            name="category"
                            control={control}
                            render={({ field }) => (
                                <Select 
                                    {...field}
                                    options={selectCategories}
                                    classNamePrefix="product-filter-select"
                                    isClearable
                                    placeholder="Categoria"
                                    getOptionLabel={(category: Category) => category.name}
                                    getOptionValue={(category: Category) => String(category.id)}
                                />
                            )}
                        />
                    </div>
                    <button className="btn btn-outline-secondary btn-product-filter-clear">LIMPAR <span className="btn-product-filtro-word">FILTRO</span></button>
                </div>
            </form>
        </div>
    )
}

export default ProductFilter;