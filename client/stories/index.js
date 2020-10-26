import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "index.scss";

import City from '../src/components/City';
import Province from '../src/components/Province';
import Questionnaire from '../src/components/Questionnaire';

import Button from '../src/components/Button';
import Citylist from '../src/components/CityList';
import CityListItem from '../src/components/CityListItem';
import Description from '../src/components/Description';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Icon from '../src/components/Icon';

storiesOf("City", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Montreal", () => (
    <City />
  ))

storiesOf("Province", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  
  })
  .add("Quebec", () => (
    <Province />
  ))

storiesOf("Questionnaire", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Question 0", () => (
    <Questionnaire />
  ))

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Get Started in Canada", () => (
    <Button />
  ))

storiesOf("CityList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Montreal", () => (<Citylist />))
  .add("Quebec City", () => (<Citylist />))
  .add("Perce", () => (<Citylist />))

storiesOf("CityListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Clickable", () => (
    <CityListItem />
  ))

storiesOf("Description", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Quebec", () => (
    <Description />
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

storiesOf("Icon", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add("Ocean View", () =>(<Icon />))
  .add("Country Side", () =>(<Icon />))
  .add("Mountain View", () =>(<Icon />))

