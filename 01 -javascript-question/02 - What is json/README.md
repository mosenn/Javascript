# What is JSON 

در واقع JSON یک ساختار شبیه به ساختار object در javascript هست . 

اما JSON یک کار خاصی رو برای ما انجام میده زمانی که بخوایم یک data منتقل کنیم . 

به عنوان مثال یک ارسال از website به server داشته باشیم نوع دیتا ارسالی ما نیاز هست که از نوع text باشه . 

اینجاست که JSON به ما کمک می کنه برای تغییر دیتای مد نظر ما به text که بتونیم دیتای خودمون رو انتقال بدیم .


## JSON Method 

در کل 2 تا متد داره parse و stringfy . 

در کد زیر text که داشتیم تبدیل شده به یک object .

در واقع parse معنی فارسی تجزیه رو میده .

```
JSON.parse(text);
```

در کد زیر متد stringfy رو مشاهده می کنید : 


```
JSON.stringify(object);
```

به وسیله متد stringfy یک object رو تبدیل می کنیم به یک text که بتونیم بهش دسترسی داشته باشیم در فضای network . 

## sampel 

 یدونه ارایه داریک که درونش چند object داریم  می خوایم درون localstorge ذخیره کنیم 
 
 و بعد از ذخیره   دسترسی بگیریم . 

که نیاز داریم از JSON و متد های JSON استفاده کنیم . 

همینطور برای ارسال دیتای که سمت فرانت داریم و می خوایم سمت بک اند ارسال کنیم نیاز داریم از JSON استفاده کنیم . 

در این مثال  از localstroge استفاده کردیم .

یک `div` داریم با که id به اسم root براش گذاشتیم :


```javascript
    <div id="root"></div>
```
در ادامه کد های javascript رو داریم :

```javascript
        const Technology = [{ name: 'nodejs' }, { name: "reactjs" }, { name: "javascript" }]

        const stringify = localStorage.setItem('Technology', JSON.stringify(Technology))
        const parse = JSON.parse(localStorage.getItem('Technology'))
  
        const root = document.querySelector('#root')
        root.innerHTML = `${parse.map((items)=> {return items.name}).join(' ')}`
```

**نکته : تمرکز روی متد های JSON هست که البته با local هم تا حدی داریم اشنا میشیم**

یک متغییر به اسم `Technology` داریم درواقع یک ارایه و ابجکت هست .

می خوایم `Technology` که داریم درون localstroge مرورگر قرار بدیم . 

از متد setItem برای قرار دادن در localstroge استفاده میشه . 

```
localStorage.setItem('Technology', JSON.stringify(Technology))
```

مقدار اول یک اسم میگیره هر اسمی به دلخواه می تونیم قرار بدیم که ما همون `Technology`  قرار دادیم  . 

اما مقدار دوم چیزی هست که قصد داریم درون localstroge قرار بدیم و دخیره کنیم که نیاز هست حتما به صورت string باشه  . 

اینجاست برای اینکه بتونیم مقداری رو به string تبدیل کنیم از JSON متد stringfy استفاده می کنیم . 


درون localstroge نگاه کنیم می بینیم که به صورت یک JSON ذخیره شده : 

![image](https://github.com/mosenn/Javascript/assets/91747908/63974437-41c1-47e1-93b8-c7c3d656f01c)

در واقع یک object رو تبدیل کردیم به یک text که قابلیت ذخیره شدن در مرورگر رو داشته باشه در localstroge 

## Parse 

برای اینکه اطلاعاتی که درون localstroge ذخیره کردیم بگیریم و از حالت text که ذخیره شده به حالت object 

بر گردونیم میایم از متد parse استفاده می کنیم . 

```javascript
   const parse = JSON.parse(localStorage.getItem('Technology'))
```

از متد localstroge.getItem استفاده می کنیم و اسم key که ذخیره کردیم رو بهش پاس میدیم 

```javascript
localStorage.getItem('Technology')
```

منتها این localstroge.getItem برای اینکه از حالت text خارج شه و به حالت object برگشت داده شه میایم از متد parse استفاده می کنیم :

```javascript
   const parse = JSON.parse(localStorage.getItem('Technology'))
```

اگر یک log بگیریم از متغییر parse خروجی زیر رو خواهیم داشت : 

```javascript
   const parse = JSON.parse(localStorage.getItem('Technology'))
   console.log(parse)
```

خروچی که در log داریم : 

![image](https://github.com/mosenn/Javascript/assets/91747908/579f0e41-4570-45f2-8296-d5999e546578)


در ادامه حالا یک ارایه داریم که حاوی ابجکت هست و می تونیم از متد ها استفاده کنیم 

که برای تکمیل شدن از متد map استفاده کردیم و name ها رو در صحفه نمایش دادیم : 

```javascript
        const root = document.querySelector('#root')
        root.innerHTML = `${parse.map((items) => { return items.name }).join(' ')}`
```


# Summary 

با دو متد localstroge اشنا شدیم به اسم getItem , setItem 

با متد های JSON اشنا شدیم که در کل دو متد داره stringfy , parse

با خوده JSON اشنا شدیم که چی هست و کجاها استفاده میشه 

در نهایت یک مثال به وسیله localstroge و همراه با json زدیم . 

# END 


`پایان بخش JSON `

