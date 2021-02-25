# ✨  Git Topics  ✨
> _Easiest way to tag and find your Git repositories!_  
> You can find the Demo live here: [Git Topics][gt]

### On [Git Topics][gt] you're able to:
- See your repositories and starred repositories
- Add topics to your reporitories (under construction)
- Edit topics from your repositories (under construction)
- Delete the topics (under construction)

 Make sure you're logged in using your GitHub account to see your repositories.


## 💾 Tech 

Some cool dependences used:

| Dependencies | But, what they do? |
| ------ | ------ |
| [Auth0] | Authentication and authorization made easy! |
| [Axios] | Promise based HTTP client for the browser and node.js. |
| [React Bootstrap] | Quick design and customizable components. |
| [Cross-env] | Run scripts that set and use environment variables across platforms (*finished*) | 
| [Eslint] |  Pluggable and configurable linter tool for JavaScript. |
| [Prettier] | Code formatter that enforces a consistent style. |
| [React Router Dom]| Declarative Routing for React.js. |
| [React Lottie] | Brings After Effects animations in real time for React.js. |

Some of thoses depencencies are open souce, make sure to have a look on then by clicking on it's name :)

## 💻 Installation 

Dillinger requires [Node.js](https://nodejs.org/) v14.15.0 to run. 
If you don't have this node version on your machine, make sure to use [NVM](https://github.com/nvm-sh/nvm) or another version manager for node.js.

Install the dependencies and start the server.

```sh
cd git-topic
yarn
```

## 🖋 Environment 

Before Run Git Topics on your machine you must create a .Env file with you Auth0 tokens.

```sh
touch .env
```

Now that you created the file, you need to fill it with your Auth0 tokens:

```
REACT_APP_AUTH0_DOMAIN=' {insert your Domain token here} '
REACT_APP_AUTH0_CLIENT_ID=' {insert your Client ID here} '
```

## ⚙️ Run

To Run Git Topics on your Browser, you just need to run the comand bellow:

```sh
yarn start-dev
```
> Note: The `cross-env PORT=4040` is required for running in development, so please don't use just the `yarn start` .


Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:4040
```

## 📜 Scripts

Want to make changes?

Git Topics uses some scripts for practicality.
Make a change in your file and run thoses on your favorite Terminal to make sure it's everything okay!

Linter:

```sh
yarn lint
```

```sh
yarn lint:fix
```

Code format:

```sh
yarn format
```


**Happy Codding :)**

   [gt]: <https://git-topics.herokuapp.com/>
   [git-repo-url]: <https://github.com/JheyBerry/git-topic>
   [JheyBerry]: <https://github.com/JheyBerry>
   [Auth0]: <https://auth0.com/>
   [Axios]: <https://github.com/axios/axios>
   [Cross-env]: <https://github.com/kentcdodds/cross-env>
   [Eslint]: <https://eslint.org/>
   [Prettier]: <https://prettier.io/>
   [React Lottie]: <https://github.com/chenqingspring/react-lottie>
   [React Bootstrap]: <https://react-bootstrap.github.io/>
   [React Router Dom]: <https://reactrouter.com/>


