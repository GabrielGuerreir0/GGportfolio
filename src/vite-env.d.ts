/// <reference types="vite/client" />

// 🔹 Declaração de arquivos de imagem
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";

// 🔹 Declaração de arquivos CSS/SCSS
declare module "*.css";
declare module "*.scss";

// 🔹 Declaração de arquivos PDF
declare module "*.pdf";

// 🔹 Declaração global para arquivos JSX/TSX
declare module "*.jsx" {
  const Component: any;
  export default Component;
}

declare module "*.tsx" {
  const Component: any;
  export default Component;
}

// 🔹 Opcional: caso você use JSON diretamente
declare module "*.json" {
  const value: any;
  export default value;
}
