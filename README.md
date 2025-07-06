## 📬 Email Sender App with Next.js + Brevo  
## 📬 Aplicación para Envío de Correos con Next.js + Brevo

### 📝 Description | Descripción
A simple web app built with Next.js that allows sending emails from a single verified sender to a list of recipients stored in a database, using [Brevo (Sendinblue)](https://www.brevo.com/).

Una aplicación web sencilla construida con Next.js que permite enviar correos desde un remitente único verificado a una lista de destinatarios almacenados en una base de datos, usando [Brevo (Sendinblue)](https://www.brevo.com/).

---

### ⚙️ Features | Funcionalidades
- ✅ Responsive form for entering subject and content  
- 📧 Email delivery using Brevo SMTP/API  
- 📦 Recipient management via database (Prisma + SQLite/MongoDB)  
- 🔐 Uses `.env.local` for secure credentials  

- ✅ Formulario responsivo para ingresar asunto y contenido  
- 📧 Envío de correos usando SMTP/API de Brevo  
- 📦 Gestión de destinatarios vía base de datos (Prisma + SQLite/MongoDB)  
- 🔐 Uso de `.env.local` para credenciales seguras

---

### 🚀 Installation | Instalación

```bash
git clone https://github.com/tu-usuario/email-sender-app.git
cd email-sender-app
npm install
```

---

### 🔧 Configuration | Configuración

Create a `.env.local` file with your Brevo API Key and sender email:

Crea un archivo `.env.local` con tu clave API de Brevo y el correo del remitente:

```env
BREVO_API_KEY=tu_clave_api
SENDER_EMAIL=tu_correo@ejemplo.com
```

Make sure your sender email is verified in your Brevo dashboard.

Asegúrate de que tu correo remitente esté verificado en tu panel de Brevo.

---

### 🖥️ Usage | Uso

```bash
npm run dev
```

1. Open your browser and go to `http://localhost:3000`
2. Fill in the subject and message
3. Click "Enviar" to send to all registered recipients

1. Abre tu navegador y accede a `http://localhost:3000`  
2. Rellena el asunto y contenido  
3. Haz clic en "Enviar" para enviar a todos los destinatarios registrados

---

### 📚 Tech Stack | Tecnologías
- **Next.js**  
- **TypeScript**  
- **Prisma + SQLite (or MongoDB)**  
- **Brevo API**

---

### 📩 Notes | Notas
- Your Brevo SMTP access must be activated by their support team.  
- Make sure to follow best practices: verified sender, authenticated domain (DKIM/DMARC).

- El acceso SMTP de Brevo debe ser activado por su equipo de soporte.  
- Asegúrate de seguir buenas prácticas: remitente verificado, dominio autenticado (DKIM/DMARC).

---
