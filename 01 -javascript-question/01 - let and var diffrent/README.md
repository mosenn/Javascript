# let vs var

در این بخش می خوایم در مورد تفاوت let , var صحبت کنیم . 

که چندتا تفاوت دارند در اصل امروزه به جای var از const , let استفاده می کنیم . 
## es6 added let and const 

در سال 2015 در اپدیتی که Ecmascript به اسم ECMAScript2015  یا همون es6 داد امد let , const رو اضافه کرد. 

که برای assign کردن  از let, const استفاده شه و var کنار گذاشته شد . 
```javascript
//before es6
var color = 'blue' 
```

```javascript
//after es6
const user = 'Mohsen'
let active = true
```

## what is block scope in javascript 

در جاوا اسکریپت هر  `{}` curly braces  باز و بسه میشه یک block scope به حساب میاد .

خب می تونیم بگیم function , if  , loop که داریم block scope هستند . 

در جاوااسکریپت به let , const  میگیم blcok scope در اصل صرفا داخل blcok scope بهشون دسترسی داریم .

اما به var در جاوا اسکریپت میگیم function scoped به این معنی که در سرتاسر function بهش دسترسی داریم .  


## var is global variable



زمانی که یک variable var تعریف می کنیم به طور global تعریف میشه که در واقع این مقدار درون `window` ذخیره میشه 

و می تونیم به وسیله keywrod this   به var  دسترسی داریم . 

```javascript
 var x = 1;
let y = 2;
console.log(this.x); // will print 1
console.log(this.y); // will print undefined
```

# Behavior var 

بیایم یک فانکشن داشته باشیم درون فانکشن از یک متغییر var استفاده کنیم و از یک متغیر let استفاده کنیم . 

درون if سعی کنیم به متغییر های تعریف شده دسترسی بگیریم ببنیم چه اتفاقی می افته . 

```javascript
function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

```

یک `var x` داریم درون فانکشن به اسم `varScoping` . 

در ادامه یک `if` تعریف کردیم که گغتیم اگر مقدار if برابر با true بود , مقدار `x` به عدد 2 تغییر کنه . 

**نکته : مقدار if همیشه به صورت default true هست**

در ادامه log گرفتیم . که در واقع مثدار x ما تغییر کرده به عدد 2 . 

در بیرون از if هم log گرفتیم , اینجا مهمه که مقدار اولیه x تغییر کرده و حتی بیرون از scope if به مقداری که تغییر کرده دسترسی داریم 

این به این معنی هست که `var` در واقع block scope نیست و می تونیم خارج از block هم بهش دسترسی داشته باشیم که اینجاست که می گن var functional scope هست .

یعنی وقتی یک متغیر var تعریف میشه در همه جای فانکشن می تونیم بهش دسترسی داشته باشیم چه درون if , for , چه بیرون  

و هر تغییری ایجاد شه تاثیر شو خواهد گذاشت روی متغییری که با var تعریف کردیم .

# behavior let 


خب بریم ببینیم let چطوری رفتار می کنه , همون فانکشن رو برای let پیاده سازی می کنیم . 

که ببینیم برای let چه اتفاقی می افته .

```javascript
function letScoping() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }
  console.log(x); // will print 1
}
```

خب جالب شد .. الان مقدار x که درون block if داریم در واقع یک متغییر جدا هست . 

و دیگه روی مقدار x اولیه که قبل از if هست تاثیر نمی ذاره . 

به زبان ساده تر هر کدوم دارن جدا کار خودشون رو انجام میدن و کاری به هم دیگه ندارند . 

درسته هم اسم هستند ولی کاملا 2 تا متغییر جدا از هم به حساب میاد که یکی داخل if و یکی داخل کل function تعریف شده . 

**اینجوری بگیم :**

که x که درون if تعریف شده فقط درون if بهش دسترسی داریم . 

و x که در کل فانکشن تعریف شده در کل فانکشن بهش دسترسی داریم .

هر کدوم جدا گانه با اینکه هم اسم هستند کار خودشون رو انجام میدن و اگر تغییر داشته باشند روی هم اثر نمی زارن .

 در مثال زیر درون block if که داریم به let دسترسی داریم و بیرون از block if دیگه به let دسترسی نداریم 
 
  اما به var بیرون از block if هم دسترسی داریم :

```javascript

function nestedScopeTest() {
  if (true) {
    var functionVariable = 1;
    let blockVariable = 2;

    console.log(functionVariable); // will print 1
    console.log(blockVariable); // will print 2

    if (true) {
      console.log(functionVariable); // will print 1
      console.log(blockVariable); // will print 2
    }
  }

  console.log(functionVariable); // will print 1
  console.log(blockVariable); // will throw an error
}

```
## same name 


اگر یک متغیر var مشابه داشته باشیم مشکلی پیش نخواهد امد حتی مقدار دهی هم میشه 

اما اگر یک متغیر let هم نام داشته باشیم با ارور مواجه میشیم . 

یکی از دلیل های که از let استفاده میشه به جای var همین موضوع هست که اگر بر حسب تصادف یک جای متغییر هم نام تعریف شد 

مقداری تغییر نکنه و بخواد کد رو دچار مشکل کنه و let در جا به ما ارور میده . 
```javascript
let name ='mohsen'
let name ='new user' // have a error

```
<img src='https://github.com/mosenn/javascript-question/assets/91747908/65f253a9-8f92-4c02-bb54-b6ff1cc631a7' alt='let vs var'/>


```javascript
var name = 'mohsen'
console.log(name ); // mohsen
var name ='new user'
console.log(name , name); // name is change not error
```
<img src='https://github.com/mosenn/javascript-question/assets/91747908/9766fd2b-4634-4902-a61a-169bb237be47' alt='let vs var in javascript' />



# Summary 

در مورد let , var صحبت کردیم و تفاوت شون رو بررسی کردیم 

به طور کلی بخوایم جمع بندی کنیم var function scope هست که در کل یک فانکشن می تونیم بهش دسترسی داشته باشیم 

حتی داخل block scope if و بیرون از اون . 

اما let در هر جا که تعریف شه در همون قسمت می تونیم بهش دسترسی داشته باشیم . اگر در if تعریف شده باشه صرفا درون همون if بهش دسترسی داریم . 

زمانی که یک var تعریف میشه درون window ذخیره میشه و می تونیم به وسیله keyword this بهش دسترسی داشته باشیم .

اگر دو variable let هم اسم تعریف کنیم با ارور مواجه خواهیم شد  

<img src='https://github.com/mosenn/javascript-question/assets/91747908/9766fd2b-4634-4902-a61a-169bb237be47' alt='let vs var in javascript'>

ولی اگر که دو  variable var هم اسم تعریف کنیم مقدار جدید اضافه میشه , روی متغییر اول هم تاثیر می ذاره : 

<img src='https://github.com/mosenn/javascript-question/assets/91747908/9766fd2b-4634-4902-a61a-169bb237be47' alt='let vs var in javascript' />


# END 

**پایان تفاوت let , var در جاوا اسکریپت**
