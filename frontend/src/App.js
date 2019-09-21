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

class App extends Component {
  json = { 
    title: "Our questions", 
    pages: [
      { 
        name:"page1", 
        questions: [
          { 
            type: "radiogroup", 
            choices: [ "All the time", "Never" ], 
            isRequired: true, 
            name: "frameworkUsing",
            title: "How often do you take things?" 
          },
          { 
            type: "radiogroup", 
            choices: [ "Great", "Sad" ], 
            isRequired: true, 
            name: "frameworkUsing",
            title: "How do you feel today?" 
          }
        ]
      },
   ]
  };

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! " + result);
  }

  render() {
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React with SurveyJS</h2>
        </div>
        <div className="surveyjs">
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
        </div>
        <p>Hello omed team</p>
      </div>
    );
  }
}

export default App;
