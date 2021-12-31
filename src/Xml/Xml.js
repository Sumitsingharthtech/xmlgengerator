/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineFileSync } from "react-icons/ai";
import { RiFileTransferLine } from "react-icons/ri";
import { toXML } from "jstoxml";
import "./Xml.scss";


const Xml = () => {
  const [entereData, setEnteredData] = useState( {
    teritory: "",
    startdate: "",
    enddate: "",
    region: "",
    xmlgenerate: "",
    zatcagenerate: "",
  });

const item= {
    header: '<?xml version="1.0" encoding="UTF-16" standalone="yes"?>',
  };
  toXML(  {entereData},item);

const [show,setShow]=useState(false);
const data = () => {
    setShow(false);
    history.push("/data");
    localStorage.setItem('item', item);
  }

  const onChangeHandler = (e) => {
    e.preventDefault();
    setEnteredData({ ...entereData, [e.target.name]: e.target.value });
  };
  let history = useHistory();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    history.push("/data");
  };

  return (
    <div class="form_wrapper">
      <div class="form_container">
        <div class="title_container">
          <h2>XML Generation</h2>
        </div>
        <div onSubmit={onSubmitHandler}>
          <div class="row clearfix">
            <div class="">
              <div class="input_field">
                <label for="html">Territory:</label>{" "}
                <span>
                  <FiMapPin />
                </span>
                <input
                  type="text"
                  name="teritory"
                  placeholder="Territory"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div class="row clearfix">
                <div class="col_half">
                  <div class="input_field">
                    <label for="html">From Date:</label>
                    <input
                      type="date"
                      name="startdate"
                      placeholder="From Date"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div class="col_half">
                  <div class="input_field">
                    <label for="html">End Date:</label>
                    <input
                      type="date"
                      name="enddate"
                      placeholder="End Date"
                      onChange={onChangeHandler}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="input_field">
                <label for="html">Region:</label>{" "}
                <span>
                  <GiEarthAsiaOceania />
                </span>
                <input
                  type="text"
                  name="region"
                  placeholder="Region"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div class="input_field">
                {" "}
                <label for="html">Generate XML:</label>
                <span>
                  <AiOutlineFileSync />
                </span>
                <input
                  type="text"
                  name="xmlgenerate"
                  placeholder="Generate XML"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div class="input_field">
                <label for="html">Transfer To ZATCA</label>
                <span>
                  <RiFileTransferLine />
                </span>
                <input
                  type="text"
                  name="zatcagenerate"
                  placeholder="Transfer To ZATCA"
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <button type="submit" onClick={data}>
                Submit
              </button>
            </div>
            {show && <p> {item}</p>}
            {console.log(item)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xml;
