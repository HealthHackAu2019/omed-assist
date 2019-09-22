export const quizJson = {
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question1",
      "title": "The most common side effect of taking prescription opioid medications is dry mouth.",
      "choices": [
       {
        "value": "1",
        "text": "true"
       },
       {
        "value": "0",
        "text": "false"
       }
      ]
     },
     {
      "type": "html",
      "name": "answer1_t",
      "visibleIf": "{question1} = \"1\"",
      "html": "<h3 style=\"color:green\">Correct!</h3>\n\nAbout 50% of people who take opioids have dry mouth. Other common symptoms include constipation, sweating, itching, headache, and muscle weakness.<br /><br />   \n\nTip:  Opioid medications can have side effects. It’s important to look out for possible these so that you can tell you doctor about any unwanted effects."
     },
     {
      "type": "html",
      "name": "answer1_f",
      "visibleIf": "{question1} = \"0\"",
      "html": "<h3 style=\"color:red\">Incorrect!</h3>\n\nAbout 50% of people who take opioids have dry mouth. Other common symptoms include constipation, sweating, itching, headache, and muscle weakness.<br /><br />   \n\nTip:  Opioid medications can have side effects. It’s important to look out for possible these so that you can tell you doctor about any unwanted effects."
     }
    ]
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question2",
      "title": "Pain is a physical experience only",
      "choices": [
       {
        "value": "1",
        "text": "true"
       },
       {
        "value": "0",
        "text": "false"
       }
      ]
     },
     {
      "type": "html",
      "name": "answer2_t",
      "visibleIf": "{question2} = \"1\"",
      "html": "<h3 style=\"color:red\">Incorrect!</h3>\n\nIt is influenced by a range of biomedical or physical processes, as well as psychological and social factors including what we think and how we feel.<br /><br /> Tip: Tune into any triggers for worsening pain – what were you doing and thinking before you felt pain? It’s possible to modify any unhelpful or negative thinking patterns to reduce your pain."
     },
     {
      "type": "html",
      "name": "answer2_f",
      "visibleIf": "{question2} = \"0\"",
      "html": "<h3 style=\"color:green\">Correct!</h3>\n\nIt is influenced by a range of biomedical or physical processes, as well as psychological and social factors including what we think and how we feel.<br /><br />Tip: Tune into any triggers for worsening pain – what were you doing and thinking before you felt pain? It’s possible to modify any unhelpful or negative thinking patterns to reduce your pain."
     }
    ]
   },
   {
    "name": "page3",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question3",
      "title": "Opioids should only be used in the short term for acute pain, as prescribed",
      "choices": [
       {
        "value": "1",
        "text": "true"
       },
       {
        "value": "0",
        "text": "false"
       }
      ]
     },
     {
      "type": "html",
      "name": "answer3_t",
      "visibleIf": "{question3} = \"1\"",
      "html": "<h3 style=\"color:green\">Correct!</h3>\n\nOpioids are an effective treatment option for acute, severe pain.  Using opioids for pain lasting more than 3 months is not recommended.<br /><br />Tip: If your pain has persisted for more than 3 months, there are treatments other than opioid medications that can be effective such as cognitive behavioural therapy."
     },
     {
      "type": "html",
      "name": "answer3_f",
      "visibleIf": "{question3} = \"0\"",
      "html": "<h3 style=\"color:red\">Incorrect!</h3>\n\nOpioids are an effective treatment option for acute, severe pain.  Using opioids for pain lasting more than 3 months is not recommended.<br /><br />Tip: If your pain has persisted for more than 3 months, there are treatments other than opioid medications that can be effective such as cognitive behavioural therapy."
     }
    ]
   },
   {
    "name": "page4",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question4",
      "title": "Physical dependence on opioids only develops after you have been taking opioids for more than 3 months",
      "choices": [
       {
        "value": "1",
        "text": "true"
       },
       {
        "value": "0",
        "text": "false"
       }
      ]
     },
     {
      "type": "html",
      "name": "answer4_t",
      "visibleIf": "{question4} = \"1\"",
      "html": "<h3 style=\"color:red\">Incorrect!</h3>\n\nPhysical dependence occurs when the brain adapts to the effects of the opioid medication and develops tolerance, which is needing more and more to get positive effects."
     },
     {
      "type": "html",
      "name": "answer4_f",
      "visibleIf": "{question4} = \"0\"",
      "html": "<h3 style=\"color:green\">Correct!</h3>\n\nPhysical dependence occurs when the brain adapts to the effects of the opioid medication and develops tolerance, which is needing more and more to get positive effects."
     }
    ]
   },
   {
    "name": "page5",
    "elements": [
     {
      "type": "html",
      "name": "answer5_t",
      "visibleIf": "{question5} = \"1\"",
      "html": "<h3 style=\"color:green\">Correct!</h3>\n\nAbout 50% of people who take opioids have dry mouth. Other common symptoms include constipation, sweating, itching, headache, and muscle weakness.<br /><br />   \n\nTip:  Opioid medications can have side effects. It’s important to look out for possible these so that you can tell you doctor about any unwanted effects."
     },
     {
      "type": "html",
      "name": "answer5_f",
      "visibleIf": "{question5} = \"0\"",
      "html": "<h3 style=\"color:red\">Incorrect!</h3>\n\nAbout 50% of people who take opioids have dry mouth. Other common symptoms include constipation, sweating, itching, headache, and muscle weakness.<br /><br />   \n\nTip:  Opioid medications can have side effects. It’s important to look out for possible these so that you can tell you doctor about any unwanted effects."
     }
    ]
   },
   {
    "name": "page6",
    "elements": [
     {
      "type": "html",
      "name": "end_of_survey",
      "html": "You have reched the end of the quiz. Click <a href=\"/\">here</a> to return to the main screen"
     }
    ]
   }
  ]
 };