import type { Category } from "./type/types";

export const categories: Category[] = [
  {
    id: 1,
    title: "CSM",
    widgets: [
      { id: 101, name: "Widget A", text: "Some random text", categoryId: 1 },
      { id: 102, name: "Widget B", text: "More random text", categoryId: 1 },
    ],
  },
  {
    id: 2,
    title: "CWPP",
    widgets: [
      { id: 201, name: "Widget C", text: "Random text", categoryId: 2 },
    ],
  },
  {
    id: 3,
    title: "Image",
    widgets: [
      { id: 301, name: "Image Scan Results" , text: "Random text", categoryId: 3},
      { id: 302, name: "Images" , text: "Random text", categoryId: 3}
    ]
  },
  {
    id: 4,
    title: "Ticket",
    widgets: [
      { id: 301, name: "Ticket Summary" , text: "Random text", categoryId: 4},
      { id: 302, name: "Ticket Results" , text: "Random text", categoryId: 4}
    ]
  }
];
