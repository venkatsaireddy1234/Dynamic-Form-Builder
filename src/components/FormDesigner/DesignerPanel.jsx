import { Box, Button, Typography } from "@mui/material";
import FieldEditor from "./FieldEditor";
import ToastBar from "../../components/NavBar/ToastBar"; // adjust path if needed
import { useState } from "react";

export default function DesignerPanel({ schema, setSchema }) {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const addField = (field) => {
    setSchema([...schema, field]);
    setToastMessage(`${field.label || "Field"} (${field.type || "type"}) added`);
    setToastOpen(true);
  };

  const deleteField = (index) => {
    const field = schema[index];
    const updated = schema.filter((_, i) => i !== index);
    setSchema(updated);

    setToastMessage(`${field?.label || "Field"} (${field?.type || "type"}) deleted`);
    setToastOpen(true);
  };

  const handleCloseToast = () => setToastOpen(false);

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

      <Box mt={3}>
        {schema.length === 0 ? (
          <Typography color="textSecondary">No fields added</Typography>
        ) : (
          schema.map((field, index) => (
            <Box
              key={field.id ?? index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="8px"
              marginBottom="8px"
              border="1px solid #ddd"
              borderRadius="6px"
              sx={{ backgroundColor: "#fafafa" }}
            >
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {field.label}
              </span>

              <Button
                color="error"
                variant="outlined"
                onClick={() => deleteField(index)}
                size="small"
              >
                Delete
              </Button>
            </Box>
          ))
        )}
      </Box>

      <Button
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => setSchema([])}
      >
        Reset Schema
      </Button>

      {/* Toast for add/delete action */}
      <ToastBar open={toastOpen} message={toastMessage} onClose={handleCloseToast} />
    </Box>
  );
}
