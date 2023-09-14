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
Follow these steps to get started with the Personal Finance App:

1. **Clone this repository into your local machine**:

```bash
git clone https://github.com/emmy3000/FusionFinance/tree/main
```



2. **Create a Virtual Environment** (optional but recommended):

It's good practice to work in a virtual environment to in order to isolate project dependencies.
If you haven't set up a virtual environment, you can create one using Python's built-in `venv` module.

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



3. **Install the Flask package and its dependencies**:

Install the necessary Python packages using pip. Make sure your virtual environment is activated
before running this command.
```bash
pip install Flask
pip install -r requirements.txt
```



4. **Execute the following commands needed for creating a python file with any name of your choosing,
grant permissions for changing its mode to a file excutable and then open the file on your favourite
text editor**

```bash
sudo touch my_simple_server.py
sudo chmod +x my_simple_server.py
sudo vim my_simple_server.py
```



5. **Define a simple Flask App server because its important to determine if the package was installed
successfully, you can find a very simple implementation on the
official website**[Simple Flask Server App](https://flask.palletsprojects.com/en/2.3.x/quickstart/).

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
- You have include the `If __name__ == '__main__'` at the bottom indicating that current module 
is a reusable module, and its code can be accessed and used by the importing scripts.
- `class Flask` calls its method `run()` with arg `debug=True` activating Debug Mode to enable its 
on start-up execution persistent and not shutdown when it experiences slight modifications during its
development cycle.



6. **Run the App**:

Start the Flask development server by executing the command shown below:
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
- The app should now be running locally. Open your web browser and navigate
to [http://localhost:5000](http://localhost:5000) to access the app.
- Also if you want to shut it down you can just execute the Keyboard interrupt by pushing `CTRL+C`.


## Contributing

We welcome contributions from the community! If you'd like to contribute to the project, you can:

- [Report issues](https://github.com/emmy3000/FusionFinance/issues) for bug reports or feature requests.
- Fork the repository and create a new branch for your changes.
- Submit pull requests to address issues or add new features.

Please read our [Contribution Guidelines](CONTRIBUTING.md) for more details on how to contribute.



## Feedback

We value your feedback! If you have any suggestions, bug reports, or questions,
please open an issue on our [GitHub repository](https://github.com/emmy3000).
Your input helps us improve the project and provide a better experience for our users.

