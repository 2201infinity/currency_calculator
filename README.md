# 📝원티드 프리 온보딩 1주차 과제 - 환율 계산기



## **💡 웹사이트 배포**

​	👉 [배포링크](http://wanted-infinity.herokuapp.com) 👈



## **💡 과제 소개**

- 사용자 입력값에 따라 각 나라의 환율 정보 출력
- 환율 정보는 https://currencylayer.com/ 무료 api 서비스 사용
- 두 가지 종류의 환율 계산기 구현
  1. 첫 번째 계산기 : 송금액 환산 기능 → 수취국가 및 송금액 입력 후 환산
  2. 두 번째 계산기 : 지정 통화 기준 환산 → 통화 변경에 따른 환율 및 기준일 출력

## **💡 팀원 소개**

<table align="center">
<tr>
<td align="center"><a href="https://github.com/perfumelim"><img src="https://avatars.githubusercontent.com/perfumelim" width="100%" /></a></td>
<td align="center"><a href="https://github.com/kykim00"><img src="https://avatars.githubusercontent.com/kykim00" width="100%" /></a></td>
<td align="center"><a href="https://github.com/ksmfou98"><img src="https://avatars.githubusercontent.com/ksmfou98" width="100%" /></a></td>
<td align="center"><a href="https://github.com/yezyvibe"><img src="https://avatars.githubusercontent.com/yezyvibe" width="100%" /></a></td>
</tr>
<tr>
<td align="center"><b> 임향수 (팀장)</b></td>
<td align="center"><b>김기영</b></td>
<td align="center"><b>이도현</b></td>
<td align="center"><b>조예지</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

---

## **💡 프로젝트 구조**

```bash
├── public
│   ├── index.html
├── src
│  App.js
│  GlobalStyles.js
│  index.js
│  reportWebVitals.js
│  setupTests.js
│
├─components
│  │  Button.js
│  │  FirstCalculator.js
│  │  SecondCalculator.js
│  │
│  └─__test__
│          FirstCalculator.test.js
│
├─hooks
│      useExchangeRateLoad.js
│
├─pages
│      FirstCalculatorPage.js
│      MainPage.js
│      SecondCalculatorPage.js
│
└─utils
    │  api.js
    │  comma.js
    │  constants.js
    │
    └─__test__
            api.test.js
            comma.test.js
            exchangeRate.json

```



## **💡 구현 기능 상세**

### 		**🔍첫 번째 계산기 (담당  팀원  : 김기영, 이도현)**

<img src="https://i.ibb.co/q0q2yRM/2022-01-25-10-31-37.png" width="50%"/>

1. 수취국가는 한국, 일본, 필리핀 세 군데 중 하나를 select box로 선택합니다. 각각 통화는 KRW, JPY, PHP 입니다.

2. 수취국가를 선택하면 아래 환율이 바뀌어나타나야 합니다. 환율은 1 USD 기준으로 각각 KRW, JPY, PHP의 대응 금액입니다.

3. 송금액을 USD로 입력하고 Submit을 누르면 아래 다음과 같이 수취금액이 KRW, JPY, PHP 중 하나로 계산되어서 나와야 합니다.

4. 환율과 수취금액은 소숫점 2째자리까지, 3자리 이상 되면 콤마를 가운데 찍어 보여줍니다. 예를 들어 1234라면 1,234.00으로 나타냅니다.

5. 수취금액을 입력하지 않거나, 0보다 작은 금액이거나 10,000 USD보다 큰 금액, 혹은 바른 숫자가 아니라면 “송금액이 바르지 않습니다"라는 에러 메시지를 보여줍니다. 메시지는 팝업, 혹은 하단에 빨간 글씨로 나타나면 됩니다.

   
   
   ###		 **🔍두 번째 계산기 (담당 팀원 : 임향수, 조예지)**

<img src="https://i.ibb.co/4KDfVFf/2022-01-26-1-06-15.png" width="50%"/>

1. 계산기의 Input 영역에는 숫자만 입력할 수 있습니다. 1000 이상을 입력할 경우 값은 자동적으로 “1000”으로 변경됩니다.
2. “USD” 드롭다운 클릭시 USD,CAD,KRW, HKD,JPY,CNY 중 통화를 선택할 수 있습니다.
3. “USD” 드롭다운 메뉴에서 “CAD”를 선택하면, 하단의 탭에서 “CAD”는 제거되고 “USD”가 생성됩니다.
4. 사용자가 수치를 입력하거나 드롭다운 메뉴를 이용해 통화를 변경하면 환율이 동기화되어 변경됩니다.
5. 계산기 하단 박스 안에 환율 기준일이 표시됩니다.



## **💡 설치 및 시작하는 법**

**프로젝트 클론**

```bash
$ git clone https://github.com/2201infinity/currency_calculator.git
```

**패키지 설치**

```bash
$ npm install or yarn
```

**서버 실행**

```bash
$ npm run start or yarn run start
```
