import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

export default function Renderer({ schema }) {
  const renderField = (field, index) => {
    switch (field.type) {
      case "text":
      case "number":
      case "date":
        return (
          <TextField
            key={index}
            label={field.label}
            type={field.type}
            fullWidth
            margin="normal"
          />
        );

      case "checkbox":
        return (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
            label={field.label}
          />
        );

      case "radio":
        return (
          <RadioGroup key={index}>
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label={field.label}
            />
          </RadioGroup>
        );

      default:
        return null;
    }
  };

  return (
    <Box style={{
        padding: 16,
        border: "1px solid #ccc",
        borderRadius: 4,
        height: "80%",
        overflow: "auto",
        width: "100%",
        
      }}>
      <h3>Form Preview</h3>
      {schema.length > 0 ? (
        schema.map((field, i) => renderField(field, i))
      ) : (
        <p>No fields added yet</p>
      )}
    </Box>
  );
}
