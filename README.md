# Design System Frontend Challenge

## Problem Statement

You are provided with a single select combo box that has already been implemented. Your task is to change the combobox to allow multiple selected values.
When values are selected, it is reflected as a badge within the combobox's input

## Requirements

### Adding the badge

1. When values in the menu are selected, it is reflected as a badge within the combobox's input
2. User can select the menu items by three ways: keyboard, mouse and typing in the input.

- Keyboard interaction: User navigates to the menu item with arrow keys --> selects it with "Enter" --> badge reflected on combobox
- Mouse interaction: User clicks on the menu item --> badge reflected on combobox
- Typing in the input interaction: User types on the combobox's input --> there is a match with menu item --> badge reflected on combobox

3. Whenever a menu item is selected and has its badge reflected on the combobox, the menu item is also removed temporarily from the dropdown menu.

### Removing the badge

4. User can remove badge on combobox via two ways

- Keyboard: User press backspace right before the badge --> badge is removed
- Mouse: User clicks on the badge --> badge is removed.

5. Whenever a badge is removed on the combobox, its value should be restored in the dropdown menu.

### Menu behaviour

6. When a badge is added, the dropdown menu should close
7. The dropdown menu should remain open when user is typing until there is a match and a badge is added
8. When deleting badges, the dropdown menu remains close

### Image examples

![combobox-1](./img/combobox-1.png)
![combobox-2](./img/combobox-2.png)
![combobox-3](./img/combobox-3.png)
![combobox-4](./img/combobox-4.png)

## Get Started

Clone the repo. Then install.

```bash
npm install
```

Then start the dev server and rollup watchers

```bash
npm run dev
```

A browser window should open and rollup will watch your files for changes.
