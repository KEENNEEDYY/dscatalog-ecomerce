import { render, screen } from "@testing-library/react";
import { Product } from "types/products";
import ProductCard from "..";

describe("ProductCard should render ProductCard", () => {
    test("Shoud render correct product name", () => {

        const productName = `TV 50"`;

        const product : Product = {
            id: 1,
            name: productName,
            price: 1130.00,
            imgUrl: "text",
        } as Product

        render(
            <ProductCard product={product} key={product.id} />
        )

        expect(screen.getByText(productName)).toBeInTheDocument();
        expect(screen.getByAltText(productName)).toBeInTheDocument();
        expect(screen.getByText("1.130,00")).toBeInTheDocument();

    });
});