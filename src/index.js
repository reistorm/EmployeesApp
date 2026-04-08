import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import { Button } from './App';
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap';
import "./index.css";

const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
    text-align: center;
`;

ReactDOM.render(
    <StrictMode>
        <App />
        <BigButton as="a">Отправить отчет</BigButton>
    </StrictMode>,
    document.getElementById('root')
);


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
