Chat Project test application for Docker experiments


To Do:
--Need to refactor docker image to run scripts to set environment variables
--How do secret files get integrated into application before it is run (dev_secret)
--How do we automate the pulling of source code from GIT to deploy on servers that we just spun up?
--How do we set DNS post deployment?


Process:
GIT >> Docker Hub: Automated Build/store Docker Images  >>

Create Cluster >>
Deploy Docker Images >>
Configure environment and run (need to pull and use secrets by passing env vars at runtime)