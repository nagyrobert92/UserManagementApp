import React, { useReducer } from "react";
import uuid from "uuid";
import ProfileContext from "./profileContext";
import profileReducer from "./profileReducer ";

import { ADD_CONTACT, DELETE_CONTACT } from "../types";
