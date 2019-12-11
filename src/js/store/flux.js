const getState = ({ getStore, getActions, setStore }) => {
	const apiServer = "https://8080-d17183c8-fdc1-4763-88e6-7d25584f6920.ws-us02.gitpod.io/";
	return {
		store: {
			cars: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			users: [],
			session: {
				isLoggedIn: false,
				username: "user",
				password: "pass",
				token: ""
			}
		},
		actions: {
			login: (user, pass) => {
				fetch(apiServer + "/wp-json/jwt-auth/v1/token", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},

					body: JSON.stringify({
						username: user,
						password: pass
					})
				}).then(response => {
					if (response.status !== 200) {
						console.error("Connection error, code  ", response.status);
						return;
					}

					res.json().then(data => {
						let store = getStore();
						store.session = data;
						store.session.isLoggedIn = true;
						setStore({
							store
						});
					});
				});
			},
			// Use getActions to call a function within a fuction
			saveToStore: data => {
				setStore({ cars: data });
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			generateToken: (user, password) => {
				let store = getStore();
				// let apiServer = "https://8080-eca15357-da1c-425b-ab26-8d71c8c0433d.ws-us02.gitpod.io/wp-json";
				// lets assume that you have a variable in your store for user to store user data when logged in
				// and another variable for the login status

				fetch(apiServer + "/wp-json/jwt-auth/v1/token", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: user,
						password: password
					})
				})
					.then(response => {
						if (response.status !== 200) {
							return "Connection error: " + response.status;
						}

						response.json(data => {
							store.user = data;
							store.loggedIn = true;
							setStore({ store });
						});
					})
					.catch(err => {
						return err;
					});
			},
			createUser: (user, password, email, confirmPassword) => {
				let apiServer = "https://8080-d17183c8-fdc1-4763-88e6-7d25584f6920.ws-us02.gitpod.io/wp-json";
				fetch(apiServer + "/wp/v2/users/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: user,
						password: password,
						email: email
					})
				})
					.then(res => {
						if (res.status !== 200) {
							console.log("error " + res.status);
							return;
						}
						res.json().then(data => {
							let store = getStore();
							setStore({
								store
							});
						});
					})
					.catch(err => {
						alert("Fetch error: ", err);
					});
			},
			login: (user, pass) => {
				let apiServer = "https://8080-d17183c8-fdc1-4763-88e6-7d25584f6920.ws-us02.gitpod.io/wp-json";
				fetch(apiServer + "/wp-json/jwt-auth/v1/token", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: user,
						password: pass
					})
				})
					.then(res => {
						if (res.status !== 200) {
							console.log("error" + res.status);
							return;
						}
						res.json().then(data => {
							let store = getStore();

							store.session = data;
							store.session.isLoggedIn = true;
							setStore({
								store
							});
						});
					})
					.catch(err => {
						alert("Fetch error: ", err);
					});
			},
			checkToken: () => {
				let store = getStore();
				let tokenCheck = JSON.parse(localStorage.getItem("yourApp-userData"));

				if (tokenCheck !== null) {
					// set current user data to store
					store.user = tokenCheck;
					setStore({ store });

					// fetch to validate current token
					fetch(apiServer + "/wp-json/jwt-auth/v1/token/validate", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + token
						}
					})
						.then(response => {
							response.json(data => {
								// token is valid
								setStore({
									...store,
									loggedIn: true
								});
							});
						})
						.catch(err => {
							return err;
						});
				} else {
					setStore({
						...store,
						loggedIn: false,
						user: null
					});
				}
			},

			getUser: () => {
				let apiServer = "https://https://8080-d17183c8-fdc1-4763-88e6-7d25584f6920.ws-us02.gitpod.io/wp-json";
				fetch(apiServer + "/wp/v2/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: user
					})
				})
					.then(res => {
						if (res.status !== 200) {
							console.log("error" + res.status);
							return;
						}
						res.json().then(data => {
							let store = getStore();
							setStore({
								store
							});
						});
					})
					.catch(err => {
						alert("Fetch error: ", err);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
