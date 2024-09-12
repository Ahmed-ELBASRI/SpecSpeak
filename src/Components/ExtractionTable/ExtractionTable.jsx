import React, { useState, useEffect } from "react";
import "./ExtractionTable.css";
import "primereact/resources/themes/lara-dark-cyan/theme.css"; // Dark theme for PrimeReact
// import 'primeicons/primeicons.css';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";
const ExtractionTable = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [rowClick, setRowClick] = useState(true);

  const ProductService = {
    getProductsData() {
      return [
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1001",
          code: "nvklal433",
          name: "Black Watch",
          description: "Product Description",
          image: "black-watch.jpg",
          price: 72,
          category: "Accessories",
          quantity: 61,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
      ];
    },
    getProductsMini() {
      return Promise.resolve(this.getProductsData().slice(0, 5));
    },
  };
  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);
  return (
    <div className="extracted-endpoint-container">
      <div className="test">
        <div className="flex justify-content-center align-items-center mb-4 gap-2">
          <label htmlFor="input-rowclick" className="flex items-center gap-2">
            <InputSwitch
              inputId="input-rowclick"
              checked={rowClick}
              onChange={(e) => setRowClick(e.value)}
            />
            Row Click
          </label>
        </div>
        <DataTable
          className="radius"
          value={products}
          selectionMode={rowClick ? null : "checkbox"}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
          ></Column>
          <Column field="code" header="Endpoint"></Column>
          <Column field="name" header="Method"></Column>
          {/* <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column> */}
        </DataTable>
      </div>
      <div className="upload-button-container">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Analyze 🔍
          </button>
        </div>
    </div>
  );
};

export default ExtractionTable;
