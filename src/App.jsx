import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Update from "./components/Update";
import Create from "./components/Create";
import NotFound from "./components/Notfound";
// imort noyiugtkj
// this is second commit

const App = () => {
  return (
    <>
      <nav className="bg-slate-700 flex justify-center">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
