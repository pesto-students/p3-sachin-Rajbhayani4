App start cmd 

start app on user
=> yarn start

.env file variables

PORT = 8080

DATABASE_URL = mongodb://localhost:27017/wealthportfolio

JWT_PRIVATE_KEY=wealthportfolio8080

EMAIL_PORT=587

EMAIL_SECURE=true

EMAIL_HOST=smtp.ethereal.email

EMAIL_USERNAME=mafalda.kerluke17@ethereal.email

EMAIL_PASSWORD=FxzXF9ZWzTxUCRNEzZ




*************************APIS and End Points*****************************

User

Signup API
URL ==> DomainName/user/SignupUser
Method: post
END Points => 
username: string
fullName: string
email: string
password: string
age: number
gender: enum["male", "female", "others"]

Login API
URL ==> DomainName/user/userLogin
Method: post
END Points => 
username: string
OR
email: string
password: string


IncomeExpenses

Create incomeExpenses
URL ==> DomainName/incomeExpenses/create
Method: post
END Points => 
type: enum["income", "expense"], 
value: number, 
description: string, 
date: date

Get incomeExpence 
URL ==> DomainName/incomeExpenses/get
Method: post
END Points => 
page: number
limit: number

Get incomeExpence by month and yearly
URL ==> DomainName/incomeExpenses/get
Method: post
END Points => 
page: number
limit: number
month: number
year: number

Update incomeExpence
URL ==> DomainName/incomeExpenses/upadte
Method: post
END Points => 
id: string
type: enum["income", "expense"], 
value: number, 
description: string, 
date: date

Delete incomeExpence
URL ==> DomainName/incomeExpenses/delete
Method: post
END Points => 
id: string

Funds

Create funds
URL ==> DomainName/funds/create
Method: post
END Points => 
type: enum["Assets", "Equity", "FixedIncome"],
value: number,
description: string,
date: string

Get funds
URL ==> DomainName/funds/get
Method: post
END Points => 
page: number,
limit: number

Update funds
URL ==> DomainName/funds/update
Method: post
END Points => 
id: string,
type: enum["Assets", "Equity", "FixedIncome"],
value: number,
description: string,
date: string

delete funds
URL ==> DomainName/funds/update
Method: post
END Points => 
id: string