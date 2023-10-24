import pickle
import numpy as np
import spacy
import tensorflow as tf
from sentence_transformers import SentenceTransformer
from nltk.tokenize import PunktSentenceTokenizer as pkt

class TalewindPredictor:
    """
    A class based on the code in NewModelExperimentation.ipynb of the same notebook, 
    this class contains the sentence transformer and the tensorflow model imported into one.
    """

    def __init__(self, path_to_model: str, color_path: str = './AI/colors.pkl'):
        self.revEncode = np.array(['Content Bias', 'Partisan Bias', 'False balance', 'Ventriloquism',
                                   'Demographic bias', 'Undue Weight', 'Corporate Bias'])
        self.threshold = 0.74
        self.model_path = 'sentence-transformers/all-MiniLM-L6-v2'
        self.encoder = SentenceTransformer(self.model_path)
        self.bias_model = tf.keras.models.load_model(path_to_model)
        self.color_path = color_path
    
    def predict_bias(self, text: str):
        sentarray = np.array(pkt().tokenize(text))
        sentspan = np.array([i for i in pkt().span_tokenize(text)])
        encoded = self.encoder.encode(sentarray)
        predictions = self.bias_model.predict(encoded)
        assert len(predictions) == len(sentspan), "Something is wrong with your text. I'm not able to split them correctly. Please try again."
        return {"predict" : predictions, "render_span" : sentspan, "text" : text}


    def spacify(self, spandict: dict, mode: str, isJupyter: bool = False):
        idxs = np.where(np.any(spandict["predict"] > self.threshold, axis=1))[0]
        text = spandict["text"]
        sentspan = spandict["render_span"]
        revEncode = np.array(['Content Bias', 'Partisan Bias', 'False Balance', 'Ventriloquism',
                'Demographic Bias', 'Undue Weight', 'Corporate Bias'])
        jsonlabels = np.array(['contentBias', 'partisanBias', 'falseBalance', 'ventriloquism',
                'demographicBias', 'undueWeight', 'corporateBias'])
        with open(self.color_path, 'rb') as f:
            colors = pickle.load(f)
        f.close()
        options = {"colors" : colors}
        ### SPAN ###
        if mode == "span":
            nlp = spacy.blank("en")
            doc = nlp(text)
            doc.spans["sc"] = []
            for i in idxs:
                Labels = ', '.join(revEncode[spandict["predict"][i] > self.threshold])
                doc.spans["sc"].append(doc.char_span(sentspan[i][0], sentspan[i][1], Labels))
            html = spacy.displacy.render(doc, style="span", page=False, minify=False, jupyter=isJupyter, options=options)
        ### ENT ###
        elif mode == "ent":
            ex = {"text": text,
                "ents": [],
                "title": None}
            for i in idxs:
                Labels = ', '.join(revEncode[spandict["predict"][i] > self.threshold])
                ex["ents"].append({"start" : sentspan[i][0], "end" : sentspan[i][1], "label" : Labels})
            html = spacy.displacy.render(ex, style="ent", manual=True, page=False, minify=False, jupyter=isJupyter, options=options)
        ### FINAL RESULT ###
        weights = np.sum((np.ceil(spandict["predict"][idxs] - self.threshold)), axis=0)
        percentages = (np.ceil(((weights / spandict["predict"].shape[0])*100)).astype(int)).tolist()
        total_bias_percentage = int(np.ceil(((idxs.shape[0] / spandict["predict"].shape[0])*100)).item())
        return {"totalPercentage" : total_bias_percentage, 
                "individualPercentages" : dict(zip(jsonlabels, percentages)), 
                "html" : html}
    
    def __call__(self, query: str, mode: str):
        """
        Returns the JSON format as decided by the spacify method of the same class.
        """
        return self.spacify(self.predict_bias(query), mode)


if __name__ == '__main__':
    path = './AI/models/Dense_NN_CURRENT-BEST_20230502-190500.h5'
    text = """Existentially Challenged, the first sequel to Differently Morphous, is now available on Audible.com as an Audible Original! You should know the drill by now; it's an audiobook first, with Dark Horse publishing a print version some way down the line; probably late next year.
Existentially Challenged catches us up with the Department of Extradimensional Affairs, still struggling to set precedents in the new era that began when the British government declassified the existence of magic. One unexpected side effect has been that fake psychics and spirit healers are running amok, now that they have real magic to hide behind, and so a new law is passed to come down harshly on "magical appropriation" while Doctor Diablerie and Alison Arkin are reshuffled into a new "Office of Skepticism." Things soon go awry as an investigation into a faith healing cult goes to unexpected places, and meanwhile the internal tensions of the Department threaten to tear the returning cast apart along a brand new set of battle lines.
I'm pretty happy with how it turned out. It's really setting the tone for what I want the DEDA Files to be (that's the official name now) - an ongoing mystery-of-the-week series with a big underlying intrigue that may bubble up to the surface at any time. Although having said that, the next book I want to write is the third and final novel of the Jacques McKeown trilogy.
Oh yes, and I am fully aware that the Jam and Mogworld audiobooks have disappeared from online stores, that was due to the original publisher going down, so I'm waiting to hear back from Audible about getting those back up. If you want to see movement on that quicker then the best thing to do would be to bug Audible about it directly and see if you can't bump me higher up the priority list.
Existentially Challenged is now available from Audible.com. You can click here to get it or on the image above if you couldn't wait this long.
"""
    predictor = TalewindPredictor(path)
    print(predictor(text, "span"))
    print("TEST SUCCESS")