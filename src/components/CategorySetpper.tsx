import { useState } from "react";
import { categories } from "../index";
import { X } from "lucide-react";

interface CategoryStepperProps {
  selectedWidgets: number[];
  setSelectedWidgets: React.Dispatch<React.SetStateAction<number[]>>;
  onAddWidget: (categoryId: number, name: string, text: string) => void;
  removeWidget: (categoryId: number, widgetId: number) => void;
}


export default function CategoryStepper({
  selectedWidgets,
  setSelectedWidgets,
  onAddWidget,
  removeWidget
}: CategoryStepperProps) {
  const [currentStep, setCurrentStep] = useState<number>(categories[0].id);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");

  const currentCategory = categories.find((c) => c.id === currentStep);

  const toggleWidget = (widgetId: number) => {
    const updated = selectedWidgets.includes(widgetId)
      ? selectedWidgets.filter((id) => id !== widgetId)
      : [...selectedWidgets, widgetId];

    setSelectedWidgets(updated);
  };


  const handleAdd = () => {
    if (!newName.trim() || !newText.trim()) return;
    onAddWidget(currentStep, newName, newText);
    setNewName("");
    setNewText("");
    setShowForm(false);
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex space-x-6 border-b px-4 py-2 text-gray-500">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setCurrentStep(category.id);
              setShowForm(false);
            }}
            className={`text-[14px] font-medium cursor-pointer transition-colors ${
              currentStep === category.id
                ? "text-blue-900 border-b-2 border-blue-900 pb-1"
                : "hover:text-gray-700"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Subcategories (below header) */}
      <div className="p-4 space-y-2">
        {currentCategory?.widgets?.map((widget) => (
          <label
            key={widget.id}
            className="flex items-center space-x-2 p-2 border rounded-lg text-sm cursor-pointer hover:bg-gray-50"
          >
            <input
              type="checkbox"
              checked={selectedWidgets.includes(widget.id)}
              onChange={() => toggleWidget(widget.id)}
              className="h-4 w-4 text-gray-300 bg-blue-900 border-gray-300 rounded focus:ring-blue-500"
            />
            <span>
              <strong>{widget.name}</strong> - {widget.text}
            </span>

            <button
              onClick={() => removeWidget(currentCategory.id, widget.id)}
              className="text-red-500 hover:text-red-700 cursor-pointer absolute right-0 mr-6"
            >
              <X size={18} />
            </button>
          </label>
        ))}

        {/* + Add Widget Button */}
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="mt-2 text-blue-600 text-sm hover:underline"
          >
            + Add Widget
          </button>
        ) : (
          <div className="mt-2 space-y-2 border p-2 rounded">
            <input
              type="text"
              placeholder="Widget Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full border p-1 rounded text-sm"
            />
            <input
              type="text"
              placeholder="Widget Text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="w-full border p-1 rounded text-sm"
            />
            <div className="flex space-x-2">
              <button
                onClick={handleAdd}
                className="px-3 py-1 text-sm bg-blue-900 text-white rounded"
              >
                Save
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="px-3 py-1 text-sm border rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
