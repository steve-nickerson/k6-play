# K6 load testing playground

## Docs and how tos

[https://k6.io/docs/](https://k6.io/docs/)

## Suggested execution is via Docker

To get K6 image:

`docker pull loadimpact/k6`

To execute in bash with Docker:

`docker run -i --rm loadimpact\k6 run - <script.js`

where:
- --rm is used to remove the container after exit
- \- is used to pass an empty name to input
- \-<script is to redirect the target file script.js as stdin

To execute via CLI:

`k6 run script.js`

To execute in Windows PowerShell with Docker

`PS C:\> cat script.js | docker run -i --tm loadimpact/k6 run -`

where:
- cat is used to pipe content into the container as stdin
- \- is used to pass an empty name to input

## Project organization

- Categories of types of tests have their own folder
- The root contains general simple scripts
- Use the `output` folder to write any test run output
