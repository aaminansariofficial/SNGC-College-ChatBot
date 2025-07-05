# SNGC College Chatbot

Conversational college chatbot using Flask and JSON to handle student FAQs for Sree Narayana Guru College.

This chatbot was developed using HTML, CSS, JavaScript (frontend) and Flask + Python (backend). It is capable of understanding basic college-related queries using intent-based JSON handling. It was appreciated by faculty and used as an academic mini project.

## Features
- Chatbot UI with real-time typing response  
- JSON-based intent and response system  
- Auto-launches chatbot in Microsoft Edge or Google Chrome  
- Responsive and simple HTML/CSS layout  
- Lightweight and beginner-friendly Flask backend  

## Technologies Used
- HTML5, CSS3, JavaScript  
- Python 3.x, Flask  
- JSON (for intent logic)  
- webbrowser (Python module)  

## Requirements
- Python 3.7 or higher  
- pip (Python package manager)  
- Google Chrome or Microsoft Edge browser (for auto-launch)  
- Windows OS (tested)  

## Setup Instructions
```bash
git clone https://github.com/yourusername/sngc-college-chatbot.git
cd sngc-college-chatbot
python -m venv venv
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# (Select 'A' i.e. Yes To All if prompted)
venv\Scripts\activate
pip install -r requirements.txt
```

## Run the Project
```bash
python app.py
```
Or use Code Runner in VS Code: open app.py → right-click → "Run Python File"  
The chatbot will automatically open in Microsoft Edge or Google Chrome. Make sure one of these browsers is installed.

## 🧠 Custom Training

If you want to train the chatbot with your own custom data:

1. Open the file intents.json and replace the existing questions and responses with your own.
2. Then run the following command to train the model:
   ```bash
   python train.py

## Browser Info
This chatbot uses Python’s webbrowser module to launch in a browser window. The app attempts to open in:
- Microsoft Edge  
- or Google Chrome  
If neither is installed, you can modify the browser path in app.py.

## Authors & Contributors
- Aamin Ansari  
  GitHub: https://github.com/aaminansariofficial  
  LinkedIn: https://linkedin.com/in/aaminansari  
- Mohsin Khan  
- Sumeet Mishra   
- Ravish Singh 
  
## License
This project is licensed under the MIT License. You are free to use, modify, and share it with proper credit.

## Acknowledgments
Inspired by an open-source tutorial on YouTube  
Modified and enhanced using ChatGPT and self-learning  
Special thanks to college faculty for guidance and appreciation