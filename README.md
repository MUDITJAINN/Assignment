# Calendar Application for Communication Tracking

## Objective
Develop a React-based calendar application to track and manage communications with companies. The app ensures timely follow-ups, consistency, and actionable insights for professional engagement.

## Features

### Admin Module
- **Company Management**
  - Add, edit, delete company profiles with details like name, location, LinkedIn profile, emails, phone numbers, comments, and communication periodicity.
- **Communication Methods**
  - Manage communication types with attributes such as name, description, sequence, and mandatory status.
  - Default methods:
    1. LinkedIn Post
    2. LinkedIn Message
    3. Email
    4. Phone Call
    5. Other

### User Module
- **Dashboard**
  - Grid view showing company details:
    - Company Name
    - Last Five Communications
    - Next Scheduled Communication
  - Color-coded highlights:
    - **Red:** Overdue communication
    - **Yellow:** Communication due today
- **Communication Logging**
  - Log new communications with type, date, and notes.
  - Automatically resets overdue and due highlights.
- **Notifications**
  - Overdue and due tasks displayed in grids.
  - Notification icon badge shows counts.

### Calendar View
- **Past Communications:** View historical dates and methods of interactions.
- **Upcoming Communications:** Manage future schedules visually.

### Reporting and Analytics (Optional)
- **Communication Frequency Report**
  - Visualize communication method usage.
- **Engagement Effectiveness**
  - Track effectiveness of different methods.
- **Overdue Communication Trends**
  - Trendline or heatmap for overdue actions.
- **Downloadable Reports**
  - Export insights in PDF/CSV formats.
- **Real-Time Activity Log**
  - Live feed of communication activities.

## Installation

### Prerequisites
- Node.js (v16 or later)
- NPM or Yarn package manager

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/calendar-communication-tracker.git
   cd calendar-communication-tracker
