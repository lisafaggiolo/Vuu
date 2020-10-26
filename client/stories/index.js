import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
//import "index.scss";

import City from '../src/components/City';

import Province from '../src/components/Province';
import Citylist from '../src/components/Province/CityList';
import CityListItem from '../src/components/Province/CityListItem';

import Questionnaire from '../src/components/Questionnaire';
import Form from "../src/components/Questionnaire/Form";
import DropDownMenu from '../src/components/Questionnaire/DropDownMenu';
import DropDownMenuItem from '../src/components/Questionnaire/DropDownMenuItem'

import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Icon from '../src/components/Icon';

const province = {
  id: 1,
  name: "Quebec", 
  description: "Quebec is the second most populous Canadian province and known primarily for its French-speaking population, culture, and heritage. It is the country's largest province by land area. Most residents live along and near the St. Lawrence River, especially in and between Montreal and Quebec City, the two major cities."
}

const cities = [
  {  
    id: 1,
    name: "Montreal",
    province_id: 1,
    description: "",
    timeZone: "UTC−4",
    image:"ImageURL"
  },
  {  
    id: 2,
    name: "Quebec City",
    province_id: 1,
    description: "",
    timeZone: "UTC−4",
    image:"ImageURL"
  },
  {  
    id: 3,
    name: "Perce",
    province_id: 1,
    description: "",
    timeZone: "UTC−4",
    image:"ImageURL"
  }
]

const city = {
  id: 1,
  name: "Montreal",
  province_id: 1,
  description: "This is a city description",
  timeZone: "UTC−4",
  image:"ImageURL"
}

const questions = [
  {
    id: 1,
    question: "Which Province would you like to visit?",
    answer:"Province string"// dropdown menue with the provinces?
  },
  {
    id: 2,
    question: "Are you planning on changing your office location for a duration longer than 6 months?",
    answer: false
  },
  {
    id: 3,
    question: "In which timeZone is your home office located?",
    answer:""//drop down menu of canadian timeZones?
  },
  {
    id: 4,
    question: "Is staying in the same time Zone a requirement for work?",
    answer: true
  }
]




////////////////////////////////////////////////////////////////////////////////////

storiesOf("City", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("City", () => (
    <City cityId={city.id} name={city.name} description={city.description}/>
  ))

storiesOf("Statistics", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Statistics", () => (
    <Statistics cityId={city.id} /*statistics={statistics}*//>
  ))

storiesOf("StatisticsItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("StatisticsItem", () => (
    <StatisticsItem cityId={city.id} /*statistics={statistics}*//>
  ))


////////////////////////////////////////////////////////////////////////////////////

storiesOf("Province", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  
  })
  .add("Quebec", () => (
    <Province 
      id={province.id}
      name={province.name}
      description={province.description}
      />  
  ))

storiesOf("CityList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Quebec", () => (
    <Citylist 
      cities={cities} 
      provinceId={province.id}
      />
  ))

storiesOf("CityListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Montreal", () => (
    <CityListItem 
      id={city.id} 
      name={city.name} 
      description={city.description}
      />
  ))



////////////////////////////////////////////////////////////////////////////////////

storiesOf("Questionnaire", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Questionnaire", () => (
    <Questionnaire />
  ))
  .add("Questionnaire with question", () => (
    <Form
    questionId={questions[0].id} 
    question={questions[0].question} 
    answer={questions[0].answer}
    onClick={action("onConfirm")}
    onCancel={action("onCancel")}
  />))

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("base", () => (<Button>Base</Button>
  ))
  .add("Confirm", () => (<Button confirm>Confirm</Button>
  ))
  .add("Danger", () => (<Button danger>Danger</Button>
  ))
  .add("Clickable", () => (<Button onClick={action('button-clicked')}>Clickable</Button>
  ))
  .add("Disabled", () => (<Button disabled onClick={action('button-clicked')}>Disabled</Button>
  ))




storiesOf("Footer", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Footer", () => (
    <Footer />
  ))

storiesOf("Header", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Header", () => (
    <Header />
  ))


/////////////////////////// Wish List <3 ////////////////////////////

//Goes in Questionnaire component
storiesOf("DropDownMenu", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("DropDownMenu", () => (
    <DropDownMenu 
      questionId={questions[0]} 
     // Options={}
      />
  ))

storiesOf("DropDownMenuItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Montreal", () => (
    <DropDownMenuItem 
      id={province.id} 
      name={province.name} 
      description={province.description} 
      />
  ))

storiesOf("Icon", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Ocean View", () =>(<Icon />))
  .add("Country Side", () =>(<Icon />))
  .add("Mountain View", () =>(<Icon />))

