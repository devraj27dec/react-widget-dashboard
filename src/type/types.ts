export interface Category {
  id: number;
  title: string;
  widgets: Widget[];
};

export interface Widget {
  id: number;
  name: string;
  text: string;
  categoryId?: number; 
}