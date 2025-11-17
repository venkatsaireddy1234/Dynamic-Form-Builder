import { Box, Typography } from "@mui/material";

export default function JsonPreview({ schema }) {
  return (
    <Box style={{
       padding: 16,
        border: "1px solid #ccc",
        borderRadius: 4,
        height: "80%",
        overflow: "auto",
        width: "100%",
        
      }}>
      <Typography variant="h6" mb={2}>
        JSON Schema
      </Typography>
      <pre style={{ fontSize: "14px", whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{JSON.stringify(schema, null, 2)}</pre>
    </Box>
  );
}
