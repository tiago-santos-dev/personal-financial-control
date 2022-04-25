
# Personal Financial Control

The purpose of the application is to control inputs and outputs and provide an overview of the user's budget.

## Author

- [@tiago-santos-dev](https://github.com/tiago-santos-dev)


## Demo

https://personal-financial-control.vercel.app/
## Screenshots
 Home
![App Screenshot](https://i.postimg.cc/CMDx9dsk/01.png)

Create Transaction Modal
![App Screenshot](https://i.postimg.cc/jdbSTKM9/02.png)

Home - Mobile
![App Screenshot](https://i.postimg.cc/SRWQ9txD/03.png)
## Features

- List transactions
- Create new transactions
- Delete transactions


## Tech Stack

NextJs, Typescript, Miragejs, axios, react-modal, react-hook-form and Styled-components


## Run Locally

Clone the project

```bash
  git clone https://github.com/tiago-santos-dev/personal-financial-control.git
```

Go to the project directory

```bash
  cd financial-control
```

Install dependencies

```bash
  npm install 
  # or
  yarn install
```

Create an .env file in the project root, adding the environment variables (model available in .env.example)

```
NEXT_PUBLIC_API_URL
```
Note: The project does not depend on a backend, mirage intercepts requests and shapes the response by simulating a fake api, in this way we use the routes api of next to simulate requests, in this variable to inform the host on which your application is being executed


Run the project

```bash
  npm run dev
  # or 
  yarn dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)



