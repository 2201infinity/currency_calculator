# πμν°λ νλ¦¬ μ¨λ³΄λ© 1μ£Όμ°¨ κ³Όμ  - νμ¨ κ³μ°κΈ°



## **π‘ μΉμ¬μ΄νΈ λ°°ν¬**

β	π [λ°°ν¬λ§ν¬](http://wanted-infinity.herokuapp.com) π



## **π‘ κ³Όμ  μκ°**

- μ¬μ©μ μλ ₯κ°μ λ°λΌ κ° λλΌμ νμ¨ μ λ³΄ μΆλ ₯
- νμ¨ μ λ³΄λ https://currencylayer.com/ λ¬΄λ£ api μλΉμ€ μ¬μ©
- λ κ°μ§ μ’λ₯μ νμ¨ κ³μ°κΈ° κ΅¬ν
  1. μ²« λ²μ§Έ κ³μ°κΈ° : μ‘κΈμ‘ νμ° κΈ°λ₯ β μμ·¨κ΅­κ° λ° μ‘κΈμ‘ μλ ₯ ν νμ°
  2. λ λ²μ§Έ κ³μ°κΈ° : μ§μ  ν΅ν κΈ°μ€ νμ° β ν΅ν λ³κ²½μ λ°λ₯Έ νμ¨ λ° κΈ°μ€μΌ μΆλ ₯

## **π‘ νμ μκ°**

<table align="center">
<tr>
<td align="center"><a href="https://github.com/perfumelim"><img src="https://avatars.githubusercontent.com/perfumelim" width="100%" /></a></td>
<td align="center"><a href="https://github.com/kykim00"><img src="https://avatars.githubusercontent.com/kykim00" width="100%" /></a></td>
<td align="center"><a href="https://github.com/ksmfou98"><img src="https://avatars.githubusercontent.com/ksmfou98" width="100%" /></a></td>
<td align="center"><a href="https://github.com/yezyvibe"><img src="https://avatars.githubusercontent.com/yezyvibe" width="100%" /></a></td>
</tr>
<tr>
<td align="center"><b> μν₯μ (νμ₯)</b></td>
<td align="center"><b>κΉκΈ°μ</b></td>
<td align="center"><b>μ΄λν</b></td>
<td align="center"><b>μ‘°μμ§</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

---

## **π‘ νλ‘μ νΈ κ΅¬μ‘°**

```bash
βββ public
β   βββ index.html
βββ src
β  App.js
β  GlobalStyles.js
β  index.js
β  reportWebVitals.js
β  setupTests.js
β
ββcomponents
β  β  Button.js
β  β  FirstCalculator.js
β  β  SecondCalculator.js
β  β
β  ββ__test__
β          FirstCalculator.test.js
β
ββhooks
β      useExchangeRateLoad.js
β
ββpages
β      FirstCalculatorPage.js
β      MainPage.js
β      SecondCalculatorPage.js
β
ββutils
    β  api.js
    β  comma.js
    β  constants.js
    β
    ββ__test__
            api.test.js
            comma.test.js
            exchangeRate.json

```



## **π‘ κ΅¬ν κΈ°λ₯ μμΈ**

### 		**πμ²« λ²μ§Έ κ³μ°κΈ° (λ΄λΉ  νμ  : κΉκΈ°μ, μ΄λν)**

<img src="https://i.ibb.co/q0q2yRM/2022-01-25-10-31-37.png" width="50%"/>

1. μμ·¨κ΅­κ°λ νκ΅­, μΌλ³Έ, νλ¦¬ν μΈ κ΅°λ° μ€ νλλ₯Ό select boxλ‘ μ νν©λλ€. κ°κ° ν΅νλ KRW, JPY, PHP μλλ€.

2. μμ·¨κ΅­κ°λ₯Ό μ ννλ©΄ μλ νμ¨μ΄ λ°λμ΄λνλμΌ ν©λλ€. νμ¨μ 1 USD κΈ°μ€μΌλ‘ κ°κ° KRW, JPY, PHPμ λμ κΈμ‘μλλ€.

3. μ‘κΈμ‘μ USDλ‘ μλ ₯νκ³  Submitμ λλ₯΄λ©΄ μλ λ€μκ³Ό κ°μ΄ μμ·¨κΈμ‘μ΄ KRW, JPY, PHP μ€ νλλ‘ κ³μ°λμ΄μ λμμΌ ν©λλ€.

4. νμ¨κ³Ό μμ·¨κΈμ‘μ μμ«μ  2μ§Έμλ¦¬κΉμ§, 3μλ¦¬ μ΄μ λλ©΄ μ½€λ§λ₯Ό κ°μ΄λ° μ°μ΄ λ³΄μ¬μ€λλ€. μλ₯Ό λ€μ΄ 1234λΌλ©΄ 1,234.00μΌλ‘ λνλλλ€.

5. μμ·¨κΈμ‘μ μλ ₯νμ§ μκ±°λ, 0λ³΄λ€ μμ κΈμ‘μ΄κ±°λ 10,000 USDλ³΄λ€ ν° κΈμ‘, νΉμ λ°λ₯Έ μ«μκ° μλλΌλ©΄ βμ‘κΈμ‘μ΄ λ°λ₯΄μ§ μμ΅λλ€"λΌλ μλ¬ λ©μμ§λ₯Ό λ³΄μ¬μ€λλ€. λ©μμ§λ νμ, νΉμ νλ¨μ λΉ¨κ° κΈμ¨λ‘ λνλλ©΄ λ©λλ€.

   
   
   ###		 **πλ λ²μ§Έ κ³μ°κΈ° (λ΄λΉ νμ : μν₯μ, μ‘°μμ§)**

<img src="https://i.ibb.co/4KDfVFf/2022-01-26-1-06-15.png" width="50%"/>

1. κ³μ°κΈ°μ Input μμ­μλ μ«μλ§ μλ ₯ν  μ μμ΅λλ€. 1000 μ΄μμ μλ ₯ν  κ²½μ° κ°μ μλμ μΌλ‘ β1000βμΌλ‘ λ³κ²½λ©λλ€.
2. βUSDβ λλ‘­λ€μ΄ ν΄λ¦­μ USD,CAD,KRW, HKD,JPY,CNY μ€ ν΅νλ₯Ό μ νν  μ μμ΅λλ€.
3. βUSDβ λλ‘­λ€μ΄ λ©λ΄μμ βCADβλ₯Ό μ ννλ©΄, νλ¨μ ν­μμ βCADβλ μ κ±°λκ³  βUSDβκ° μμ±λ©λλ€.
4. μ¬μ©μκ° μμΉλ₯Ό μλ ₯νκ±°λ λλ‘­λ€μ΄ λ©λ΄λ₯Ό μ΄μ©ν΄ ν΅νλ₯Ό λ³κ²½νλ©΄ νμ¨μ΄ λκΈ°νλμ΄ λ³κ²½λ©λλ€.
5. κ³μ°κΈ° νλ¨ λ°μ€ μμ νμ¨ κΈ°μ€μΌμ΄ νμλ©λλ€.



## **π‘ μ€μΉ λ° μμνλ λ²**

**νλ‘μ νΈ ν΄λ‘ **

```bash
$ git clone https://github.com/2201infinity/currency_calculator.git
```

**ν¨ν€μ§ μ€μΉ**

```bash
$ npm install or yarn
```

**μλ² μ€ν**

```bash
$ npm run start or yarn run start
```
