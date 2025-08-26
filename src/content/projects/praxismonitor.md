---
title: "PRAXIS-MONITOR"
description: "Mit dem PraxisMonitor‑System werden Patientinnen und Patienten im Wartebereich digital aufgerufen, während auf Displays informative Bilder und Videos angezeigt werden."
heroImage: "/Praxis1.png"
websiteUrl: "https://github.com/MikaGriebsch/PraxisMonitor"
linkType: "github"
year: "2025"
tags: ["Automatisierung", "Performanceverbesserung", "Django"]
featured: true
extraImage: "/Praxis2.png"
---

## Praxis-Monitor

<br>

### Projektübersicht

**Praxis-Monitor** ist eine webbasierte Lösung zur Digitalisierung des Patientenaufrufs im Wartezimmer. Das System zeigt vom Team gewünschte Informationen, wie z.B. Wartezimmer-Nr. in Kombination mit dem Namen der Patient:innen an und dient zugleich als Infotainment-Plattform via Monitor mit Bildern und Videos. Ziel ist die Minimierung manuellen Aufwands bei gleichzeitiger Steigerung der Patientenkommunikation.

<br>

---  
<br>

### Technische Umsetzung

- **Backend**:
  - **Django Framework** auf Python‑Basis, inklusive Benutzerverwaltung
  - **Accountrollen**: Administratoren (z. B. Praxispersonal) und Display-Modus ohne Login  
  - **REST API** zur Steuerung der Aufrufsteuerung und der Content-Verwaltung

- **Datenbank**:
  - Relationale DB - SQLite

- **Admin-Oberfläche**:
  - Dashboard zum Verwalten von Patientenaufrufen, Logik zur Nummerngenerierung, Upload von Medien (Bilder/Videos)  
  - Konfigurationsoptionen für Anzeigefrequenz, Loop-Settings und Slide-Inhalte

- **Display-Modus (Frontend)**:
  - Vollbild-Web-App im Display-Betrieb, ohne Login, auf Touch-Displays oder TV‑Screens
  - HTML5 + CSS + JavaScript für bestmögliche Performance und Browser-Kompatibilität

<br>

---  
<br>

### UX & Design

- **Einfaches Benutzerinterface** für das Praxispersonal zur Verwaltung interaktiver Inhalte  
- **Patientenansicht im Wartezimmer**:
  - Großdarstellung des Patienten und der Raumnummer
  - Automatische Medienrotation (Bilder & Videos)
  - Übersichtlich, kontrastreich und auch bei größeren Displays gut lesbar

<br>

---  
<br>

### Inhalte & Informationsfluss

- **Aufrufdatum/-zeit & Nummernvergabe**: automatische oder manuelle Zuweisung  
- **Medienverwaltung**: Bild- und Videocontent über Adminbereich steuerbar  
- **Playlist-Funktion**: Reihenfolge und Dauer von Slides im Zeitplan  

<br>

---  
<br>

### Technologiestack & Deployment

- **Backend**: Python 3.13.2, Django
- **Datenbank**: SQLite
- **Frontend Admin**: Django Admin oder individualisierte Templates (HTML/CSS/JS)  
- **Display-Frontend**: Standalone HTML5‑Anwendung im Loopmodus 

<br>

---  
<br>

### Fazit

Der **PraxisMonitor** bietet eine effektive und modulare Lösung für Arztpraxen: Automatisierung beim Patientenaufruf trifft auf gezielte Informationspräsentation. Technisch solide, performant konzipiert und einfach zu bedienen – ideal für moderne Praxen, die Effizienz und Patientenbindung verbessern wollen.
