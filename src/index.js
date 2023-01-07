import ReactDOM from "react-dom"
import React from "react"
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { App } from "./App"
import { api_key, app_id, measurement_id, messaging_sender_id, storage_bucket } from "./config"
import { ParallaxProvider } from "react-scroll-parallax"

import "./index.css"

const firebaseConfig = {
  apiKey: api_key,
  authDomain: "jason-ren.firebaseapp.com",
  projectId: "jason-ren",
  storageBucket: storage_bucket,
  messagingSenderId: messaging_sender_id,
  appId: app_id,
  measurementId: measurement_id,
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)

const app = document.getElementById("app")

ReactDOM.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  app
)
