import { Box, Button, Typography } from "@mui/material";
import FieldEditor from "./FieldEditor";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function DesignerPanel({ schema, setSchema }) {
  const addField = (field) => {
    setSchema([...schema, field]);
  };

  const deleteField = (index) => {
    const updated = schema.filter((_, i) => i !== index);
    setSchema(updated);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(schema);
    const [movedField] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, movedField);

    setSchema(items);
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

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="fields">
          {(provided) => (
            <Box mt={3} ref={provided.innerRef} {...provided.droppableProps}>
              {schema.map((field, index) => (
                <Draggable
                  key={field.id ?? index}
                  draggableId={String(field.id ?? `field-${index}`)}
                  index={index}
                >
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      padding="8px"
                      marginBottom="8px"
                      border="1px solid #ddd"
                      borderRadius="6px"
                      sx={{
                        backgroundColor: "#fafafa",
                        cursor: "grab",
                      }}
                      style={{ ...(provided.draggableProps?.style || {}) }}
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        <span
                          {...provided.dragHandleProps}
                          style={{ cursor: "grab", userSelect: "none", marginRight: 8 }}
                          aria-label="drag-handle"
                        >
                          ☰
                        </span>
                        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {field.label}
                        </span>
                      </Box>

                      <Button
                        color="error"
                        variant="outlined"
                        onClick={(e) => {
                          e.stopPropagation(); 
                          deleteField(index);
                        }}
                        size="small"
                      >
                        Delete
                      </Button>
                    </Box>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>

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
