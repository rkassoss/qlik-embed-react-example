import { Link } from "react-router-dom";
import "./SidePanel.css"; // Import the CSS file for styling

const SidePanel = () => (
  <div className="side-panel">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/classic-app">Classic App</Link>
      </li>
      <li>
        <Link to="/analytics-chart">Analytics Chart</Link>
      </li>
      <li>
        <Link to="/analytics-sheet">Analytics Sheet</Link>
      </li>
      <li>
        <Link to="/custom-charts">Custom Charts</Link>
      </li>
      <li>
        <Link to="/sheet-list">Sheet List</Link>
      </li>
      <li>
        <Link to="/classic-charts">Classic Charts</Link>
      </li>
      {/* Add more links as needed */}
    </ul>
  </div>
);

export default SidePanel;
