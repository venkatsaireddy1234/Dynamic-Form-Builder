import { Box, Button, Typography } from "@mui/material";
import FieldEditor from "./FieldEditor";

export default function DesignerPanel({ schema, setSchema }) {
  const addField = (field) => {
    setSchema([...schema, field]);
  };

  const deleteField = (index) => {
    const updated = schema.filter((_, i) => i !== index);
    setSchema(updated);
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
    </Box>
  );
}
