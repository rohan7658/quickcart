# QuickCart

QuickCart is a Progressive Web App (PWA) that helps users navigate supermarkets efficiently by providing text-based navigation according to their shopping lists. The platform allows users to input their shopping lists, sorts them based on product locations, and provides an optimized path to minimize search time. Store management can dynamically update product locations to keep navigation accurate.

## Features

### User Features
- **Authentication**: Register, login, and logout functionality.
- **Home Page**:
  - Displays a welcome message.
  - Shows an option to create a new shopping list.
  - Lists previously created shopping lists with options to edit, view optimized navigation, and delete.
- **Shopping List Creation**:
  - Input field to add product names and specify quantities.
  - Dynamic search with a dropdown showing matching items from the database.
  - Option to select a suggested item to autofill the input field.
  - Button to optimize the list and display the best navigation route.
  - Button to save the shopping list.
- **Navigation Assistance**:
  - Shopping list sorted according to in-store locations.
  - Each item is displayed with details like serial number, name, quantity, price, image, and location (e.g., 1st floor, 3rd aisle, 6th row).
  - Optimized path to save shopping time.
  - Real-time updates reflecting product location changes.

### Admin Features
- **Admin Dashboard**:
  - Add and update product details, including name, serial number, quantity, price, image, and location.
  - Manage product data dynamically, reflecting changes instantly.
  - View and manage customer shopping lists.
  - Update store layout to improve navigation efficiency.

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (LTS version recommended)
- **npm** or **yarn**

### Steps to Run Locally
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/QuickCart.git
   cd QuickCart
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```

## Contribution Guidelines
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m 'Added new feature'`.
4. Push the branch: `git push origin feature-name`.
5. Open a Pull Request.
