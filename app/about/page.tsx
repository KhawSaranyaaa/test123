import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

async function getProduct(): Promise<Product[]> {
  return [
    { id: 1, name: "product1", price: 1000 },
    { id: 2, name: "product2", price: 2000 },
    { id: 3, name: "product3", price: 3000 },
  ];
}

async function productPage() {
  const products = await getProduct();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">รายการสินค้า</h1>

      <div className="mt-6 grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-2">ราคา {product.price} บาท</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default productPage;
