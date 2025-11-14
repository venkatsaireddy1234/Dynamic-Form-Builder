import { Box } from "@mui/material";
import DesignerPanel from "../components/FormDesigner/DesignerPanel";
import JsonPreview from "../components/JsonPreview";
import Renderer from "../components/FormRenderer/Renderer";
import { useState } from "react";

export default function Home() {
  const [schema, setSchema] = useState([]);

  return (
    <Box
     style={{display: "flex", height: "100vh", width: "100vw", boxSizing: "border-box", margin: 20, gap:2}}

    >
        <DesignerPanel schema={schema} setSchema={setSchema} />

        <JsonPreview schema={schema} />

        <Renderer schema={schema} />
    </Box>
  );
}
