
export const gmail = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'rhc921004@gmail.com',
        pass: 'gofaxcqoqyhzajru'
    }
}

export const outlook = {
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: '',
        pass: ''
    }
}