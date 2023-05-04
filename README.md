# *talewind*

*talewind* is a media bias detection system for text input. It is being developed by Vasu Jain and Anand Chauhan as our University project for the 4th semester course on Artificial Intelligence, as part of our bachelor's degree.

    - 29/04/2023: The whole thing will be rebuilt using better datasets and advanced models.
    - 03/05/2023: The new models are fully complete. The backend and frontend remain.

## `COMPONENTS`

* ### `Beautiful Front End, deployed on Vercel`
  
    The front end of our project is currently already running on Vercel. Link: [talewind](https://talewind.vercel.app)
    Please note that the project is still very much a work in progress as of [02/05/2023], and is functioning for testing purposes primarily.

* ### `Seven different types of Bias detection`
  
    Our project aims to classify 7 varied and useful types of biases in sentences. The data for the project thus far has been reaaly difficult to find, with [ChatGPT](htts://chat.openai.com/) coming to the rescue in generating synthetic data. Future prospect of this project will definitely include a more survey-based approach, but as a proof-of-work, we believe this is enough.

    The 7 types of biases we aim to identify are:

      - Content Bias
      - Partisan Bias
      - False balance
      - Ventriloquism
      - Demographic bias
      - Undue Weight 
      - Corporate Bias

    This is a multi-label classification task, as a sentence may contain more than one kind of bias.

* ### `State-of-the-art Transformer-based Embeddings`

    We use a custom architecture for multilabelled classification of the biases, with a sentence transformer as the base of all sentence embeddings. The transformer in question can be found [here](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). These encodings are context based, and help our model provide the best results it can. Training and tuning a transformer on academic and journalistic texts is a good future prospect for this project.

* ### `Synthetic Data`

    As previously mentioned, we had to generate a dataset using LLMs for this project. We ended up with over 1800 rows, which is nearly not enough to be a widely-applicable model. However, the model provides decent enough results for a proof-of-concept, and with enough data, should easily be able to reliably output accurate information.

## `MISC Notes`

* While training the model, Use the following commmand while in the root folder of the project to show tensorboard metrics.

        tensorboard --logdir ./AI/logs/fit

* The requirements to run the backend can be found inside [this folder](./backend/).
  
* While the whole project is currently being deployed on Vercel, it is highly experimental and needs a modest amount of work on the backend and frontend to come to completion. UPDATE: The backend could not be deployed to Vercel as the size of the dependencies was too high for the platform. We will look into hosting using AWS/Heroku if the project ends up gaining enough traction among peers/professors.

## `INSTRUCTIONS`

1. To try running the entire app yourself, make sure you have all the dependencies installed. The dependencies for frontend can be installed by running in the FRONTEND folder:

        npm install next react react-dom

2. And run the following command to install the dependencies for the backend.

        pip install -r ./backend/requirements.txt

3. Next, open two terminal windows. Run the command to start the backend server as follows.

        cd ./backend
        uvicorn app:app --port 3030

4. And run the following for the frontend server.

        cd ./ frontend
        npm run dev

5. Visit [localhost:3000](http://localhost:3000) and you should see the frontend of the website.
