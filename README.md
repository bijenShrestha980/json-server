## Start up from scratch

- Create a folder of any name
- Open the folder
- Open any terminal on the folder
- If you have node installed then: (if you have not installed node install it)
  - npm init (it will create packege.json and package-lock.json file)
  - npm install json-server (it will install json-server library)
  - create a db.json file in the folder and create a JSON object (you can find an example JSON object in the db.json)
  - npx json-server --watch db.json (this will start the json server)
  - your json server is running on localhost:3000 (default)
  - you can get/post... as given in the example index.js
