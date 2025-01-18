# Date Range Picker

A React-based date range picker component that allows users to select a date range, with a focus on weekdays.

---
Live Link 🚀 - [DateRangePicker](https://datepicker-iota.vercel.app/)
---
## Features
- Select a date range with a start and end date.
- Weekday-only selection (Monday to Friday).
- Selecte Last 30 days and just current month
- Responsive design for desktop and mobile devices.

---

## File Structure

The project structure is organized as follows:

```plaintext
daterpicker/
├── src/
│   ├── components/
│   │   ├── WeekdayDateRangePicker.js    # Main component Date picker logic
│   │   ├── DatePickerWrapper.js         # Date picker Wrapper Parent comp for WeekdayDateRangePicker
│   │   ├── DatePickerWrapper.css        # Styling for the Wrapper    
│   │   └── WeekdayDateRangePicker.css   # Styling for the picker
│   ├── index.js                         # Entry point for the package
│   └── App.js                           # App Parent comp
├── public/
│   ├── index.html                       # HTML template
│   └── favicon.ico                      # App icon
├── .gitignore                           # Git ignored files
├── package.json                         # NPM package details
├── README.md                            # Documentation
└── LICENSE                              # License information
```
---

## Development

To contribute to the development of the ** Date Range Picker** component:

### Clone the Repository:

```bash
git clone https://github.com/your-username/datepicker.git
```

### Install Dependencies:

```bash
npm install
```

### Start the Development Server:

```bash
npm start
```

This will start the app on `http://localhost:3000` for local development and testing.

---

## UI SNAPS-
<img width="934" alt="Screenshot 2025-01-19 at 12 27 06 AM" src="https://github.com/user-attachments/assets/83f8689f-2173-4310-8f70-005c913435dc" />
<img width="920" alt="Screenshot 2025-01-19 at 12 28 06 AM" src="https://github.com/user-attachments/assets/f57f53ee-c76f-430e-8b42-ac7944894e40" />

---
## License

The **Date Range Picker** component is licensed under the [MIT License](LICENSE).

---

Feel free to suggest improvements or report issues by submitting an issue or pull request in the GitHub repository.
