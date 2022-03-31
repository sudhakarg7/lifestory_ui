// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);





Installation Requirements for
All New ADX

FrontEnd Setup
Angular CLI: 12.2.3
Node: 14.17.5
Package Manager: npm 6.14.14
And following npm libraries

    "ng2-pdf-viewer": "^7.0.1",
    "ngx-chips": "^2.2.2",
    "ngx-image-cropper": "^4.0.1",
    "ngx-spinner": "^12.0.0",
    "rxjs": "~6.6.0",
    "sweetalert2": "^11.1.5",


Backend Setup
Python 3.9.7
Pytesseract
Open CV2
Spacy
Node: 14.17.5
Package Manager: npm 6.14.14


Python requirements
import threading
import time
import argparse
import pytesseract
from pytesseract import Output
from pdf2image import convert_from_path
import cv2
import spacy
from spacy.matcher import Matcher
from spacy.matcher import PhraseMatcher
from difflib import SequenceMatcher
import numpy as np
import re
from PIL import Image
import json
import nltk
import pandas as pd




NodeJs Requirement
"cors": "^2.8.5",
    "express": "^4.17.1",
    "express-formidable": "^1.2.0",
    "face-detectify": "^1.0.2",
    "gm": "^1.23.1",
    "jimp": "^0.16.1",
    "looks-same": "^7.3.0",
    "pdf-image": "^2.0.0",
    "pixelmatch": "^5.2.1",
    "tesseract.js": "^2.1.5"


