# ☕ GetMeAChai  

> A simple way for creators to receive support — no clutter, no complexity.  

GetMeAChai is a minimal creator support platform where fans can visit a creator’s page, leave a message, and send a payment. It focuses on doing one thing well: giving creators a clean, shareable page to receive appreciation from their audience.

---

## ✨ What it does  

Each creator gets a public page where supporters can:
- leave a message  
- send a payment  
- show appreciation in a simple way  

The experience is designed to be fast, clean, and distraction-free.

---

## 🚀 Features  

- GitHub authentication using NextAuth  
- Public creator pages at `/<username>`  
- Razorpay payment integration  
- Personalized support messages  
- Creator dashboard for profile management  
- Profile and cover image support  
- Payment history with top supporters  
- Dynamic pages with metadata  
- Clean landing and about page  

---

## 🧑‍🎨 Creator Flow  

1. Sign in with GitHub  
2. Open the dashboard  
3. Set username, profile image, cover image, and Razorpay keys  
4. Share the public page link  
5. Receive payments and messages  

---

## 🙌 Supporter Flow  

1. Open a creator’s page  
2. Enter name, message, and amount  
3. Complete the payment via Razorpay  
4. Payment gets verified and appears on the page  

---

## 🛠️ Tech Stack  

- Next.js 16  
- React 19  
- Tailwind CSS 4  
- MongoDB with Mongoose  
- NextAuth  
- Razorpay  
- React Toastify  

---

## 📂 Project Structure  

```text
app/
|-- actions/        Server actions (user + payments)
|-- api/            Auth & Razorpay routes
|-- components/     UI components
|-- dashboard/      Creator dashboard
|-- login/          Login page
|-- about/          About page
|-- [username]/     Public creator page
|-- db/             Database connection
|-- models/         Schemas

public/             Static assets
```

---

## ⚙️ Running Locally  

### 1. Install dependencies  

```bash
npm install
```

### 2. Setup environment variables

Create ```.env.local```
```
GITHUB_ID=your_github_oauth_app_client_id
GITHUB_SECRET=your_github_oauth_app_client_secret
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_URL=http://localhost:3000
```

### 3. Start MongoDB

Currently connected to:
```
mongodb://localhost:27017/GetMeAChai
```

### 4. Run the app

```bash
npm run dev
```

Open → http://localhost:3000

## ⚠️ Important Setup

Each creator must add their own Razorpay keys in the dashboard:
- razorpay_key_id
- razorpay_key_secret

Without these, payments will not work.

## 💡 Why this project stands out

Most creator platforms try to do too much.
This one keeps things simple:

- A personal page for every creator
- A smooth way to send support
- No unnecessary complexity

It’s also a solid full-stack project covering authentication, database design, dynamic routing, and payment integration.

## 🔮 Future Improvements
- Add more auth providers
- Move database config to environment variables
- Improve validation and error handling
- Add creator analytics
- Support custom thank-you messages
- Improve dashboard polish

## 🎥 Demo Checklist
Before starting the project, check:

- MongoDB is running
- itHub OAuth is configured
- Razorpay keys are added

Otherwise, the payment flow won’t complete properly.

## 👨‍💻 Built By

Tanmay Joshi
