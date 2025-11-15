import {
  Box,
  TextField,
  MenuItem,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

const FIELD_TYPES = ["text", "number", "select", "date", "checkbox", "radio"];

export default function FieldEditor({ onAdd }) {
  const [field, setField] = useState({
    type: "text",
    label: "",
    required: false,
    min: "",
    max: "",
    pattern: "",
  });

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

      <FormControlLabel
        control={
          <Checkbox
            checked={field.required}
            onChange={() => updateField("required", !field.required)}
          />
        }
        label="Required"
      />

      {field.type === "number" && (
        <>
          <TextField
            label="Min Value"
            type="number"
            value={field.min}
            onChange={(e) => updateField("min", e.target.value)}
          />

          <TextField
            label="Max Value"
            type="number"
            value={field.max}
            onChange={(e) => updateField("max", e.target.value)}
          />
        </>
      )}

      {field.type === "text" && (
        <TextField
          label="Pattern (Regex)"
          value={field.pattern}
          onChange={(e) => updateField("pattern", e.target.value)}
        />
      )}
      {(field.type === "select" || field.type === "radio") && (
        <Box>
          <TextField
            label="Add Option"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          />
          <Button
            onClick={() => {
              if (!option.trim()) return;
              updateField("options", [...(field.options || []), option]);
              setOption("");
            }}
          >
            Add
          </Button>

          <ul>
            {(field.options || []).map((opt, i) => (
              <li key={i}>{opt}</li>
            ))}
          </ul>
        </Box>
      )}

      <Button
        variant="contained"
        onClick={() => {
          if (field.label.trim() === "") return;

          onAdd(field);

          setField({
            type: "text",
            label: "",
            required: false,
            min: "",
            max: "",
            pattern: "",
          });
        }}
      >
        Add Field
      </Button>
    </Box>
  );
}
