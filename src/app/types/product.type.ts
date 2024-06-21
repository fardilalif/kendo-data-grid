export type Category = {
  CategoryID: number;
  CategoryName: string;
  Description: string;
};

export type Product = {
  ProductID: number;
  ProductName: string;
  SupplierID: number;
  CategoryID: number;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReorderLevel: number;
  Discontinued: boolean;
  Category: Category;
  expanded?: boolean;
};

export type Column = {
  field: string;
  title: string;
};
