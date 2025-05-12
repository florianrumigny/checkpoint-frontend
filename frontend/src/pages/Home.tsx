import AdCountry from "@/components/AddCountry";
import List from "@/components/List";

export function HomePage() {
  return (
    <div className=" h-screen bg-gray-200">
      <AdCountry />
      <List />
    </div>
  );
}
