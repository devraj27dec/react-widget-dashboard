// store/widgetStore.ts
import { create } from "zustand";

interface Widget {
  id: number;
  title: string;
  categoryId: number;
}

interface WidgetState {
  widgets: Record<number, Widget[]>; 
  addWidget: (categoryId: number, widget: Widget) => void;
  removeWidget: (categoryId: number, widgetId: number) => void;
}

export const useWidgetStore = create<WidgetState>((set) => ({
  widgets: {},

  addWidget: (categoryId, widget) =>
    set((state) => {
      const existing = state.widgets[categoryId] || [];
      if (existing.find((w) => w.id === widget.id)) return state;
      
      return {
        widgets: {
          ...state.widgets,
          [categoryId]: [...existing, widget],
        },
      };
    }),

  removeWidget: (categoryId, widgetId) =>
    set((state) => {
      const existing = state.widgets[categoryId] || [];
      return {
        widgets: {
          ...state.widgets,
          [categoryId]: existing.filter((w) => w.id !== widgetId),
        },
      };
    }),
}));
