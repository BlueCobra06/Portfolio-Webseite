const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8000;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const errors = [];
    
    if (!name || name.trim() === '') {
        errors.push('Name ist erforderlich');
    }
    
    if (!email || email.trim() === '' || !isValidEmail(email)) {
        errors.push('Gültige E-Mail-Adresse ist erforderlich');
    }
    
    if (!message || message.trim() === '') {
        errors.push('Nachricht ist erforderlich');
    }
    
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    
    const logData = `=== NEUE NACHRICHT - ${new Date().toLocaleString('de-DE')} ===\n`;
    const logContent = logData +
        `Name: ${name.trim()}\n` +
        `E-Mail: ${email.trim()}\n` +
        `Nachricht: ${message.trim()}\n` +
        `==============================\n\n`;
    

    const logPath = path.join(__dirname, 'logs', 'messages.log');
    

    const logsDir = path.dirname(logPath);
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFile(logPath, logContent, (err) => {
        if (err) {
            console.error('Fehler beim Speichern:', err);
            return res.status(500).json({ error: 'Fehler beim Speichern der Nachricht' });
        }
        
        res.json({ 
            success: true, 
            message: 'Nachricht erfolgreich empfangen!' 
        });
    });
});


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

app.listen(PORT, () => {
    console.log(`✅ Server läuft auf http://localhost:${PORT}`);
    console.log('📧 Contact endpoint: POST /contact');
});

process.on('SIGTERM', () => {
    console.log('Server wird beendet...');
    process.exit(0);
});
