import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const DirectChatPage = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
		<ChatEngine
			height='100vh'
			userName='Aonik Paul Alock'
			userSecret='12345678'
			projectID='041235c5-6df4-404f-96c8-c1b697dc8664'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default DirectChatPage;