# Budha-FInal-Notes# Tailwind CSS CLI Setup

## Step 1: Create the Project Folder

Create a new folder for your project.

Example:

```text
TailwindProject
```

Open this folder in **VS Code**.

---

## Step 2: Create the `src` Folder

Inside the main project folder, create a folder named:

```text
src
```

The `src` folder will contain your source files.

---

## Step 3: Initialize the Node.js Project

Open the terminal in the **main project folder** and run:

```bash
npm init -y
```

This command automatically creates:

```text
package.json
```

Your project structure will look like:

```text
TailwindProject/
│
├── src/
│
└── package.json
```

---

## Step 4: Install Tailwind CSS

Open the official Tailwind CSS documentation and copy the **Tailwind CSS CLI installation command**.

Paste the command into the terminal.

After installation, check your project using:

```bash
ls
```

On Windows PowerShell, you can also use:

```powershell
dir
```

The installation will create files/folders such as:

```text
node_modules/
package-lock.json
```

Your project structure will now look similar to:

```text
TailwindProject/
│
├── node_modules/
├── src/
├── package-lock.json
└── package.json
```

---

## Step 5: Add the Tailwind Start Command

Open:

```text
package.json
```

Find the `"scripts"` section:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

Add a `start` script:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch"
}
```

> **Note:** The key is `start`, not `star`.

---

## Step 6: Create `input.css`

Inside the `src` folder, create:

```text
input.css
```

Add the Tailwind CSS import provided in the official Tailwind CSS documentation.

For Tailwind CSS v4:

```css
@import "tailwindcss";
```

Your structure:

```text
TailwindProject/
│
├── node_modules/
├── src/
│   └── input.css
├── package-lock.json
└── package.json
```

---

## Step 7: Create the Pages Folder

Inside the `src` folder, create a folder named:

```text
page
```

Inside the `page` folder, create:

```text
home.html
```

The project structure will now be:

```text
TailwindProject/
│
├── node_modules/
│
├── src/
│   ├── input.css
│   ├── page/
│   │   └── home.html
│   └── output.css
│
├── package-lock.json
└── package.json
```

> `output.css` will be generated automatically after running the Tailwind command.

---

## Step 8: Start Tailwind CSS

Run this command in the terminal:

```bash
npm start
```

Tailwind CLI will start watching your files and automatically generate:

```text
src/output.css
```

The command:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

means:

* `-i` → Input CSS file
* `-o` → Output CSS file
* `--watch` → Automatically rebuild CSS when files change

---

## Step 9: Link `output.css` in HTML

Open:

```text
src/page/home.html
```

Link the generated CSS file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Home</title>

    <link rel="stylesheet" href="../output.css">
</head>

<body>

    <h1 class="text-4xl font-bold">
        Hello Tailwind CSS
    </h1>

</body>
</html>
```

Because `home.html` is inside the `page` folder, use:

```html
<link rel="stylesheet" href="../output.css">
```

---

## Final Project Structure

```text
TailwindProject/
│
├── node_modules/
│
├── src/
│   ├── input.css
│   ├── output.css
│   │
│   └── page/
│       └── home.html
│
├── package-lock.json
└── package.json
```

## Complete Workflow

```text
Create Project Folder
        ↓
Create src Folder
        ↓
npm init -y
        ↓
Install Tailwind CSS CLI
        ↓
Create input.css
        ↓
Create page/home.html
        ↓
Add "start" Script
        ↓
npm start
        ↓
output.css Generated
        ↓
Link output.css in home.html
        ↓
Start Using Tailwind CSS
```

## Important Commands

```bash
npm init -y
```

```bash
npm start
```

```bash
ls
```

For Windows:

```powershell
dir
```
