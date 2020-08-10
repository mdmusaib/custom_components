import React from "react";
import "../gridLayout.css";
import img_avatar from "../img_avatar.jpg";

const GpGridLayout = (props) => {
  const handleClick = (value) => {
    props.onClick(value);
  };

  return (
    <React.Fragment>
      <div className="wrapper">
        <div
          class="card"
          onClick={() => {
            handleClick("Designer");
          }}
          title="Designer"
        >
          <img class="card-img-top" src={img_avatar} alt="Avatar" />
          <div class="card-body p-0 m-0">
            <p class="text-center">
              <span>
                <b>TEST1</b>
              </span>
            </p>
          </div>
        </div>

        <div
          class="card"
          onClick={() => {
            handleClick("Loader");
          }}
          title="Loader"
        >
          <img class="card-img-top" src={img_avatar} alt="Avatar" />
          <div class="card-body p-0 m-0">
            <p class="text-center">
              <span>
                <b>TEST2</b>
              </span>
            </p>
          </div>
        </div>

        <div
          class="card"
          onClick={() => {
            handleClick("Fuel Burn");
          }}
          title="Fuel Burn"
        >
          <img class="card-img-top" src={img_avatar} alt="Avatar" />
          <div class="card-body p-0 m-0">
            <p class="text-center">
              <span>
                <b>TEST3</b>
              </span>
            </p>
          </div>
        </div>

        <div
          class="card"
          onClick={() => {
            handleClick("Task Manager");
          }}
          title="Task Manager"
        >
          <img class="card-img-top" src={img_avatar} alt="Avatar" />
          <div class="card-body p-0 m-0">
            <p class="text-center">
              <span>
                <b>TEST4</b>
              </span>
            </p>
          </div>
        </div>

        <div
          class="card"
          onClick={() => {
            handleClick("Publisher");
          }}
          title="Publisher"
        >
          <img class="card-img-top" src={img_avatar} alt="Avatar" />
          <div class="card-body p-0 m-0">
            <p class="text-center">
              <span>
                <b>TEST5</b>
              </span>
            </p>
          </div>
        </div>

        <div
          class="card"
          onClick={() => {
            handleClick("Caterer Portal");
          }}
          title="Caterer Portal"
        >
          <img class="card-img-top" src={img_avatar} alt="Avatar" />
          <div class="card-body p-0 m-0">
            <p class="text-center">
              <span>
                <b>TEST6</b>
              </span>
            </p>
          </div>
        </div>

        <div
          class="card"
          onClick={() => {
            handleClick("Reference Data");
          }}
          title="Reference Data"
        >
          <img class="card-img-top" src={img_avatar} alt="Avatar" />
          <div class="card-body p-0 m-0">
            <p class="text-center">
              <span>
                <b>TEST7</b>
              </span>
            </p>
          </div>
        </div>

        <div
          class="card"
          onClick={() => {
            handleClick("Image Library");
          }}
          title="Image Library"
        >
          <img class="card-img-top" src={img_avatar} alt="Avatar" />
          <div class="card-body p-0 m-0">
            <p class="text-center">
              <span>
                <b>TEST8</b>
              </span>
            </p>
          </div>
        </div>

        <div
          class="card"
          onClick={() => {
            handleClick("Part Catelog");
          }}
          title="Part Catelog"
        >
          <img class="card-img-top" src={img_avatar} alt="Avatar" />
          <div class="card-body p-0 m-0">
            <p class="text-center">
              <span>
                <b>TEST9</b>
              </span>
            </p>
          </div>
        </div>

        <div
          class="card"
          onClick={() => {
            handleClick("Container Catelog");
          }}
          title="container Catelog"
        >
          <img class="card-img-top" src={img_avatar} alt="Avatar" />
          <div class="card-body p-0 m-0">
            <p class="text-center">
              <span>
                <b>TEST10</b>
              </span>
            </p>
          </div>
        </div>

        <div
          class="card"
          onClick={() => {
            handleClick("Preferences");
          }}
          title="Preferences"
        >
          <img class="card-img-top" src={img_avatar} alt="Avatar" />
          <div class="card-body p-0 m-0">
            <p class="text-center">
              <span>
                <b>TEST11</b>
              </span>
            </p>
          </div>
        </div>

        <div
          class="card"
          onClick={() => {
            handleClick("Tools");
          }}
          title="Tools"
        >
          <img class="card-img-top" src={img_avatar} alt="Avatar" />
          <div class="card-body p-0 m-0">
            <p class="text-center">
              <span>
                <b>TEST12</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default GpGridLayout;
