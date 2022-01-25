/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { getExchangeRate } from "../utils/api";
import styled from "styled-components";
import { comma } from "../utils/comma";

function SecondCalculator() {
  const [money, setMoney] = useState(1);
  const [selectedTab, setSelectedTab] = useState("CAD");
  const [selectedCountry, setCountry] = useState("USD");
  const [result, setResult] = useState(0);
  const [referenceDate, setReferenceDate] = useState("");
  const [exchangeRateInfo, setExchangeRateInfo] = useState({});

  const data = [
    { id: "0", tabTitle: "USD" },
    { id: "1", tabTitle: "CAD" },
    { id: "2", tabTitle: "KRW" },
    { id: "3", tabTitle: "HKD" },
    { id: "4", tabTitle: "JPY" },
    { id: "5", tabTitle: "CNY" },
  ];

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!exchangeRateInfo) return;
    calculate();
  }, [exchangeRateInfo, selectedCountry, selectedTab]);

  const handleSelectTab = (e) => {
    setCountry(e.target.value);
    calculate();
  };

  const handleClick = (e) => {
    setSelectedTab(e.target.id);
  };

  const calculate = () => {
    const fromCurrency = `USD${selectedCountry}`;
    const toCurrency = `USD${selectedTab}`;
    setResult(
      exchangeRateInfo[toCurrency] *
        (1 / exchangeRateInfo[fromCurrency]) *
        money
    );
  };

  const getData = async () => {
    try {
      const { quotes, timestamp } = await getExchangeRate();
      const { USDUSD, USDKRW, USDJPY, USDCAD, USDCNY, USDHKD } = quotes;
      setExchangeRateInfo({ USDUSD, USDKRW, USDJPY, USDCAD, USDCNY, USDHKD });
      convertDate(timestamp);
    } catch (e) {
      console.log(e);
    }
  };

  const convertDate = (time) => {
    const dateObject = new window.Date(time * 1000);
    const dateFormat = dateObject.toLocaleDateString();
    const monthName = dateObject.toLocaleString("en-US", {
      month: "short",
    });
    setReferenceDate(
      dateFormat.slice(0, 4) + "-" + monthName + "-" + dateFormat.slice(9, 11)
    );
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/, "");
    const maxMoney = 1000;
    if (value <= maxMoney && value >= 0) {
      setMoney(value);
    } else {
      setMoney(maxMoney);
    }
    calculate();
  };

  const handleEnter = (e) => {
    if (e.charCode === 13) {
      calculate();
    }
  };

  const handleInputClick = (e) => {
    e.target.value = "";
    setMoney("");
  };

  return (
    <CalculatorContainer>
      <InputBox>
        <input
          onChange={handleChange}
          onKeyPress={handleEnter}
          onClick={handleInputClick}
          type="number"
          value={money}
        ></input>
        <select onChange={handleSelectTab}>
          {data.map((item) => (
            <option key={item.id}>{item.tabTitle}</option>
          ))}
        </select>
      </InputBox>
      <ResultWrapper>
        <Tabs>
          {data
            .filter((item) => item.tabTitle !== selectedCountry)
            .map((item) => (
              <Tab
                key={item.id}
                id={item.tabTitle}
                onClick={handleClick}
                isActive={selectedTab === item.tabTitle}
              >
                {item.tabTitle}
              </Tab>
            ))}
        </Tabs>
        <ResultBox>
          <Currency>
            {result
              ? `${selectedTab}:${comma(result.toFixed(2))}`
              : "loading.."}
          </Currency>
          <Date>기준일 : {referenceDate}</Date>
        </ResultBox>
      </ResultWrapper>
    </CalculatorContainer>
  );
}

export default SecondCalculator;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30vh;
  height: 100vh;
`;
const InputBox = styled.div`
  display: flex;
  margin-bottom: 30px;

  input {
    width: 180px;
    height: 50px;
    margin-right: 20px;
    border: none;
    border-radius: 1rem;
    outline: none;
    font-size: 20px;
    font-weight: bold;
    padding: 0 4vmin;
    background: #fef9ef;
    color: #ff865e;
    caret-color: #ff865e;
    box-shadow: inset 0.1rem 0.1rem 0.25rem;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 100px;
    height: 50px;
    padding: 0.6em 1.4em;
    border: none;
    border-radius: 0.5em;
    caret-color: #ff865e;
    background-color: #ff865e;
    color: #fff;
    box-shadow: 0.1rem 0.1rem 0.3rem #ff865e;
    background: url(https://i.ibb.co/Fx36qgn/white-down-arrow-icon-9.png) 80% / 15% no-repeat #ff865e;
  }
  }
  select:hover,
  select:focus {
    border: 2px solid #ff695e;
  }
`;

const ResultWrapper = styled.div`
  box-shadow: 4px 4px 4px #fa9e7f;
`;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  background-color: #fef9ef;
`;

const Tabs = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin: 0;
  .tab-content {
    background-color: #f6d55c;
    padding: 5px;
    margin: 0;
  }
`;
const Tab = styled.div`
  background: ${(props) => (props.isActive ? "#FEF9EF" : "#ff865e")};
  color: ${(props) => (props.isActive ? "#ff865e" : "#FEF9EF")};
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
  width: 60px;
  border-left: 1px solid #fef9ef;
  text-align: center;
`;

const Currency = styled.h3`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 20px;
  color: #ff865e;
`;

const Date = styled.p`
  color: #ff865e;
`;
