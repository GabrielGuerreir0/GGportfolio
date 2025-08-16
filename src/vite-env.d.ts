/// <reference types="vite/client" />

// Arquivos estáticos
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.css";
declare module "*.scss";
declare module "*.pdf";

// Todos os arquivos JSX/TSX serão tratados como módulos any
declare module "*.jsx" {
  const Component: any;
  export default Component;
}
declare module "*.tsx" {
  const Component: any;
  export default Component;
}
