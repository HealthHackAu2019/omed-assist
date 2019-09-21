import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

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
      "title": "Opioid Risk Tool",
      "description": "This tool can be useful for people prior to beginning opioid therapy or those who might be continuing to use opioids for pain management.",
      "pages": [
          {
              "name": "page1",
              "elements": [
                  {
                      "type": "radiogroup",
                      "name": "age_group",
                      "title": "Are you aged between 16-45?",
                      "isRequired": true,
                      "choices": [
                          {
                              "value": "age_16_45_yes",
                              "text": "yes"
                          },
                          {
                              "value": "age_16_45_no",
                              "text": "no"
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
                      "name": "Does anyone in your family have substance use problems with:",
                      "title": "Does anyone in your family have substance use problems with:",
                      "columns": [
                          {}
                      ],
                      "choices": [
                          "yes",
                          "no"
                      ],
                      "cellType": "radiogroup",
                      "rows": [
                          {
                              "value": "alcohol",
                              "text": "alcohol"
                          },
                          {
                              "value": "illicit_drugs",
                              "text": "illicit drugs"
                          },
                          {
                              "value": "prescription_drugs",
                              "text": "prescription drugs"
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
                          "yes",
                          "no"
                      ],
                      "cellType": "radiogroup",
                      "rows": [
                          {
                              "value": "alcohol",
                              "text": "alcohol"
                          },
                          {
                              "value": "illicit_drugs",
                              "text": "illicit drugs"
                          },
                          {
                              "value": "prescription_drugs",
                              "text": "prescription drugs"
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
                          "yes",
                          "no"
                      ],
                      "cellType": "radiogroup",
                      "rows": [
                          {
                              "value": "adhd",
                              "text": "attention deficit hyperactivity disorder (ADHD)"
                          },
                          {
                              "value": "ocd",
                              "text": "obsessive compulsive disorder (OCD)"
                          },
                          {
                              "value": "bipolar",
                              "text": "bipolar"
                          },
                          {
                              "value": "schizophrenia",
                              "text": "schizophrenia"
                          },
                          {
                              "value": "depression",
                              "text": "depression"
                          }
                      ]
                  }
              ]
          }
      ]
  };
  
    const survey = new Survey.Model(json);
    survey
      .onComplete
      .add(this.onComplete(this));
      
    // survey
    //   .onUpdateQuestionCssClasses
    //   .add(function (survey, options) {
    //       var classes = options.cssClasses
    //       classes.header = styles.header;
    //       classes.root = styles.root;
    //       classes.title = styles.title;
    //       classes.qstn = styles.sv_qstn;
    //       classes.row = styles.row;
    //       classes.item = styles.example;
    //       classes.label = styles.example;
    //       classes.header = styles.header
    //       console.log(classes)
    //   });
      
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
        <div>
          <div className="surveyjs">
            <Survey.Survey model={this.state.survey}/>
          </div>
          <div>
          { this.state.finished ? (<p>{JSON.stringify(this.state.results)}</p>) : (<p>No Results</p>) }
          </div>
        </div>
    );
  }
}

export default Questionnaire;
