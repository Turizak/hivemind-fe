
# Hivemind Frontend Repo

## :honeybee: What is Hivemind?

Hivemind is a reddit/forum style web application created by [Tom Slanda](https://www.github.com/slandath) and [Robert Kazirut](https://www.github.com/rakazirut).  This is the frontend repo of application and it works in parallel with [Hivemind Backend Repo](https://github.com/rakazirut/hivemind-be).

## Built With

![Static Badge](https://shields.io/badge/react-black?logo=react&style=for-the-badge)  
![Static Badge](https://img.shields.io/badge/React%20Router-badge?style=for-the-badge&logo=reactrouter&logoColor=%23CA4245&color=%23000000&link=https%3A%2F%2Freactrouter.com%2Fen%2Fmain)  
![Static Badge](https://img.shields.io/badge/-Tanstack%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=ffd94c)  
![Static Badge](https://img.shields.io/badge/-Tanstack%20Form-eab308?style=for-the-badge&logo=react%20query&logoColor=#ffd94c)  
![Static Badge](https://img.shields.io/badge/tailwindcss-0F172A?&style=for-the-badge&logo=tailwindcss)  
![Static Badge](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)  
![Static Badge](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)  

## Getting Started

1. Fork the repo  
   
```bash
git clone https://github.com/rakazirut/hivemind-fe.git
```  

2. Install  [Node.JS](https://nodejs.org/en)
   
3. Install Dependencies  

```bash
npm install
```  

4. Update Environmental Variables
   
Create a .env file in the root folder of the project and add the URL for your webserver  
```bash
touch .env && echo "VITE_BASEURL=https://www.yourwebserverURL.com" > .env
```

5. Run the app  
   
```bash
npm run dev
```

## License

Distributed under the Apache License.  See `LICENSE.txt` for more information.
