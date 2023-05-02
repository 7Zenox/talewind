# *talewind*

*talewind* is a media bias detection system for text input. It is being developed by Vasu Jain and Anand Chauhan as our University project for the 4th semester course on Artificial Intelligence, as part of our bachelor's degree.

    - 29/04/2023: The whole thing will be rebuilt using better datasets and advanced models

## `COMPONENTS`

* ### `Beautiful Front End, deployed on Vercel.`
  
    The front end of our project is currently already running on Vercel. Link: [talewind](https://talewind.vercel.app)
    Please note that the project is still very much a work in progress as of [02/05/2023], and is functioning for testing purposes primarily.

* ### `Seven different types of Bias detection.`
  
    Our project aims to classify 7 varied and useful types of biases in sentences. The data for the project thus far has been reaaly difficult to find, with [ChatGPT](htts://chat.openai.com/) coming to the rescue in generating synthetic data. Future prospect of this project will definitely include a more survey-based approach, but as a proof-of-work, we believe this is enough.

    The 7 types of biases we aim to identify are:

        - Content Bias
        - Partisan Bias
        - False balance
        - Ventriloquism
        - Demographic bias
        - Undue Weight 
        - Corporate Bias

* ### `State-of-the-art Transformer-based Embeddings`

    We use a custom architecture for multilabelled classification of the biases, with a sentence transformer as the base of all sentence embeddings. The transformer in question can be found [here](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).

* ### `Synthetic Data`

    As previously mentioned, we had to generate a dataset using LLMs for this project. We ended up with over 1800 rows, which is nearly not enough to be a widely-applicable model. However, the model provides decent enough results for a proof-of-concept, and with enough data, should easily be able to reliably output accurate information.

## `MISC Notes`

* While training the model, Use the following commmand while in the root folder of the project to show tensorboard metrics.
        ```tensorboard --logdir ./AI/logs/fit```

* The requirements to run the backend can be found inside [this folder](./backend/). (NOT ADDED AS OF 02/05/2023).
