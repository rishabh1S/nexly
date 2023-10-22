export interface MenuItem {
  id: number;
  name: string;
  url?: string;
  subMenu?: boolean;
}

export interface Category {
  id: number;
  name: string;
  doc_count: number;
}

export interface CarouselItem {
  id: number;
  imgSrc: string;
  alt: string;
}
