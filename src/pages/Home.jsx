import { Box } from "@mui/material";
import DesignerPanel from "../components/FormDesigner/DesignerPanel";
import JsonPreview from "../components/JsonPreview";
import Renderer from "../components/FormRenderer/Renderer";
import { useState } from "react";

const  Home = () => {
  const [schema, setSchema] = useState([]);

  return (
    <Box
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          height: "80vh",
          width: "80vw",
          boxSizing: "border-box",
          gap: 16,
        }}
      >

        <DesignerPanel schema={schema} setSchema={setSchema} />
        <JsonPreview schema={schema} />
        <Renderer schema={schema} />
      </Box>
    </Box>
  );
}

export default Home;