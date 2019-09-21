import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.svg";
import styles from "./Questionnaire.module.css"

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

import "icheck/skins/square/blue.css";
import "./Questionnaire.css";

window["$"] = window["jQuery"] = $;
require("icheck");

Survey.StylesManager.applyTheme("default");

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

export class Questionnaire extends Component {

  constructor(props)
  {
    super(props)
    const json = {
      "pages": [
          {
              "name": "page1",
              "elements": [
                  {
                      "type": "radiogroup",
                      "name": "age_group",
                      "title": "Are you aged between 16-45?",
                      "choices": [
                          {
                              "value": "age_16_45_yes",
                              "text": "Yes"
                          },
                          {
                              "value": "age_16_45_no",
                              "text": "No"
                          }
                      ],
                      "colCount": 2
                  }
              ]
          },
          {
              "name": "page2",
              "elements": [
                  {
                      "type": "matrixdropdown",
                      "name": "family_history",
                      "title": "Does anyone in your family have substance use problems with:",
                      "columns": [
                          {}
                      ],
                      "choices": [
                          "Yes",
                          "No"
                      ],
                      "cellType": "radiogroup",
                      "rows": [
                          {
                              "value": "fh_alcohol",
                              "text": "Alcohol"
                          },
                          {
                              "value": "fh_illicit_drugs",
                              "text": "Illicit drugs"
                          },
                          {
                              "value": "fh_prescription_drugs",
                              "text": "Prescription drugs"
                          }
                      ]
                  }
              ]
          },
          {
              "name": "page3",
              "elements": [
                  {
                      "type": "matrixdropdown",
                      "name": "self_substance",
                      "title": "Do you currently have any substance use problems with:",
                      "columns": [
                          {}
                      ],
                      "choices": [
                          "Yes",
                          "No"
                      ],
                      "cellType": "radiogroup",
                      "rows": [
                          {
                              "value": "ss_alcohol",
                              "text": "Alcohol",
                          },
                          {
                              "value": "ss_illicit_drugs",
                              "text": "Illicit drugs"
                          },
                          {
                              "value": "ss_prescription_drugs",
                              "text": "Prescription drugs"
                          }
                      ]
                  }
              ]
          },
          {
              "name": "page4",
              "elements": [
                  {
                      "type": "matrixdropdown",
                      "name": "conditions",
                      "title": "Do you have any of the following:",
                      "columns": [
                          {}
                      ],
                      "choices": [
                          "Yes",
                          "No"
                      ],
                      "cellType": "radiogroup",
                      "rows": [
                          {
                              "value": "adhd",
                              "text": "Attention deficit hyperactivity disorder (ADHD)"
                          },
                          {
                              "value": "ocd",
                              "text": "Obsessive compulsive disorder (OCD)"
                          },
                          {
                              "value": "bipolar",
                              "text": "Bipolar"
                          },
                          {
                              "value": "schizophrenia",
                              "text": "Schizophrenia"
                          },
                          {
                              "value": "depression",
                              "text": "Depression"
                          }
                      ]
                  }
              ]
          }
      ]
  };
  
    const survey = new Survey.Model(json);
    survey.showProgressBar = 'top';
    survey.progressBarType = 'questions';
    survey.showQuestionNumbers = 'off';
    survey.showPageNumbers = 'off';
    
    survey
      .onComplete
      .add(this.onComplete(this));
      
    this.state = {
      survey: survey,
      finished: false,
      results : {}
    };
  }

  onComplete(self){
    return result => {    
      self.setState({ results: result.data, finished: true})
    };
  }

  render() {
    return (
        <div className="questionnaire">
          <img src={logo} className={styles.logo} alt="Logo" />
          <div className="surveyjs">
            <Survey.Survey model={this.state.survey}/>
          </div>
          <div>
          </div>
        </div>
    );
  }
}

export default Questionnaire;
