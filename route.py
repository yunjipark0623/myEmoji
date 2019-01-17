from flask import Flask, render_template, request, send_file
#from flask_uploads import UploadSet, configure_uploads, IMAGES
#from typing import Any
import os
from flask_cors import CORS
# from flask import jsonify
# import json
# import urllib.request

app = Flask(__name__, template_folder='templates')
CORS(app)

@app.route('/', methods=["GET", "POST"])
def index():
    return render_template("test.html")


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=int(os.getenv('VCAP_APP_PORT', '10000')))
