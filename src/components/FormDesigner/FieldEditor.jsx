import { Box, TextField, MenuItem, Button } from "@mui/material";
import { useState } from "react";

const FIELD_TYPES = ["text", "number", "select", "date", "checkbox", "radio"];

export default function FieldEditor({ onAdd }) {
  const [field, setField] = useState({ type: "text", label: "" });

  const updateField = (key, value) => {
    setField({ ...field, [key]: value });
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} width={"100%"}>
      <TextField
        label="Label"
        value={field.label}
        onChange={(e) => updateField("label", e.target.value)}
      />

      <TextField
        select
        label="Field Type"
        value={field.type}
        onChange={(e) => updateField("type", e.target.value)}
      >
        {FIELD_TYPES.map((t) => (
          <MenuItem key={t} value={t}>
            {t}
          </MenuItem>
        ))}
      </TextField>

      <Button
        variant="contained"
        onClick={() => {
          if (field.label.trim() === "") return;
          onAdd(field);
          setField({ type: "text", label: "" });
        }}
      >
        Add Field
      </Button>
    </Box>
  );
}
