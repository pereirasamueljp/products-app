export interface Product {
    id: number,
    title: string,
    shortDescription: string,
    price: number | string,
    description: string,
    thumbnail: string,
    images: string[],
    availableQuantity: number,
    measureName: string,
    measure?: string[],
    sizes?: string[],
    colors?: string[],
  }