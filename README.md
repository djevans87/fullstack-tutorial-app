# 🧠 Full Stack Tutorial Hub

A growing collection of short, real-world full stack development tutorials, built using modern web technologies like **Next.js 14 App Router**, **Tailwind CSS**, **TypeScript**, and **Node.js**.

Built and maintained by [Mitten Made Media Design](https://mittenmademediadesign.com).

---

## 🚀 Features Included

| ✅ Tutorial                 | 🧰 Stack                 | 📋 Description                      |
|----------------------------|--------------------------|--------------------------------------|
| Responsive Navbar          | Next.js + Tailwind        | Mobile-first nav with toggle         |
| Contact Form with Email    | Next.js API + Nodemailer  | Sends form data via email            |
| React Loading Spinner      | React + Tailwind          | UX spinner during form submission    |
| REST API Endpoint          | Next.js API (App Router)  | Basic `/api/hello` GET route         |
| 🔜 More coming soon…        |                          | Dynamic routing, file upload, auth   |

---

## 🧱 Tech Stack

- ⚛️ **Next.js 14** (App Router)
- 💨 **Tailwind CSS v4**
- ⌨️ **TypeScript**
- 📬 **Nodemailer** (for backend email)
- 🎨 **Google Fonts** (Inter)
- 📁 Modular folder structure with `app/`, `components/`, and `styles/`

---

## 📁 Project Structure

<pre>
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/
│       ├── contact/route.ts
│       └── hello/route.ts
│
├── components/
│   ├── Navbar.tsx
│   └── Spinner.tsx
│
├── styles/
│   └── globals.css
│
└── types/
    └── index.d.ts
</pre>

---

## 🧪 Getting Started

### 1. Clone the repo:
```bash
git clone https://github.com/djevans87/fullstack-tutorial-app.git
cd fullstack-tutorial-app
```
### 2. Install dependencies:
```bash
npm install
```
### 3. Run the development server:
```bash
npm run dev
```
Then open:

```arduino
http://localhost:3000
```
## 🛠️ Env Setup

Create a .env.local file in the root of the project and add:

```env
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_smtp_password
EMAIL_TO=destination@example.com
```

### 📄 License
MIT — use, share, and extend this freely.
If you post it, please tag @mittenmademediadesign 🙌

### ✨ Credits
Crafted with ❤️ by Darian Janelle Evans
Founder of Mitten Made Media Design


