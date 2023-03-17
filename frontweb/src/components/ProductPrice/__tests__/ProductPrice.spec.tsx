import ProductPrice from "../";
import { render, screen } from "@testing-library/react";


describe('Should render ProductPrice', () => {
    test('ProductPrice should render currency text', () => {
        const text = "R$";
        render(
            <ProductPrice price={10.00} />
        );
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    test('ProductPrice should render product price givin whith two decimal cases', () =>{
        const value = 100.00;
        const formattedValue = value.toFixed(2).replace(".", ",");
        render(
            <ProductPrice price={value} />
        );

        expect(screen.getByText(formattedValue)).toBeInTheDocument();
        
    })

});