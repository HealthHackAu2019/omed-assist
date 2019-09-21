import Airtable from 'airtable';
import _ from "lodash";

const base = new Airtable({apiKey: 'keyITZ8wed871jDWO'})
  .base('app4kNGsdOb37cKaP');

const createPayload = (result) => {
  return {
    "fields": {
      "age_16_to_45": _.get(result, "age_group", "").replace("age_16_45_", "").toLowerCase(),
      "family_history_alcohol": _.get(result, ["family_history", "fh_alcohol", ""], "").toLowerCase(),
      "self_substance_alcohol": _.get(result, ["self_substance", "ss_alcohol", ""], "").toLowerCase(),
      "conditions_adhd": _.get(result, ["conditions", "adhd", ""], "").toLowerCase(),
    }
  };
}

export const saveResult = (result) => {
  console.log(result);
  console.log(JSON.stringify(result, null, 2));

  return base('Survey').create(
    [ createPayload(result) ], 
    { typecast: true },
    (err, records) => {
      if (err) {
        console.error(err);
      } else {
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    });
}