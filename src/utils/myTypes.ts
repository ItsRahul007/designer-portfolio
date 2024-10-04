export type T_Reviews = {
  name: string;
  image: string;
  comment: string;
};

export interface I_ImageComponent {
  src: string;
  alt: string;
  tags: string[];
}

export interface I_InputWithLabel {
  label: string;
  placeholder: string;
  type?: string;
}
