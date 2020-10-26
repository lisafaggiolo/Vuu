import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "index.scss";

import City from '../src/components/City';
import Province from '../src/components/Province';
import Questionnaire from '../src/components/Questionnaire';

import Button from '../src/components/Button';
import Citylist from '../src/components/CityList';
import CityListItems from '../src/components/CityListItem';
import Description from '../src/components/Description';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Icons from '../src/components/Icons';

storiesOf("City", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add()

storiesOf("Province", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]

  }) 
  .add()

storiesOf("Questionnaire", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add()

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add()

storiesOf("CityList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add()

storiesOf("CityListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add()

storiesOf("Description", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add()

storiesOf("Footer", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add()

storiesOf("Header", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add()

storiesOf("Icons", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 
  .add()
