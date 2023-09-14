# FusionFinance - A Personal Finance App

Welcome to the Personal Finance App, a web application designed to help users manage their finances,
track expenses, monitor investments, and learn about personal finance concepts. This app aims to 
provide users with tools and resources to make informed financial decisions and improve their
financial well-being.

## Project Goal
The goal of this project is to create a user-friendly and feature-rich web application that
empowers users to:

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
Follow these steps in order to start setting up the FusionFinance App:

1. **Clone this repository into your local machine**:

```bash
git clone https://github.com/emmy3000/FusionFinance/tree/main
```



2. **Create a virtual environment** (optional but recommended):

Working in a virtual environment is a best practice for isolating project dependencies.
If you haven't set up a virtual environment yet, you can create one using Python's built-in `venv` module.

- Create a virtual environment
```bash
python3 -m venv venv
```

- Activate your virtual environmet(on MacOS/Linux)
```bash
source venv/bin/activate
```

- Activate your virtual environmet(on Windows)
```bash
venv\Scripts\activate
```



3. **Install Flask and its dependencies**:

Use pip to install the required Python packages. Ensure that your virtual environment is activated before running this command.
```bash
pip install Flask
pip install -r requirements.txt
```



4. **Create a script**(commonly named `app.py` or `run.py`):

```bash
# Create a Python script file with a `.py` extension
sudo touch my_simple_server.py

# Grant execute permissions to the script
sudo chmod +x my_simple_server.py

# Open the script for a simple server logic definition
sudo vim my_simple_server.py
```



5. **Checking Flask Installation with a Simple Flask App Server**
To confirm a successful Flask package installation, we'll set up a basic Flask App server. You can also refer to 
the official website for a straightforward implementation: [Simple Flask Server App](https://flask.palletsprojects.com/en/2.3.x/quickstart/).

```python
#!/usr/bin/python3

from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


# include this conditional after copy/pasting the code above
# from Flask's official website
if __name__ == '__main__':
    app.run(debug=True)

```
- Include if `__name__ == '__main__'` at the end of your script to indicate that the module is reusable and can be 
accessed and used by other scripts.
- The `Flask` class calls its `run()` method with the argument `debug=True`, which activates **Debug Mode**. 
- This mode allows the application to persistently run and not shut down when experiencing minor modifications during 
   development.



6. **Run the App**:

Start the Flask development server by executing this command.
```bash
python3 my_simple_server.py
```



7. **If it launched successful you'd find this sort of information printed on your terminal**
```bash
(venv)~/FusionFinance: python3 my_simple_server.py
  * Serving Flask app 'my_simple_server'
  * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
  * Running on http://127.0.0.1:5000
Press CTRL+C to quit
  * Restarting with stat
  * Debugger is active!
  * Debugger PIN: 112-443-767

```
- The app is now running locally. Open your web browser and go to `http://localhost:5000` to access it.
- To shut it down, simply press **CTRL+C** for a Keyboard interrupt.


## Contributing

I appreciate contributions from the community! If you'd like to contribute to the project, you can:

- [Report issues](https://github.com/emmy3000/FusionFinance/issues) for bug reports or feature requests.
- Either fork or clone the repository and create a new branch for your changes.
- Submit pull requests to address issues or add new features.

Please read the [Contribution Guidelines](CONTRIBUTING.md) for more details on how to contribute.



## Feedback

I value your feedback! If you have any suggestions, bug reports, or questions, please open an issue
on the [GitHub repository](https://github.com/emmy3000). Your input helps me improve the project and provide a better
experience for users

