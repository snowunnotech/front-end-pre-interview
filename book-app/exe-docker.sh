
#!/bin/bash
docker build -t platform .
docker run -d -it -p 8080:80 --rm --name platform-dev platform
# docker run -d -it -p 9000:81 --rm --name platform-prod platform
