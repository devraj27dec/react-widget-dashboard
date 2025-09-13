import { X } from "lucide-react";
import CategoryStepper from "./CategorySetpper";
import { useWidgetStore } from "../store/widget";
import { useState } from "react";
import { categories } from "../index";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const { widgets, addWidget, removeWidget } = useWidgetStore();
  const [tempSelection, setTempSelection] = useState<number[]>([]);

  const handleConfirm = () => {
    Object.entries(widgets).forEach(([categoryId, widgetList]) => {
      widgetList.forEach((w) =>
        removeWidget(Number(categoryId), w.id)
      );
    });

    tempSelection.forEach((widgetId) => {
      const category = categories.find((cat) =>
        cat.widgets.some((w) => w.id === widgetId)
      );
      if (category) {
        const widget = category.widgets.find((w) => w.id === widgetId);
        if (widget) addWidget(category.id, widget);
      }
    });

    setIsOpen(false);
  };

  const handleAddWidget = (categoryId: number, name: string, text: string) => {
    const newWidget = {
      id: Date.now(), // unique id
      name,
      text,
      categoryId,
    };
    addWidget(categoryId, newWidget);

    // Also add to temp selection
    setTempSelection((prev) => [...prev, newWidget.id]);

    // Update category mock so stepper shows it immediately
    const category = categories.find((c) => c.id === categoryId);
    if (category) {
      category.widgets.push(newWidget);
    }
  };

  const handleRemoveWidget = (categoryId: number, widgetId: number) => {
    removeWidget(categoryId, widgetId);
    setTempSelection((prev) => prev.filter((w) => w !== widgetId)); 
  };

  return (
    <aside
      className={`fixed top-0 right-0 h-full bg-white border-l shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0 w-xl" : "translate-x-full w-0 overflow-hidden"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 bg-blue-900 text-white">
        <div className="text-[18px] font-normal">Add Widget</div>
        <button onClick={() => setIsOpen(false)} className="cursor-pointer">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="p-4 text-gray-500">
        Personalize your dashboard by adding the following widgets
      </div>

      <CategoryStepper
        selectedWidgets={tempSelection}
        setSelectedWidgets={setTempSelection}
        onAddWidget={handleAddWidget}
        removeWidget={handleRemoveWidget}
      />

      <div className="flex justify-end space-x-2 p-4 absolute bottom-0 w-full bg-white">
        <button
          onClick={handleConfirm}
          className="px-4 py-1 rounded-md text-sm border bg-gray-100 text-black"
        >
          Confirm
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-1 rounded-md text-sm border bg-blue-900 text-white"
        >
          Cancel
        </button>
      </div>
    </aside>
  );
}
