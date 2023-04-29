This file provides information about the data presented in newsArticlesWithLabels.tsv. There are 7 columns in this file. They are listed below:

1) Url
2) News Type: Has three possible values: other (remember that the articles are sampled from those that are predicted to be political based on our classifiers and so there are false positives we remove based on this label), News, or Opinion.
3) Perceived (whether the worker was looking at the blinded or unblinded version. perceived=1 means unblinded version)
4) Primary topic identified by the worker (If "None", the primary topic is not captured by our list of 14 topics)
5) Secondary topic (If "None", there is no secondary topic or the secondary topic is not captured by our list)
6) Democratic party  vote
7) Republican vote

For more information about the dataset, please check out the relevant paper: https://academic.oup.com/poq/article-abstract/80/S1/250/2223443/?redirectedFrom=fulltext
