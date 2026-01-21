import hocWithAuth from "./hocWithAuth";
import Dashboard from "./Dashboard";

const DashboardWithAuth = hocWithAuth(Dashboard);

export default DashboardWithAuth