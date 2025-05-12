import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header text-center bg-rose-500 text-white py-5">
      <h1 className=" text-2xl pb-3">Checkpoint : frontend</h1>
      <Link to="/" className=" text-sm">Countries</Link>
    </header>
  );
}
