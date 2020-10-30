import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "index.scss";

import City from "../src/components/City";

import Province from "../src/components/Province";
import Citylist from "../src/components/Province/CityList";
import CityListItem from "../src/components/Province/CityListItem";

import Questionnaire from "../src/components/Questionnaire";
import Form from "../src/components/Questionnaire/FormField";
import AnswerOptions from "../src/components/Questionnaire/AnswerOptions";

import Button from "../src/components/Button";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Icon from "../src/components/Icon";


const questions = [
  {
    id: 1,
    question: "Do you see yourself changing your office location for more than 6 months?",
    potential_answers: ["Yes", "No"],
    user_answer: [] 
  },
  {
    id: 2,
    question: "In which timeZone is your home office located?",
    potential_answers: ["NDT","EDT", "MDT", "PDT", "CST","AST"],
    user_answer: [] 
  },
  {
    id: 3,
    question: "Is staying in your time Zone a requirement for work?",
    potential_answers: ["Yes", "No"],
    user_answer: [] 
  }
]

const province = {
  id: 1,
  name: "Quebec",
  description:
    "Quebec is the second most populous Canadian province and known primarily for its French-speaking population, culture, and heritage. It is the country's largest province by land area. Most residents live along and near the St. Lawrence River, especially in and between Montreal and Quebec City, the two major cities.",
};

const cities = [
  {
    id: 1,
    name: "Montreal",
    province_id: 1,
    description: "",
    timeZone: "UTC−4",
    image: "ImageURL",
  },
  {
    id: 2,
    name: "Quebec City",
    province_id: 1,
    description: "",
    timeZone: "UTC−4",
    image: "ImageURL",
  },
  {
    id: 3,
    name: "Perce",
    province_id: 1,
    description: "",
    timeZone: "UTC−4",
    image: "ImageURL",
  },
];

const city = {
  id: 1,
  name: "Montreal",
  province_id: 1,
  description: "This is a city description",
  timeZone: "UTC−4",
  image: "ImageURL",
};


////////////////////////////////////////////////////////////////////////////////////

storiesOf("City", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("City", () => (
    <City cityId={city.id} name={city.name} description={city.description} />
  ));

storiesOf("Statistics", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("Statistics", () => (
    <Statistics cityId={city.id} /*statistics={statistics}*/ />
  ));

storiesOf("StatisticsItem", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("StatisticsItem", () => (
    <StatisticsItem cityId={city.id} /*statistics={statistics}*/ />
  ));

////////////////////////////////////////////////////////////////////////////////////

storiesOf("Province", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("Quebec", () => (
    <Province
     provinces={provinces[0]}
    />
  ));

storiesOf("CityList", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("Quebec", () => 
    <Citylist  
      id={cities[0].id}
      name={cities[0].name}
      description={cities[0].description} />);

storiesOf("CityListItem", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("Montreal", () => (
    <CityListItem
      id={city.id}
      name={city.name}
      description={city.description}
    />
  ));

////////////////////////////////////////////////////////////////////////////////////

storiesOf("Questionnaire", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("Questionnaire", () => 
    <Questionnaire
      questions={ questions }
    />);
  
storiesOf("Form", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("Form", () => 
    <Form
    key={questions[0].id}
    question={questions[0].question}
    potential_answers={questions[0].potential_answers}
    user_answer={questions[0].user_answer}
    updateAnswers={""}
    />);


storiesOf("AnswerOptions", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("AnswerOptions", () => 
    <AnswerOptions
      potential_answer={ questions[0].potential_answers[0] }
      updateAnswers={ action("chosen-answers") }
    />)




storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Danger</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

storiesOf("Footer", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("Footer", () => <Footer />);

storiesOf("Header", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("Header", () => <Header />);

/////////////////////////// Wish List <3 ////////////////////////////

//Goes in Questionnaire component
// storiesOf("DropDownMenu", module)
//   .addParameters({
//     backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
//   })
//   .add("DropDownMenu", () => (
//     <DropDownMenu
//       questionId={questions[0]}
//       // Options={}
//     />
//   ));

// storiesOf("DropDownMenuItem", module)
//   .addParameters({
//     backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
//   })
//   .add("Montreal", () => (
//     <DropDownMenuItem
//       id={province.id}
//       name={province.name}
//       description={province.description}
//     />
//   ));

storiesOf("Icon", module)
  .addParameters({
    backgrounds: [{ name: "light", value: "#FEF5EB", default: true }],
  })
  .add("Ocean View", () => <Icon />)
  .add("Country Side", () => <Icon />)
  .add("Mountain View", () => <Icon />);
