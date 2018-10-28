#Football lineup

1. Please make sure to create .env in ./
2. .env file should contain the following
  - REACT_APP_APP_KEY
  - REACT_APP_APP_CLUSTER
  - REACT_APP_CHANNEL
  - REACT_APP_EVENT
3. From the ./ [ROOT] run: npm install
4. To start the application run: npm start - By default it will start on port 3000, if the port it's in use you are going to be prompted with a request to use an other port

#Production run
1. This will handle errors using ErrorBoundry introduced in React 16+
2. npm install -g serve
3. npm run build
4. serve -s build