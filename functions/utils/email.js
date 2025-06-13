export async function sendEmail(subject, msg, templateId, senderName, email) {
    const serviceId = 'service_tfilatunes';
    const publicKey = 'uzK-eVn3ezUOZYC2a';

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
            subject: subject,
            to_name: 'manager',
            message: msg,
            from_name: `name: '${senderName}' email: '${email}'`,
            reply_to: email
        },
    };

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Email sent successfully!');
        } else {
            console.error('Failed to send email:', response.statusText);
        }
        response.json();
    } catch (error) {
        console.error('Error sending email:', error);
    }
}
