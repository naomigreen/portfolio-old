import React, { useState } from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form/Form';

export default function Contact() {
	const { register, handleSubmit, reset } = useForm();
	const [sending, setSending] = useState(false);

	const onSubmit = data => {
		setSending(true)
		sendMessage(
			data.name,
			data.email,
			data.message,
			process.env.REACT_APP_EMAILJS_TEMPLATEID,
			process.env.REACT_APP_EMAILJS_SERVICEID,
			process.env.REACT_APP_EMAILJS_USERID,
			process.env.REACT_APP_EMAILJS_RECEIVER
		);
		reset();
	};

	const sendMessage = (senderName, senderEmail, senderMessage, templateId, serviceId, userID) => {
		window.emailjs
			.send(
				serviceId,
				templateId,
				{
					from_email: senderEmail,
					from_name: senderName,
					message_html: senderMessage
				},
				userID
			)
			.then(() => {
				setSending(false);
			})
			.catch((err) => console.error('Failed to send message. Error: ', err));
	}
	return (
		<Layout>
			<Form onSubmit={handleSubmit(onSubmit)} register={register} sending={sending} />
		</Layout>
	);
}

const Layout = styled.div`
	width: 500px;
	max-width: 95%;
	margin: 0 auto;
`;
