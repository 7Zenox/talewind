const jsonData = {
   "total bias percentage": 25,
   "individual bias percentages": {
       "Content Bias": 0,
       "Partisan Bias": 0,
       "False balance": 0,
       "Ventriloquism": 0,
       "Demographic bias": 0,
       "Undue Weight": 0,
       "Corporate Bias": 25
   },
   "html": `code`
};

const rawHTML = jsonData["html"];

export default function Spacy() {
   return (
       <div className='text-justify text-sm' dangerouslySetInnerHTML={{ __html: rawHTML }} />
   )
}
