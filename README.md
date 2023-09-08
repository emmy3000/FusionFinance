# FusionFinance - A Personal Finance App

Welcome to the Personal Finance App, a web application designed to help users manage their finances, track expenses, monitor investments, and learn about personal finance concepts. This app aims to provide users with tools and resources to make informed financial decisions and improve their financial well-being.

## Project Goal
The goal of this project is to create a user-friendly and feature-rich web application that empowers users to:

- Track their expenses and income.
- Manage their assets and investments.
- Set and monitor financial goals.
- Access real-time stock market data.
- Learn through educational articles and resources.
- Engage in interactive financial games.

## Features
- User registration and authentication.
- Transaction tracking for expenses and income.
- Asset management and investment tracking.
- Goal-setting and progress tracking.
- Stock market data integration.
- Educational content and news articles.
- Interactive financial games for learning.

## Getting Started
Follow these steps to get started with the Personal Finance App:

1. **Clone this repository** to your local machine:
```python
git clone https://github.com/emmy3000/FusionFinance/tree/main
```

2. **Create a Virtual Environment** (optional but recommended):

It's a good practice to work in a virtual environment to isolate project dependencies. If you haven't set up a virtual environment, you can create one using Python's built-in `venv` module.

- Create a virtual environment
```python
python3 -m venv venv
```

- Activate your virtual environmet(on MacOS/Linux)
```python
source venv/bin/activate
```

- Activate your virtual environmet(on Windows)
```python
venv\Scripts\activate
```

3. **Install Dependencies**:

Install the necessary Python packages using pip. Make sure your virtual environment is activated before running this command.
```python
pip install -r requirements.txt
```

4. **Create a python executable with any name of your choosing and define a simple Flask App serber because its important to determine if it was installed successfully, you could just copy one from the official website [Simple Flask Server App](https://flask.palletsprojects.com/en/2.3.x/quickstart/).
```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

5. **Run the App**:

Start the Flask development server by executing the command shown below:
```python
flask run
```

6. **If its execution was successful you'd see this information below printed on your terminal**
```bash
~/path/to/project: flask run
  * Serving Flask app 'flaskblog'
  * Debug mode: off
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
  * Running on http://127.0.0.1:5000
Press CTRL+C to quit

```
The app should now be running locally. Open your web browser and navigate to [http://localhost:5000](http://localhost:5000) to access the app.

5. **Contributing**:
We welcome contributions from the community! If you'd like to contribute to the project, please follow our contribution guidelines.

### Feedback
If you have any feedback, suggestions, or issues, please open an issue on GitHub.

