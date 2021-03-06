// Imports
import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

// App Imports
import { NODE_ENV, WEB_URL, MOBILE_URL } from '../config/env'

// Setup middlewares
export default function (server) {
  console.info('SETUP - Middlewares..')

  // Enable CORS
  server.use(cors(
  //   {
  //   origin: [WEB_URL, MOBILE_URL],
  //   default: WEB_URL
  // }
  
  ))

  // Request body parser
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))

  // Request body cookie parser
  server.use(cookieParser())

  // Static files folder
  server.use(express.static(path.join(__dirname, '..', '..', '..', 'public')))

  // HTTP logger
  if(NODE_ENV === 'development') {
    server.use(morgan('tiny'))
  }
}
