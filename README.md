
# React App with Formik: Sign Up and Login Forms

This project demonstrates a simple React application with Sign Up and Login forms using Formik for form handling and validation. The app is implemented with TypeScript and designed to follow clean coding principles, good user experience (UX) practices, and accessibility standards.

---

## How to Run the Project

### Prerequisites
1. **Node.js** and **npm** or **yarn** installed on your system.
2. A code editor like **VS Code** for better development experience.

### Steps to Run
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project folder**:
   ```bash
   cd LoginReact
   cd loginpage
   ```
3. **Install dependencies**:
   ```bash
   npm install
   npm install yum formik
   ```
   Or, if using Yarn:
   ```bash
   yarn install
   ```
4. **Run the application**:
   ```bash
   npm start
   ```
   Or:
   ```bash
   yarn start
   ```
5. **Open the app in the browser**:  
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## Design Choices Made

### 1. Form Handling with Formik
- Formik was chosen for its lightweight and flexible nature, simplifying the handling of form state, validation, and submission.
- Validation was implemented using `Yup` for concise and powerful schema-based validation.

### 2. TypeScript
- TypeScript ensures type safety and better readability of code, reducing runtime errors and improving maintainability.

### 3. User Experience
- The forms use a clean layout with proper labels and placeholders for accessibility.
- Input errors are displayed near their respective fields for immediate feedback.
- Upon successful form submission, success messages (`"Sign Up Successful"` or `"Login Successful"`) are displayed to the user.

### 4. Custom Styling
- Buttons were designed with modern aesthetics using `CSS`. A gradient background, hover effects, and smooth transitions make the buttons visually appealing.

### 5. Accessibility
- Labels are properly associated with input fields using `htmlFor` attributes.
- ARIA roles and attributes ensure that assistive technologies can easily interpret the forms.

---

## Assumptions and Limitations

### Assumptions
- **Valid Email Format**: It is assumed that users will input valid email addresses during sign-up and login.
- **Password Strength**: A basic password strength indicator is included, but it only demonstrates visual feedback. It doesn't enforce password strength rules.

### Limitations
1. **Styling Frameworks**: The app avoids third-party UI libraries (like Material-UI or Bootstrap) as per the constraints. Therefore, some UI elements may lack the sophistication of fully-styled frameworks.
2. **Backend Integration**: This project is frontend-only. No API calls or backend authentication mechanisms are implemented.
3. **Persistent Login State**: While the "Remember Me" checkbox is implemented, its functionality is limited to saving the email in `localStorage`. Full authentication state management is not included.
4. **Responsive Design**: The current layout is basic and optimized for desktop screens. Full responsive design is not implemented.

---

## Project Structure

```
react-formik-app/
├── src/
│   ├── components/
│   │   ├── SignUpForm.tsx
│   │   ├── LoginForm.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── styles.css
├── package.json
├── tsconfig.json
├── README.md
```

---

Feel free to reach out if you have any questions or suggestions for improving this project! 😊
