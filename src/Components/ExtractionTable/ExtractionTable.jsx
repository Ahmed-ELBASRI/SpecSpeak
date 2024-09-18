import { useState, useEffect } from "react";
import "./ExtractionTable.css";
import "primereact/resources/themes/lara-dark-cyan/theme.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";
import { analyzeSelectedEndpoints } from "../Services/ChatService";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading"; // Adjust the import path as necessary

const ExtractionTable = () => {
  const [endpoints, setEndpoints] = useState([]);
  const [selectedEndpoints, setSelectedEndpoints] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndTransformData = () => {
      const storedEndpoints = localStorage.getItem("apiEndpoints");
      if (storedEndpoints) {
        const endpointsData = JSON.parse(storedEndpoints);

        const transformedData = endpointsData.flatMap((endpoint) =>
          endpoint.methods.map((method) => ({
            key: `${endpoint.path}-${method}`,
            path: endpoint.path,
            method: method.toUpperCase(),
          }))
        );
        console.log(transformedData);
        setEndpoints(transformedData);
      }
    };

    fetchAndTransformData();
  }, []);

  const handleAnalyzeClick = async () => {
    if (!selectedEndpoints || selectedEndpoints.length === 0) {
      console.log("No endpoints selected.");
      return;
    }

    const endpointKeys = selectedEndpoints.map((endpoint) => endpoint.key);
    setIsLoading(true); // Start loading

    try {
      const analysisResult = await analyzeSelectedEndpoints(endpointKeys);
      const parsedAnalysisResult = JSON.stringify(analysisResult);
      localStorage.setItem("analysisResult", parsedAnalysisResult);
      navigate("/chat");
    } catch (error) {
      console.error("Error analyzing selected endpoints:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="extracted-endpoint-container">
      {isLoading && <Loading />}{" "}
      {/* Conditionally render the loading spinner */}
      <div className="test">
        <div className="flex justify-content-center align-items-center mb-4 gap-2">
          <label htmlFor="input-rowclick" className="flex items-center gap-2">
            <InputSwitch
              inputId="input-rowclick"
              checked={rowClick}
              onChange={(e) => setRowClick(e.value)}
            />
            Row Click
          </label>
        </div>
        <DataTable
          className="radius"
          value={endpoints}
          selectionMode={rowClick ? null : "checkbox"}
          selection={selectedEndpoints}
          onSelectionChange={(e) => setSelectedEndpoints(e.value)}
          dataKey="key"
          tableStyle={{ minWidth: "50rem" }}
          emptyMessage="No available options or Invalid OpenApi file"
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
          ></Column>
          <Column field="path" header="Endpoint"></Column>
          <Column field="method" header="Method"></Column>
        </DataTable>
      </div>
      <div className="upload-button-container">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleAnalyzeClick}
        >
          Analyze 🔍
        </button>
      </div>
    </div>
  );
};

export default ExtractionTable;
