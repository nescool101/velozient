# velozient
velozient golang react project by nescool101



Initialize the Go Project:


Initialize the Go project with the command:

go mod init backend
Adding Required Go Modules:


Add the necessary Go modules for the project:

go get github.com/gorilla/mux
Run the Backend App:


To start the backend application, run:

go run main.go
Frontend Local Setup:

Step 1: Install Dependencies


Install all frontend dependencies listed in package.json and their dependencies:

npm install
Step 2: Run Frontend Application

Start the frontend application:

npm start
Access the Application:

Open your web browser and visit:

http://localhost:3000

CURLS>
GET>
curl 'http://localhost:3000/cards' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8' -H 'Accept-Language: es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br' -H 'Connection: keep-alive' -H 'Upgrade-Insecure-Requests: 1' -H 'Sec-Fetch-Dest: document' -H 'Sec-Fetch-Mode: navigate' -H 'Sec-Fetch-Site: same-origin' -H 'If-None-Match: W/"348-GtHOpSWKmH80DCxeJoNEDFGHoV4"'

PUT>
curl 'http://localhost:9080/cards/3' -X PUT -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json;charset=utf-8' -H 'Origin: http://localhost:3000' -H 'Connection: keep-alive' -H 'Referer: http://localhost:3000/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-site' --data-raw '{"name":"namescao","cardType":"dsadasdasdsa","favorite":"Y","url":"sadadsasd","folder":"asdasasd","username":"","password":"32fsdfdsfsd","notes":"notes","advancedSettings":"settings"}'


POST>
curl --location --request POST 'http://localhost:9080/cards' \
--header 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Accept-Language: es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3' \
--header 'Accept-Encoding: gzip, deflate, br' \
--header 'Content-Type: application/json;charset=utf-8' \
--header 'Origin: http://localhost:3000' \
--header 'Connection: keep-alive' \
--header 'Referer: http://localhost:3000/' \
--header 'Sec-Fetch-Dest: empty' \
--header 'Sec-Fetch-Mode: cors' \
--header 'Sec-Fetch-Site: same-site' \
--data-raw '{"name":"namescao","cardType":"dsadasdasdsa","favorite":"A","url":"sadadsasd","folder":"asdasasd","username":"","password":"32fsdfdsfsd","notes":"notes","advancedSettings":"settings"}'


DELETE>
curl 'http://localhost:9080/cards/6' -X DELETE -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br' -H 'Origin: http://localhost:3000' -H 'Connection: keep-alive' -H 'Referer: http://localhost:3000/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-site'

GET BY NAME>
curl 'http://localhost:9080/cards/name/namescao345565' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br' -H 'Origin: http://localhost:3000' -H 'Connection: keep-alive' -H 'Referer: http://localhost:3000/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-site'


dependencies and/or libraries>
with go golang 17
gorila mux and for testing testify, for more info check go.mod file
