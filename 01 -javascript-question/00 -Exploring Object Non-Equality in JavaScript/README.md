# Exploring Object Non-Equality in JavaScript

در این بخش می خوایم در مورد این صحبت کنیم که چرا 2 تا object با هم برابر نیستند در جاوا اسکریپت حتی اگر هم نام باشند . 


# Types 

برای بررسی این موضوع بدونیم چه تایپ های داریم درون جاوا اسکریپت و تفاوت شون چی هست 

در جاوااسکریپت دو نوع تایپ به طور کلی داریم primitive type و  reference type 


## primitive types 

<p align='center'>
  <img src='https://github.com/mosenn/javascript-question/assets/91747908/1dbe6ed1-3b8b-460b-ac67-4e3c9408a2a1' alt='object in javascript' />
</p>



به string , numbers , null , undefined , boolean , symbols  به این تایپ ها primitive types گفته میشه . 

**نکته: در واقع string متد های داره که جاوااسکریپت می تونه primitive strings رو به string objects تبدیل کنه**

یک کد ببنیم که یک primitive string تبدیل به یک string object میشه : 


```javascript
// Primitive string
let primitiveString = "Hello, World!";

// Convert primitive string to string object
let stringObject = new String(primitiveString);

// Check if it's a string object
if (stringObject instanceof String) {
  console.log("Primitive string is converted to a string object.");
  
  // You can now use string object methods
  console.log("Uppercase: " + stringObject.toUpperCase());
  console.log("Length: " + stringObject.length);
} else {
  console.log("Not a string object.");
}
```

در کد بالا به وسیله new String از primitive String یک object ایجاد کردیم و درون if از متد upperCase استفاده کردیم  

و به وسیله length طول string متوجه شدیم

**نکته : حتما نیاز نیست به وسیله کد بالا یک string رو بیام تبدیل به یک ابجکت کنیم تا بهتونیم از متد هاش استفاده کنیم**

در جاوااسکریپت primitive string به طور پیش فرض به متد های string object دسترسی داره

به همین دلیل نیاز نیست از ()new Strting یا ()ُString استفاده کنیم که primitive string رو به string object تبدیل کنیم .

مثال : 

```javascript
// Primitive string
let  primitiveString = "Hello, World!";
// Access string object methods directly on the primitive string
console.log("Uppercase: " + primitiveString.toUpperCase());
console.log("Length: " + primitiveString.length);
```

## Reference

<p align='center'>
  <img src='https://github.com/mosenn/javascript-question/assets/91747908/bcc07bc1-24a8-48f4-a679-1d318b761831' alt='object in javascript' />
</p>
به Array , object , function , Dates , collections ,  در واقع refrence type گفته میشه . 

### save in Memory

نحوه ذخیره شدن reference  با primitive  کمی متفاوت هست . 

نحوه ذخیره‌سازی در حافظه (Memory) :

•	زمانی که یک object در جاوااسکریپت ایجاد می‌شود، یک فضای حافظه (memory) برای آن اختصاص می‌یابد.

این فضا با یک شناسه یا "آدرس حافظه" مشخص می‌شود که بهش می گن **memory address **

•	اشاره به object به وسیله نام یا متغیری که ما برای آن انتخاب می‌کنیم انجام می‌شود. این نام به محل ذخیره شدن آن object اشاره دارد.

•	در تصویر، object1 به object متناظر با آن اشاره دارد.

این اشاره نشان‌دهنده آدرس حافظه است که این object در آنجا ذخیره شده است.


<p align='center'>
  <img src='https://github.com/mosenn/javascript-question/assets/91747908/b15ccc55-634d-4097-92dd-636edda0a18c' alt='object in javascript' />
</p>





زمانی که بیایم یک object بسازیم و بخوایم یک refrence ازش ایجاد می کنیم . 

زمانی که بیام refrence که ساختیم رو تغییر بدیم object اصلی هم تغییر می کنه . 

```javascript
const object1 = {
name:'mohsen',
};
let object2 = object1;
//updating object1,

object1.name = 'abbasi';
console.log(object2); //we see that object2 also updates the name attribute
```


<p align='center'>
  <img src='https://github.com/mosenn/javascript-question/assets/91747908/0e0e998b-aaae-4588-825a-c980ae5687a9' alt='object in javascript' />
</p>


همونطور که در تصویر بالا مشاهده میشه هم object1 هم object2 به یک محل اشاره می کنند در واقع به ابجکت که ساخته و ذخیره شده .

## Demystifying JavaScript Object Non-Equality


بریم سر اصل مطلب که چرا 2 تا object با هم برابر نیستند . 

<img src='https://github.com/mosenn/javascript-question/assets/91747908/3e50bd2a-5554-4d31-b1c1-7b71bf2bc07b' alt='object in javascript' />

```javascript

const object1 = {};
const object2 = {};

// Comparing objects using ===
const areEqual = object1 === object2;
console.log(areEqual)  // Returns false
// Each object has a unique 'id' created during instantiation
// This 'id' is a unique memory address identifier
// Therefore, objects with distinct 'id's are not equal with ===

```

در قسمت save in memory اشاره کردیم به این موضوع ولی دقیق تر بررسی کنیم . 

زمانی که یک object ساخته میشه به همراش یک مقدار خاص و یونیک ایجاد میشه که برای درک بیشتر اسم این مقدار خاص رو `id` می زاریم 

این `id` که به عنوان یک مقدار یونیک برای هر object ایجاد می‌شود 

**نکته: در اینجا از id استفاده کردیم برای درک بهتر در واقع  reference  یا memory address هم اشاره شده**
یک object در یک نقطه از حافظه به اسم memory address میاد ذخیره میشه .

زمانی که  دو object تعریف می کنیم و میایم باهم دیگه مقایسه شون می کنیم `===` مقدار `false` رو  به ما برگشت میده

به این دلیل `false` برگشت داده میشه که مقدار `id`  که برای هر object ایجاد شده میاد مقایسه میشه . 

**این id برای هر `object` متفاوت هست مقدار `false` برگشت داده میشه.** 

نوع Reference  type میاد بر اساس ادرس مکانشون در حافظه مقایشه میشن نه بر اساس مقدار یا value . 

زمانی دو تا متغیر که Reference  type هستند  با هم مساوی میشن که **هر دو به یک نقطه از حافظه** ذخیره شده اشاره کنند 


```javascript
let object1 = {name:"mohsen"} 
let object2 = {name:"mohsen"} 

const compare = object1.name === object2.name
console.log(compare) // true

```

در غیر این صورت مساوی و برابر **نیستند** حتی اگر مقدار درونی  شون کاملا با هم برابر باشد . 

```javascript
let object1 = {name:"mohsen"} 
let object2 = {name:"mohsen"} 

const compare = object1 === object2
console.log(compare) //false

```

# Summary 

در مورد primitive type و reference  type صحبت کردیم . 

موضوع اصلی این بود که چرا دو object در جاوااسکریپت برابر نیستند و مقدار false رو برگشت میدن . 

# END 

**پایان  Exploring Object Non-Equality in JavaScript**
