require('dotenv').config()

const express=require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.arguments(express.json())

