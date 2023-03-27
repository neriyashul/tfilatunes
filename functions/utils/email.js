function buildMessage(subject, msg) {
    return JSON.stringify({
        personalizations: [
            {
                to: [
                    {
                        email: "support@tfilatunes.com",
                        name: "support",
                    },
                ],
            },
        ],
        from: {
            email: "auto-api@tfilatunes.com",
            name: "מנגינות לתפילה API",
        },
        subject: subject,
        content: [
            {
                type: "text/plain",
                value: msg,
            },
        ],
    });
}

export async function sendEmail(subject, msg) {
    const message = buildMessage(subject, msg);

    const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: message,
    });
    return response.json();
}
