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
import { ortJson } from "./OrtSurvey";
import { saveResult } from "./saveResult";

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
    
    const survey = new Survey.Model(ortJson);
    survey.showProgressBar = 'top';
    survey.progressBarType = 'pages';
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

  onComplete(self) {
    return result => {    
      saveResult(result.data);
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
