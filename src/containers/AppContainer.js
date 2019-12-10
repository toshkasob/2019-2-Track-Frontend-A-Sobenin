/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ChatsList from '../components/ChatsList';
import MessageForm from '../components/MessageForm';
import '../styles/globalStyles.css';
import ChatHeader from '../components/ChatHeader';
import ChatsListHeader from '../components/ChatsListHeader';

export default class AppContainer extends React.Component {
	render() {
		return (
			<div className="my_messenger">
				<Router>
					<Switch>
						<Route path="/chat_id=:chatId">
							<ChatHeader />
							<MessageForm />
						</Route>
						<Route exact path="/">
							<ChatsListHeader />
							<ChatsList />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
