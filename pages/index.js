import Link from "next/link";
import Test from "../component/Test";
export default function Home() {
  return (
    <div className="container">
      <div className="flex items-center justify-center p-7 row">
        <p className="font-sans text-white text-2xl">Register</p>
      </div>
      <div className="row">
        <Test></Test>
      </div>
    </div>
  );
}
