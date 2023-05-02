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

        - 'Content Bias', 'Partisan Bias', 'False balance',
        - Ventriloquism
        - Demographic bias
        - Undue Weight 
        - Corporate Bias

* ### `State-of-the-art Transformer-based Embeddings`

    We use a custom architecture for multilabelled classification of the biases.

## `MISC Notes`

While training the model, Use the following while in the root folder of the project to show tensorboard metrics.
`tensorboard --logdir ./AI/logs/fit`
