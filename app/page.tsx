import { ChartAreaLegend } from "./components/chartComp/AreaChartLegend";
import { ChartBarHorizontal } from "./components/chartComp/BarChartHorizontal";
import BarChartOne from "./components/chartComp/BarChartOne";
import { ChartBarStacked } from "./components/chartComp/BarChartStacked";
import { ChartLineLabel } from "./components/chartComp/LineChartLabel";
import { ChartPieDonutText } from "./components/chartComp/PieChartDonut";
import { SectionCards } from "./components/section-card/SectionCards";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 py-5">
      <div className="rounded-lg col-span-full"><SectionCards /></div>
      <div className="rounded-lg"><BarChartOne /></div>
      <div className="rounded-lg"><ChartBarHorizontal /></div>
      <div className="rounded-lg"><ChartBarStacked /></div>
      <div className="rounded-lg"><ChartLineLabel /></div>
      <div className="rounded-lg"><ChartPieDonutText /></div>
      <div className="rounded-lg"><ChartAreaLegend /></div>
      {/* <div className="bg-secondary p-4 rounded-lg">Test</div>
      <div className="bg-secondary p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">Test</div>
      <div className="bg-secondary p-4 rounded-lg">Test</div> */}
    </div>
  );
}
