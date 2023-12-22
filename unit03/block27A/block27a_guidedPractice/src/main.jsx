import React from 'react'
import ReactDOM from 'react-dom/client'
import BasicButton from './App.jsx'
import MyCheckbox from './CheckBox.jsx'
import InputField from './InputField.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasicButton />
    <MyCheckbox />
    <InputField />
  </React.StrictMode>,
)
