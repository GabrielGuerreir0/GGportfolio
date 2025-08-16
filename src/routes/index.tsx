import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contato from "../pages/Contato/Contato";
/* import NotFound from "../pages/NotFound";
 */
export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
