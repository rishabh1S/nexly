export interface CategoryMenu {
  id: number;
  attributes: {
    name: string;
    slug: string;
    products: {
      data: {};
    };
  };
  categories: {
    data: {
      id: number;
      attributes: {
        name: string;
        slug: string;
      };
    };
  };
}

export interface CarouselItem {
  id: number;
  imgSrc: string;
  alt: string;
}

export interface Product {
  id: number;
  attributes: {
    categories: any;
    name: string;
    subtitle: string;
    description: string;
    price: number;
    original_price: number;
    slug: string;
    size: {
      data: {
        size: string;
        enabled: boolean;
      }[];
    };
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
