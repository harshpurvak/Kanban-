# Kanban Task Board

A responsive Kanban Task Board built with React and Tailwind CSS. It allows users to create, manage, and organize tasks across different stages while storing task data locally in the browser.

## Features

* Add new tasks with:

  * Title
  * Description
  * Priority
  * Due date
* Edit existing tasks
* Delete tasks
* Move tasks between:

  * Todo
  * In Progress
  * Completed
* Search tasks by title
* Filter tasks by priority
* Filter tasks by status
* Form validation using React Hook Form
* LocalStorage persistence
* Empty state and no-results state
* Responsive layout for desktop and mobile

## Tech Stack

* React
* Vite
* Tailwind CSS
* React Hook Form
* JavaScript
* LocalStorage

## Project Structure

```text
src/
├── components/
│   ├── AddTask.jsx
│   ├── Header.jsx
│   ├── KanbanBoard.jsx
│   └── KanbanColumn.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## How It Works

The main task state is managed inside `App.jsx`.

Each task contains information such as its title, description, priority, due date, and current status.

`KanbanBoard` separates the tasks according to their status and passes them to the appropriate `KanbanColumn`.

Tasks can be moved between columns by changing their status.

React Hook Form is used for validation in both the Add Task and Edit Task forms.

Tasks are saved to LocalStorage whenever the task state changes, so the data remains available after refreshing the page.

## Run Locally

Clone the repository:

```bash
git clone <your-repository-url>
```

Go to the project directory:

```bash
cd Kanban
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Validation

The forms include basic validation such as:

* Task title is required
* Description is required
* Description must contain at least 6 words
* Priority is required
* Due date is required

## Responsive Design

The board uses a responsive layout:

* Desktop: Todo, In Progress, and Completed columns are displayed side by side.
* Mobile: Columns are stacked vertically for easier navigation.

## Author

Harshit Gusain
