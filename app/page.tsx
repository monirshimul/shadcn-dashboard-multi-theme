import BarChartOne from "./components/chartComp/BarChartOne";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 pt-5">
      <div className="bg-secondary p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><BarChartOne /></div>
      <div className="bg-secondary p-4 rounded-lg">Test</div>
      <div className="bg-secondary p-4 rounded-lg">Test</div>
      <div className="bg-secondary p-4 rounded-lg">Test</div>
      <div className="bg-secondary p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">Test</div>
      <div className="bg-secondary p-4 rounded-lg">Test</div>
    </div>
  );
}
