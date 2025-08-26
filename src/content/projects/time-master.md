---
title: "TIME MASTER"
description: "Ein Stundenplan‑Algorithmus für Grund‑ und Sekundarstufe I der ein Webportal mit personalisierten Stundenplanungen, Login-System und Administration bereitstellt."
heroImage: "/LoginPlanner.png"
websiteUrl: "https://github.com/MikaGriebsch/Planner"
linkType: "github"
year: "2025"
tags: ["Django", "Python", "Algorithmus", "Accountsystem"]
featured: true
extraImage: "/Planner.png"
---

## Time Master – Digitaler Stundenplan für Schulen

<br>

### Projektübersicht

**Time Master** ist eine webbasierte Anwendung zur automatisierten Stundenplanerstellung für die **Grund- und Sekundarstufe I**. Ziel war die Entwicklung eines robusten Algorithmus, der Klassen mit variabler Stärke in schulischen Rahmenbedingungen plant – inklusive personalisiertem Portalzugriff für Schüler:innen mit sicheren Einmalpasswörtern und individuellem Login.

<br>

--- 
<br>

### Technische Umsetzung

- **Backend**:  
  - Implementiert mit **Django** (Python), inklusive Authentifizierung, Zugangssteuerung und Admin-Oberflächen  
  - **SQL Light** als Datenbank, geeignet für einfache Deployment-Szenarien  
  - **Accountsystem**: Generierung von Einmalpasswörtern, die beim Erstlogin geändert werden müssen  
  - **Adminbereich**: Dashboard für Lehrkräfte, Schulleitung und Koordinatoren mit Benutzerverwaltung, Klassenpflege und Stundenplanübersicht

- **Algorithmus**:  
  - Optimiert für dynamische Klassengrößen und variable Stundenverteilungen  
  - Priorisierung von Rahmenbedingungen wie Fachkombinationen, Raumkapazitäten, Pausenregelungen  

- **Frontend**:  
  - Minimalistisch umgesetzt mit HTML & CSS  
  - Fokus auf Ladegeschwindigkeit, klare Struktur und einfache Benutzerführung  
  - Portalansicht für Schüler:innen mit schneller Übersicht über Stundenplan, Fächer und Zeiten

<br>

--- 
<br>

### Nutzerfreundlichkeit & UX

- **Einfacher Login-Prozess**: Einmalpasswort beim ersten Zugriff, danach individuelles Passwort  
- **Klare Portal-Darstellung**: Stunden nach Tagen strukturiert, Farbcodierung für Fächer
- **Admin-Oberfläche**: Intuitive Nutzeroberfläche zur Verwaltung von Schüler:innen, Lehrkräften, Klassen, Raumzuweisungen

<br>

--- 
<br>

### Team & Zusammenarbeit

- **Oliver Tietz** – Backend-Entwicklung  
- **Jakob Leetz** – Backend und Frontend  
- **Bjarne Kaffranke** – Planung & Algorithmus  
- **Julian Piloth** – Frontend  
- **Mika Griebsch** – Projektmanagement, Backend & Frontend

<br>

--- 
<br>

### Technologiestack & Deployment

- **Backend**: Django, Python 3.10 
- **Datenbank**: SQLite (leichtgewichtig, wartungsarm)  
- **Frontend-Präsenz**: HTML5, CSS3  
- **Deployment**: Lokal oder auf einfachen Hosting-Plattformen, durch SQLite‑Unterstützung unkompliziert skalierbar  

<br>

--- 
<br>

### Ausblick & mögliche Erweiterungen

- **Migration auf PostgreSQL/MySQL** zur Unterstützung größerer Datenmengen  
- **Modulares Plugin-System** zur Erweiterung des Algorithmus (z. B. KI‑Gestützte Stundenplanung)  
- **Responsive UX-Upgrade** z. B. mit Vue.js oder React-Komponenten  
- **Benachrichtigungsfunktionen**: E-Mail-Reminder oder Push-Benachrichtigungen bei Planänderungen  
- **Reporting & Export**: PDF-Export von Stundenplänen für Lehrkräfte und Eltern  

<br>

--- 
<br>

### Fazit

**Time Master** ist eine solide Basislösung für Schulen: ein maßgeschneiderter Stundenplanalgorithmus gekoppelt mit einem einfachen Schüler- und Adminportal. Technisch durchdacht, modular und bereit für zukünftige Erweiterungen – ideal für Bildungseinrichtungen, die ihre Planungsprozesse digitalisieren möchten.
