
````markdown
# React Widget Dashboard

A dynamic dashboard application built with React and Zustand for managing widgets across categories. Users can add, remove, and search widgets within categories like CSM, CWPP, Image, and Ticket.

---

## 📦 Features

- Dynamic category-based widgets
- Add and remove widgets from categories
- Search widgets across all categories
- Persistent widget state using Zustand
- Responsive sidebar with confirm/cancel actions
- Checkbox selection for widgets
- Simple UI with Tailwind CSS

---

## 📥 Project Setup

Follow these steps to get the project running locally:

### 1. Clone the repository

```bash
git clone https://github.com/devraj27dec/react-widget-dashboard.git
cd react-widget-dashboard
````

### 2. Install dependencies

Using npm:

```bash
npm install
```


### 3. Start the development server

```bash
npm run dev
```

---

## 🗂 Folder Structure

```
assignment/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Sidebar.tsx
│  │  ├─ CategoryStepper.tsx
│  ├─ store/
│  │  ├─ widgetStore.ts
│  ├─ types/
│  │  ├─ types.ts
│  ├─ App.tsx
│  ├─ index.tsx
├─ package.json
├─ tsconfig.json
```

---

## ⚙️ Usage

1. Open the sidebar by clicking the "Add Widget" button.
2. Navigate between categories (CSM, CWPP, Image, Ticket).
3. Select widgets using checkboxes.
4. Confirm selection to add widgets to the dashboard.
5. Use the cross icon on each widget to remove it.
6. Use the search bar to find widgets dynamically.

---

## 💡 Technologies Used

* React 18+
* TypeScript
* Zustand (state management)
* Tailwind CSS
* Lucide-react (icons)

---

## 📌 Notes

* Each widget can have a unique title and description.
* Widget state is maintained per category.
* Users can dynamically add or remove widgets per category.

---

## 📝 Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make changes and commit: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

---

## 📄 License

This project is licensed under the MIT License.

```


