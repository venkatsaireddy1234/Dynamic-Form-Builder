import { Box, Button, Typography } from "@mui/material";
import FieldEditor from "./FieldEditor";

export default function DesignerPanel({ schema, setSchema }) {
  const addField = (field) => {
    setSchema([...schema, field]);
  };

  return (
    <Box
      style={{
        border: "2px solid #ccc",
        borderRadius: 4,
        height: "100%",
        overflow: "auto",
        width: "100%",
        padding: 16,
      }}
    >
      <Typography variant="h6" mb={2}>
        Form Designer
      </Typography>
      <FieldEditor onAdd={addField} />

      <Button
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => setSchema([])}
      >
        Reset Schema
      </Button>
    </Box>
  );
}
