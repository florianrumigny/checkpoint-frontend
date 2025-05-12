import AdCountry from "@/components/AddCountry";
import List from "@/components/List";

export function HomePage() {
  return (
    <div className=" min-h-screen bg-gray-200 px-5">
      <AdCountry />
      <List />
    </div>
  );
}
