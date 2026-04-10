# TableFlow

## Overview

TableFlow is a semi-fullstack web platform designed to manage restaurant operations. It allows both staff and customers to interact with the system.

On the admin side, you can manage:

- Orders
- Customers
- Menu items (products)
- Payments
- Settings

On the client side, users can:

- Browse the menu
- Place orders
- Choose between dine-in or takeaway

This project is mainly built for portfolio purposes and may be upgraded to a fullstack application in the future.

---

## Tech Stack

- React (JavaScript)
- Vite
- Tailwind CSS
- Redux
- React Query
- React Router v7
- Lucide React Icons

---

## Design Note

The UI design was based on a Figma file.

Warning:  
The Figma design was incomplete and did not include mobile layouts.  
As a result, the application is currently optimized for desktop only.  
This was one of the main challenges during development.

---

## Project Structure

src/
│
├── assets/ # Images and static files
├── components/ # General reusable components
├── features/ # Feature-based structure
│ ├── dashboard/
│ ├── menus/
│ ├── orders/
│ ├── payments/
│ ├── product-manage/
│ └── settings/
│
├── pages/ # Application pages (.jsx)
│ ├── AppLayout/
│ ├── Dashboard/
│ ├── GetStarted/
│ ├── Home/
│ ├── Orders/
│ ├── ProductManagement/
│ └── Settings/
│
├── ui/ # Reusable UI components

---

## Data Handling

The project uses Mock API to simulate a backend and handle data fetching.

---

## Future Improvements

- Convert the project into a fully functional fullstack application
- Add mobile responsiveness
- Improve API integration with a real backend

---

## Purpose

This project showcases my ability to:

- Build scalable React applications
- Use a feature-based architecture
- Manage state efficiently
- Work with modern frontend tools
