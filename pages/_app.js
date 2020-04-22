import App from 'next/app'
import { StoreProvider, useStoreActions } from 'easy-peasy'
import store from '../store'

// import { Provider } from 'react-redux'
// import React from 'react'
//import withRedux from "next-redux-wrapper";


function MyApp({ Component, pageProps, user }) {
	if (user) {
		store.getActions().user.setUser(user)
	}

	return (
		<StoreProvider store={store}>
			<Component {...pageProps} />
		</StoreProvider>
	)
}

MyApp.getInitialProps = async appContext => {
	const appProps = await App.getInitialProps(appContext)

	let user = null
	if (
		appContext.ctx.req &&
		appContext.ctx.req.session &&
		appContext.ctx.req.session.passport &&
		appContext.ctx.req.session.passport.user
	) {
		user = appContext.ctx.req.session.passport.user
	}

	return { ...appProps, user: user }
}

export default MyApp


// export default class extends App {

// 	render() {
// 		const { Component, pageProps } = this.props
// 		return (
// 			<Provider store={store}>
// 				<Component {...pageProps} />
// 			</Provider>
// 		)
// 	}
// }

