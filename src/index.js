import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/component/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))cat /etc/passwd(xem thuoc tinh da tao)
// sudo groupadd Giaovien  (cat /etc/group)
// sudo useradd Phuongnd1 -g Giaovien   (cat /etc/passwd)
// ls -la / / (xem phan chu so huu)
// sudo chown Phuongnd1:Giaovien /QTATHT/BaiGiang
//sudo chmod 770 /QTATHT/BaiGiang



// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//sudo nano /etc/hostname
//sudo nano /etc/hosts (127.0.0.1 localhost, 127.0.1.1 Phuongnd)
//sudo apt-get install libpam-pwquality
//audit even_deny_root root_unlock_time=300, enforce_for_root 


reportWebVitals();
