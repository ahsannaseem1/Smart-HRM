import Sidebar from "../Sidebar";
import DashboardOverview from "../DashboardOverview";
function Recruitment() {
  return (
    <div className="flex gap-4">
      <Sidebar></Sidebar>
      <div className="w-full p-4">
        <DashboardOverview pageName="Recruitment"></DashboardOverview>
        <div className="flex mt-4">
          <div className="flex flex-col gap-4 w-[40%] p-4 rounded-lg border border-black shadow-lg">
            <h1 className="font-bold text-xl">React Native Developer</h1>
            <p className="text-sm">
              Job Description lorem20 n this example, I've added an absolutely
              positioned element with a background color and opacity to serve as
              a backdrop for the blur effect. Adjust the background color and
              opacity based on your design preferences. 
            </p>
            <button className="p-2 self-end rounded-md bg-sec-color text-white">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Recruitment;
